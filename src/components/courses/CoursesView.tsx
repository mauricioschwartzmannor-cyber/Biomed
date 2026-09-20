import React, { useState } from 'react';
import {
  GraduationCap,
  PlayCircle,
  CheckCircle2,
  Clock,
  BookOpen,
  ChevronRight,
  Sparkles,
  Box,
  FileText,
  Video,
  Award,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Course, Lesson } from '../../types';

export const CoursesView: React.FC = () => {
  const { courses, toggleLessonCompleted, navigateToStructureInAtlas, showToast } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const currentCourse = courses.find((c) => c.id === selectedCourseId);
  const currentLesson: Lesson | undefined = currentCourse?.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.id === selectedLessonId);

  // If a course and lesson are selected, render the lesson player
  if (currentCourse && currentLesson) {
    const totalLessons = currentCourse.modules.flatMap((m) => m.lessons).length;
    const completedLessons = currentCourse.modules
      .flatMap((m) => m.lessons)
      .filter((l) => l.completed).length;
    const progressPercent = Math.round((completedLessons / totalLessons) * 100);

    return (
      <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-6">
        {/* Navigation Breadcrumb & Back button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedLessonId(null)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para o Índice do Curso
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Progresso do Curso:</span>
            <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-mono text-cyan-300 font-bold">{progressPercent}%</span>
          </div>
        </div>

        {/* Lesson Viewport & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Lesson Content */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-5">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <span>{currentCourse.title}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" /> {currentLesson.durationMinutes} min
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {currentLesson.title}
              </h1>
              <p className="text-xs text-slate-400 mt-1">{currentLesson.description}</p>
            </div>

            {/* If lesson has related 3D structure, show quick 3D button */}
            {currentLesson.relatedStructureId && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-800/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/30 text-cyan-400 flex items-center justify-center">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">Peça Anatômica 3D Vinculada</h4>
                    <p className="text-[11px] text-slate-400">
                      Explore a peça em 360° com cortes anatômicos e dissecação virtual.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigateToStructureInAtlas(currentLesson.relatedStructureId!)}
                  className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition shadow-md"
                >
                  <Box className="w-4 h-4" /> Abrir no Atlas 3D
                </button>
              </div>
            )}

            {/* Lesson Body (Scientific Markdown Text) */}
            <div className="prose prose-invert max-w-none text-xs md:text-sm text-slate-200 leading-relaxed space-y-4 whitespace-pre-line bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
              {currentLesson.contentMarkdown}
            </div>

            {/* Completion Button */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => toggleLessonCompleted(currentCourse.id, currentLesson.id)}
                className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition shadow-xl ${
                  currentLesson.completed
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {currentLesson.completed ? 'Aula Concluída (+50 XP)' : 'Marcar como Concluída'}
              </button>

              <span className="text-xs text-slate-400">
                Instrutor: <strong className="text-slate-200">{currentCourse.instructor}</strong>
              </span>
            </div>
          </div>

          {/* Course Modules Sidebar */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4 h-fit">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" /> Aulas do Curso
            </h3>

            <div className="space-y-4 max-h-[calc(100vh-16rem)] overflow-y-auto pr-1">
              {currentCourse.modules.map((mod) => (
                <div key={mod.id} className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    {mod.title}
                  </div>

                  <div className="space-y-1.5 pl-2">
                    {mod.lessons.map((lesson) => {
                      const isActive = lesson.id === currentLesson.id;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLessonId(lesson.id)}
                          className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition border ${
                            isActive
                              ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200 font-semibold'
                              : 'bg-slate-950/40 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {lesson.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : (
                              <PlayCircle className="w-4 h-4 text-slate-500 shrink-0" />
                            )}
                            <span className="truncate max-w-[200px]">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 shrink-0">
                            {lesson.durationMinutes}m
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Course Overview or Catalog List
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
            Formação Continuada em Saúde
          </span>
          <span className="text-xs text-slate-400">Conteúdo Teórico & Prático 3D</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Cursos & Trilhas de Aprendizagem
        </h1>
        <p className="text-xs md:text-sm text-slate-400">
          Aulas estruturadas com fundamentação teórica, modelos anatômicos interativos e certificação de horas complementares.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => {
          const totalLessons = course.modules.flatMap((m) => m.lessons).length;
          const completedLessons = course.modules
            .flatMap((m) => m.lessons)
            .filter((l) => l.completed).length;
          const progressPercent = Math.round((completedLessons / totalLessons) * 100);

          return (
            <div
              key={course.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-xl flex flex-col transition group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.coverImage}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-cyan-300 border border-slate-700/60">
                  {course.discipline}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/90 text-xs font-mono text-cyan-400 font-semibold">
                  {progressPercent}% Concluído
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Instrutor: <strong className="text-slate-300">{course.instructor}</strong>
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" /> {course.modulesCount} módulos • {totalLessons} aulas
                    </span>
                    <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-medium">
                      {course.level}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      setSelectedLessonId(course.modules[0].lessons[0].id);
                    }}
                    className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-md"
                  >
                    <PlayCircle className="w-4 h-4" /> Acessar Aulas do Curso
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
