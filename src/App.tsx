import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardView } from './components/dashboard/DashboardView';
import { AtlasViewer } from './components/atlas/AtlasViewer';
import { SystemsCatalog } from './components/systems/SystemsCatalog';
import { CoursesView } from './components/courses/CoursesView';
import { QuestionsView } from './components/questions/QuestionsView';
import { FlashcardsView } from './components/flashcards/FlashcardsView';
import { AITutorView } from './components/tutor/AITutorView';
import { ClinicalCasesView } from './components/cases/ClinicalCasesView';
import { HistologyView } from './components/histology/HistologyView';
import { NotesAndFavoritesView } from './components/notes/NotesAndFavoritesView';
import { ProgressView } from './components/progress/ProgressView';
import { ProfileAndLgpdView } from './components/profile/ProfileAndLgpdView';
import { AdminBackofficeView } from './components/admin/AdminBackofficeView';

const TabRouter: React.FC = () => {
  const { activeTab } = useApp();

  switch (activeTab) {
    case 'dashboard':
      return <DashboardView />;
    case 'atlas':
      return <AtlasViewer />;
    case 'sistemas':
      return <SystemsCatalog />;
    case 'cursos':
      return <CoursesView />;
    case 'questoes':
      return <QuestionsView />;
    case 'flashcards':
      return <FlashcardsView />;
    case 'tutor':
      return <AITutorView />;
    case 'casos-clinicos':
      return <ClinicalCasesView />;
    case 'histologia':
      return <HistologyView />;
    case 'anotacoes':
      return <NotesAndFavoritesView />;
    case 'progresso':
      return <ProgressView />;
    case 'perfil':
      return <ProfileAndLgpdView />;
    case 'admin':
      return <AdminBackofficeView />;
    default:
      return <DashboardView />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <AppLayout>
        <TabRouter />
      </AppLayout>
    </AppProvider>
  );
}
