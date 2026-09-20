import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  UserRole,
  AnatomicalStructure,
  PlatformConfig,
  UserNote,
  Flashcard,
  Course
} from '../types';
import {
  ANATOMICAL_STRUCTURES,
  COURSES_DATA,
  FLASHCARDS_DATA
} from '../data';

export type NavigationTab =
  | 'dashboard'
  | 'atlas'
  | 'sistemas'
  | 'cursos'
  | 'biblioteca'
  | 'resumos'
  | 'questoes'
  | 'simulados'
  | 'casos-clinicos'
  | 'tutor'
  | 'flashcards'
  | 'histologia'
  | 'progresso'
  | 'favoritos'
  | 'anotacoes'
  | 'perfil'
  | 'configuracoes'
  | 'admin';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  message: string;
}

interface AppContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  switchRole: (role: UserRole) => void;
  platformConfig: PlatformConfig;
  updatePlatformConfig: (newConfig: Partial<PlatformConfig>) => void;
  selectedStructureId: string;
  setSelectedStructureId: (id: string) => void;
  selectedStructure: AnatomicalStructure | undefined;
  navigateToStructureInAtlas: (structureId: string) => void;
  favorites: string[];
  toggleFavorite: (structureId: string) => void;
  notes: UserNote[];
  addNote: (note: Omit<UserNote, 'id' | 'createdAt'>) => void;
  deleteNote: (id: string) => void;
  courses: Course[];
  toggleLessonCompleted: (courseId: string, lessonId: string) => void;
  flashcards: Flashcard[];
  recordFlashcardReview: (cardId: string, rating: 'again' | 'hard' | 'good' | 'easy') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  addXP: (amount: number, reason?: string) => void;
}

const defaultPlatformConfig: PlatformConfig = {
  institutionName: 'Anatomia 360',
  tagline: 'Plataforma Educacional em Biomedicina & Ciências da Saúde',
  primaryColor: '#0F2942', // Deep Navy
  accentColor: '#00B4D8', // Cyan/Aqua
  contactEmail: 'academico@anatomia360.edu.br',
  demoModelDisclaimer: 'MODELO DE DEMONSTRAÇÃO CIENTÍFICA: As geometrias 3D atuais representam maquetes didáticas funcionais para demonstração, prontas para substituição por malhas GLB de alta resolução licenciadas via painel administrativo.'
};

const defaultUser: UserProfile = {
  uid: 'user_bio_001',
  name: 'Mariana Duarte',
  email: 'mariana.duarte@biomed.edu.br',
  role: 'student',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  institution: 'Universidade Federal de Ciências da Saúde',
  subscription: {
    plan: 'premium_annual',
    status: 'active',
    validUntil: '2027-12-31'
  },
  gamification: {
    xp: 2840,
    level: 7,
    streakDays: 14,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      'Primeiros Passos Anatômicos',
      'Explorador do Mediastino',
      'Mestre do Hemograma',
      'Repetição Espaçada 10 Dias',
      'Simulado Nota 10'
    ],
    isPublicOnLeaderboard: true
  },
  preferences: {
    theme: 'light',
    fontSize: 'normal',
    renderQuality: 'high'
  },
  lgpdConsent: {
    acceptedAt: '2026-01-15T10:00:00Z',
    version: '2.1'
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('a360_user');
    return saved ? JSON.parse(saved) : defaultUser;
  });
  const [platformConfig, setPlatformConfig] = useState<PlatformConfig>(() => {
    const saved = localStorage.getItem('a360_config');
    return saved ? JSON.parse(saved) : defaultPlatformConfig;
  });
  const [selectedStructureId, setSelectedStructureId] = useState<string>('coracao_miocardio');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('a360_favorites');
    return saved ? JSON.parse(saved) : ['coracao_miocardio', 'rim_esquerdo', 'pulmao_direito'];
  });
  const [notes, setNotes] = useState<UserNote[]>(() => {
    const saved = localStorage.getItem('a360_notes');
    return saved ? JSON.parse(saved) : [
      {
        id: 'note_1',
        structureId: 'coracao_miocardio',
        title: 'Irrigação da Artéria Descendente Anterior (ADA)',
        content: 'Lembrar que a ADA irriga 2/3 do septo e a parede anterior. A oclusão é responsável pela maioria dos óbitos em infarto agudo por fibrilação ventricular.',
        createdAt: '2026-03-10',
        tags: ['Cardio', 'Provas', 'Emergência']
      },
      {
        id: 'note_2',
        structureId: 'rim_esquerdo',
        title: 'Relação com artéria mesentérica superior',
        content: 'A veia renal esquerda passa sob a AMS. Se o ângulo for muito agudo (<40 graus), causa compressão com hematúria e dilatação do plexo pampiniforme (varicocele esquerda).',
        createdAt: '2026-03-12',
        tags: ['Urologia', 'Anatomia Topográfica']
      }
    ];
  });
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('a360_courses');
    return saved ? JSON.parse(saved) : COURSES_DATA;
  });
  const [flashcards, setFlashcards] = useState<Flashcard[]>(() => {
    const saved = localStorage.getItem('a360_flashcards');
    return saved ? JSON.parse(saved) : FLASHCARDS_DATA;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    localStorage.setItem('a360_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('a360_config', JSON.stringify(platformConfig));
  }, [platformConfig]);

  useEffect(() => {
    localStorage.setItem('a360_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('a360_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('a360_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('a360_flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const addXP = (amount: number, reason?: string) => {
    setCurrentUser((prev) => {
      const newXp = prev.gamification.xp + amount;
      const newLevel = Math.floor(newXp / 450) + 1;
      const leveledUp = newLevel > prev.gamification.level;
      if (leveledUp) {
        showToast(`🎉 Parabéns! Você subiu para o Nível ${newLevel} na Biomedicina!`, 'success');
      } else if (reason) {
        showToast(`+${amount} XP: ${reason}`, 'info');
      }
      return {
        ...prev,
        gamification: {
          ...prev.gamification,
          xp: newXp,
          level: newLevel
        }
      };
    });
  };

  const switchRole = (role: UserRole) => {
    setCurrentUser((prev) => ({
      ...prev,
      role
    }));
    showToast(`Perfil alterado para: ${role.toUpperCase()}`, 'info');
  };

  const updatePlatformConfig = (newConfig: Partial<PlatformConfig>) => {
    setPlatformConfig((prev) => ({ ...prev, ...newConfig }));
    showToast('Configurações institucionais da marca atualizadas com sucesso!', 'success');
  };

  const selectedStructure = ANATOMICAL_STRUCTURES.find((s) => s.id === selectedStructureId);

  const navigateToStructureInAtlas = (structureId: string) => {
    setSelectedStructureId(structureId);
    setActiveTab('atlas');
  };

  const toggleFavorite = (structureId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(structureId);
      if (exists) {
        showToast('Estrutura removida dos favoritos.', 'info');
        return prev.filter((id) => id !== structureId);
      } else {
        showToast('Estrutura adicionada aos seus favoritos!', 'success');
        addXP(10, 'Estrutura favoritada');
        return [...prev, structureId];
      }
    });
  };

  const addNote = (noteData: Omit<UserNote, 'id' | 'createdAt'>) => {
    const newNote: UserNote = {
      ...noteData,
      id: `note_${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setNotes((prev) => [newNote, ...prev]);
    showToast('Anotação científica salva com sucesso!', 'success');
    addXP(15, 'Nova anotação de estudo criada');
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    showToast('Anotação excluída.', 'info');
  };

  const toggleLessonCompleted = (courseId: string, lessonId: string) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id !== courseId) return course;
        return {
          ...course,
          modules: course.modules.map((mod) => ({
            ...mod,
            lessons: mod.lessons.map((lesson) => {
              if (lesson.id !== lessonId) return lesson;
              const nextState = !lesson.completed;
              if (nextState) {
                addXP(50, `Aula concluída: ${lesson.title}`);
              }
              return { ...lesson, completed: nextState };
            })
          }))
        };
      })
    );
  };

  const recordFlashcardReview = (cardId: string, rating: 'again' | 'hard' | 'good' | 'easy') => {
    setFlashcards((prev) =>
      prev.map((card) => {
        if (card.id !== cardId) return card;
        let newInterval = card.intervalDays;
        let newRepetition = card.repetition;
        let newEase = card.easeFactor;

        if (rating === 'again') {
          newRepetition = 0;
          newInterval = 1;
          newEase = Math.max(1.3, newEase - 0.2);
        } else if (rating === 'hard') {
          newInterval = Math.max(1, Math.round(card.intervalDays * 1.2));
          newEase = Math.max(1.3, newEase - 0.15);
        } else if (rating === 'good') {
          newRepetition += 1;
          newInterval = card.repetition === 0 ? 1 : card.repetition === 1 ? 3 : Math.round(card.intervalDays * newEase);
        } else {
          // easy
          newRepetition += 1;
          newInterval = card.repetition === 0 ? 3 : Math.round(card.intervalDays * newEase * 1.3);
          newEase += 0.15;
        }

        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + newInterval);

        return {
          ...card,
          repetition: newRepetition,
          intervalDays: newInterval,
          easeFactor: Number(newEase.toFixed(2)),
          nextReviewDate: nextDate.toISOString().split('T')[0]
        };
      })
    );
    addXP(15, 'Flashcard revisado via repetição espaçada');
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        currentUser,
        setCurrentUser,
        switchRole,
        platformConfig,
        updatePlatformConfig,
        selectedStructureId,
        setSelectedStructureId,
        selectedStructure,
        navigateToStructureInAtlas,
        favorites,
        toggleFavorite,
        notes,
        addNote,
        deleteNote,
        courses,
        toggleLessonCompleted,
        flashcards,
        recordFlashcardReview,
        searchQuery,
        setSearchQuery,
        isDarkMode,
        toggleDarkMode,
        toasts,
        showToast,
        addXP
      }}
    >
      <div className={isDarkMode ? 'dark' : ''}>{children}</div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
