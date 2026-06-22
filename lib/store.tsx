'use client';
import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import type { AppState, View, Band, CardType, TopicId, ModuleId, MasteryStatus } from './types';
import { CARDS } from './data';

type Action =
  | { type: 'SET_VIEW'; view: View }
  | { type: 'SET_MODULE'; module: ModuleId | 'all' }
  | { type: 'SET_TOPIC'; topic: TopicId | null }
  | { type: 'TOGGLE_BAND'; band: Band }
  | { type: 'TOGGLE_TYPE'; ctype: CardType }
  | { type: 'SET_SEARCH'; search: string }
  | { type: 'TOGGLE_EXPANDED'; id: string }
  | { type: 'SET_MASTERY'; id: string; status: MasteryStatus }
  | { type: 'TOGGLE_DARK' }
  | { type: 'START_STUDY'; ids: string[] }
  | { type: 'STUDY_NEXT' }
  | { type: 'TOGGLE_FLIP' }
  | { type: 'LOAD_MASTERY'; mastery: Record<string, MasteryStatus>; dark: boolean };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_VIEW': return { ...state, view: action.view };
    case 'SET_MODULE': return { ...state, module: action.module, topic: null, view: 'browse' };
    case 'SET_TOPIC': return { ...state, topic: action.topic, view: 'browse' };
    case 'TOGGLE_BAND': {
      const cur = state.bands;
      return { ...state, bands: cur.includes(action.band) ? cur.filter(d => d !== action.band) : [...cur, action.band] };
    }
    case 'TOGGLE_TYPE': {
      const cur = state.types;
      return { ...state, types: cur.includes(action.ctype) ? cur.filter(t => t !== action.ctype) : [...cur, action.ctype] };
    }
    case 'SET_SEARCH': return { ...state, search: action.search, view: action.search ? 'browse' : state.view };
    case 'TOGGLE_EXPANDED': return { ...state, expanded: { ...state.expanded, [action.id]: !state.expanded[action.id] } };
    case 'SET_MASTERY': {
      const mastery = { ...state.mastery, [action.id]: action.status };
      try { localStorage.setItem('ielts_mastery', JSON.stringify(mastery)); } catch {}
      return { ...state, mastery };
    }
    case 'TOGGLE_DARK': {
      const nd = !state.darkLocal;
      try { localStorage.setItem('ielts_dark', nd ? '1' : '0'); } catch {}
      return { ...state, darkLocal: nd };
    }
    case 'START_STUDY': return { ...state, view: 'study', studyIds: action.ids, studyIdx: 0, studyFlipped: false };
    case 'STUDY_NEXT': return { ...state, studyIdx: state.studyIdx + 1, studyFlipped: false };
    case 'TOGGLE_FLIP': return { ...state, studyFlipped: !state.studyFlipped };
    case 'LOAD_MASTERY': return { ...state, mastery: action.mastery, darkLocal: action.dark };
    default: return state;
  }
}

const initial: AppState = {
  view: 'home', module: 'all', topic: null,
  bands: [], types: [], search: '',
  expanded: {}, mastery: {}, darkLocal: false,
  studyIds: [], studyIdx: 0, studyFlipped: false,
};

interface StoreCtx {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  filtered: () => typeof CARDS;
  startStudy: () => void;
}

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    let mastery: Record<string, MasteryStatus> = {};
    let dark = false;
    try { mastery = JSON.parse(localStorage.getItem('ielts_mastery') || '{}'); } catch {}
    try { const d = localStorage.getItem('ielts_dark'); if (d !== null) dark = d === '1'; } catch {}
    dispatch({ type: 'LOAD_MASTERY', mastery, dark });
  }, []);

  function filtered() {
    const s = state;
    const q = s.search.trim().toLowerCase();
    return CARDS.filter(it => {
      if (s.module !== 'all' && it.module !== s.module) return false;
      if (s.topic && it.topic !== s.topic) return false;
      if (s.bands.length && !s.bands.includes(it.band)) return false;
      if (s.types.length && !s.types.includes(it.type)) return false;
      if (q) {
        const hay = (
          it.title + ' ' + it.tags.join(' ') + ' ' + it.ans.summary + ' ' +
          (it.ans.phrases || []).join(' ') + ' ' + (it.ans.examples || []).join(' ')
        ).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function startStudy() {
    const list = filtered();
    const pool = list.length ? list : CARDS;
    const due = pool.filter(d => state.mastery[d.id] !== 'mastered');
    const ids = (due.length ? due : pool).map(d => d.id);
    dispatch({ type: 'START_STUDY', ids });
  }

  return <Ctx.Provider value={{ state, dispatch, filtered, startStudy }}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
