'use client';
import { useStore } from '@/lib/store';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import HomeView from '@/components/views/HomeView';
import BrowseView from '@/components/views/BrowseView';
import StudyView from '@/components/views/StudyView';

export default function AppShell() {
  const { state } = useStore();

  return (
    <div
      data-dark={state.darkLocal ? 'true' : 'false'}
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: 'var(--bg)',
        color: 'var(--fg)',
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      <Sidebar />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        {state.view === 'home' && <HomeView />}
        {state.view === 'browse' && <BrowseView />}
        {state.view === 'study' && <StudyView />}
      </main>
    </div>
  );
}
