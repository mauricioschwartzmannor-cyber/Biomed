export type UserRole = 'student' | 'teacher' | 'reviewer' | 'admin';

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  institution?: string;
  subscription: {
    plan: 'free' | 'premium_monthly' | 'premium_annual';
    status: 'active' | 'trial' | 'canceled' | 'expired';
    validUntil: string;
  };
  gamification: {
    xp: number;
    level: number;
    streakDays: number;
    lastActiveDate: string;
    badges: string[];
    isPublicOnLeaderboard: boolean;
  };
  preferences: {
    theme: 'light' | 'dark';
    fontSize: 'normal' | 'large' | 'extra-large';
    renderQuality: 'low' | 'medium' | 'high';
  };
  lgpdConsent: {
    acceptedAt: string;
    version: string;
  };
}

export type AnatomicalSystemId =
  | 'esqueletico'
  | 'articular'
  | 'muscular'
  | 'nervoso_central'
  | 'nervoso_periferico'
  | 'cardiovascular'
  | 'linfatico'
  | 'respiratorio'
  | 'digestorio'
  | 'urinario'
  | 'endocrino'
  | 'reprodutor_masculino'
  | 'reprodutor_feminino'
  | 'tegumentar'
  | 'orgaos_sentidos'
  | 'cabeca_pescoco'
  | 'torax'
  | 'abdome'
  | 'pelve_perineo'
  | 'membro_superior'
  | 'membro_inferior'
  | 'encefalo'
  | 'ocular'
  | 'ouvido'
  | 'dental'
  | 'vasos_sanguineos'
  | 'nervos_cranianos'
  | 'plexos_nervosos'
  | 'fascias'
  | 'superficie';

export interface AnatomicalSystemInfo {
  id: AnatomicalSystemId;
  name: string;
  category: 'sistemica' | 'regional' | 'especializada';
  structureCount: number;
  description: string;
  iconName: string;
  colorHex: string;
}

export interface AnatomicalStructure {
  id: string;
  ptName: string;
  latinName: string;
  englishName: string;
  synonyms: string[];
  systemId: AnatomicalSystemId;
  region: string;
  laterality: 'medial' | 'direito' | 'esquerdo' | 'bilateral';
  description: string;
  location: string;
  shape?: string;
  dimensions?: string;
  function: string;
  relations: string;
  vascularization?: {
    arterial: string;
    venous: string;
    lymphatic: string;
  };
  innervation?: string;
  muscularOriginInsertion?: string;
  muscularAction?: string;
  relatedBones?: string[];
  relatedJoints?: string[];
  relatedLigaments?: string[];
  neighboringStructures: string[];
  variations?: string;
  clinicalApplications: string;
  relatedPathologies: string[];
  evaluationExams: string[];
  model3DMapping: {
    meshId: string;
    category: 'bone' | 'muscle' | 'organ' | 'vessel' | 'nerve';
    position?: [number, number, number];
  };
  curation: {
    status: 'draft' | 'pending_review' | 'in_review' | 'correction_requested' | 'approved' | 'published';
    reviewerName?: string;
    reviewerTitle?: string;
    revisionDate?: string;
    references: string[];
    isDemoOnly: boolean;
  };
}

export interface CourseLesson {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'video' | 'text' | '3d_interactive' | 'quiz';
  description: string;
  contentMarkdown: string;
  videoEmbedUrl?: string;
  relatedStructureId?: string;
  completed?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  title: string;
  discipline: string;
  coverImage: string;
  instructor: string;
  modulesCount: number;
  lessonsCount: number;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  modules: CourseModule[];
}

export interface Question {
  id: string;
  statement: string;
  type: 'multiple_choice' | 'true_false' | 'matching' | '3d_identification' | 'clinical_case';
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  discipline: string;
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  relatedStructureId?: string;
  reviewerName: string;
  reviewedDate: string;
  stats: {
    totalAttempts: number;
    successRatePercent: number;
  };
}

export interface SimulatedExam {
  id: string;
  title: string;
  description: string;
  discipline: string;
  questionIds: string[];
  timeLimitMinutes: number;
  passingScorePercent: number;
}

export interface Flashcard {
  id: string;
  discipline: string;
  theme: string;
  front: string;
  back: string;
  relatedStructureId?: string;
  intervalDays: number;
  easeFactor: number;
  repetition: number;
  nextReviewDate: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ClinicalCaseStep {
  stepNumber: number;
  title: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  discipline: string;
  patient: {
    age: number;
    sex: 'Masculino' | 'Feminino';
    occupation: string;
  };
  clinicalHistory: string;
  physicalExam: string;
  labFindings: {
    test: string;
    result: string;
    referenceRange: string;
    status: 'normal' | 'altered';
  }[];
  steps: ClinicalCaseStep[];
  anatomicalPhysiologicalCorrelation: string;
  references: string[];
}

export interface HistologySlide {
  id: string;
  name: string;
  tissueType: string;
  organ: string;
  stain: string; // ex: H&E
  description: string;
  normalVsAlteredNotes: string;
  markers: {
    xPercent: number;
    yPercent: number;
    title: string;
    description: string;
  }[];
}

export interface UserNote {
  id: string;
  structureId?: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
}

export interface PlatformConfig {
  institutionName: string;
  tagline: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  contactEmail: string;
  demoModelDisclaimer: string;
}

export type Lesson = CourseLesson;

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

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}
