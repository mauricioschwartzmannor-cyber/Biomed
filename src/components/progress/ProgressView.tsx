import React from 'react';
import {
  Award,
  Flame,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  BookOpen,
  Layers,
  HelpCircle,
  Clock,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProgressView: React.FC = () => {
  const { currentUser, courses, flashcards, showToast } = useApp();

  const totalLessons = courses.flatMap((c) => c.modules.flatMap((m) => m.lessons)).length;
  const completedLessons = courses
    .flatMap((c) => c.modules.flatMap((m) => m.lessons))
    .filter((l) => l.completed).length;

  const masteredFlashcards = flashcards.filter((f) => f.intervalDays > 3).length;

  const allPossibleBadges = [
    { name: 'Primeiros Passos Anatômicos', desc: 'Completou a primeira lição no módulo de mediastino.', unlocked: true },
    { name: 'Explorador do Mediastino', desc: 'Examinou 10 peças cardiorrespiratórias no Atlas 3D.', unlocked: true },
    { name: 'Mestre do Hemograma', desc: 'Respondeu 10 questões de citologia sem erros.', unlocked: true },
    { name: 'Repetição Espaçada 10 Dias', desc: 'Manteve a revisão diária de flashcards por 10 dias seguidos.', unlocked: true },
    { name: 'Simulado Nota 10', desc: 'Atingiu pontuação superior a 80% em simulado oficial.', unlocked: true },
    { name: 'Dissector Virtual Sênior', desc: 'Utilizou a ferramenta de corte sagital e coronal 20 vezes.', unlocked: false },
    { name: 'Biomédico Investigador', desc: 'Solucionou 5 casos clínicos com acerto na primeira tentativa.', unlocked: false },
    { name: 'Especialista em Neuroanatomia', desc: 'Dominou todos os 12 pares de nervos cranianos.', unlocked: false }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
            Painel do Estudante
          </span>
          <span className="text-xs text-slate-400">Métricas & Gamificação</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Meu Progresso & Conquistas
        </h1>
      </div>

      {/* Gamification Level & XP Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-xl">
              {currentUser.gamification.level}
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-cyan-400">Patente Acadêmica</div>
              <h2 className="text-2xl font-bold text-white">Nível {currentUser.gamification.level} • Biomédico Residente</h2>
              <p className="text-xs text-slate-400">
                {currentUser.gamification.xp} XP Acumulados • Faltam {450 - (currentUser.gamification.xp % 450)} XP para o próximo nível
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-950 px-4 py-2.5 rounded-2xl border border-slate-800">
            <Flame className="w-6 h-6 text-amber-400 fill-current animate-bounce" />
            <div>
              <div className="font-mono text-base font-bold text-white">{currentUser.gamification.streakDays} Dias</div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Ofensiva de Estudos</div>
            </div>
          </div>
        </div>

        {/* Progress Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Aulas Concluídas
              </span>
              <span className="font-mono text-cyan-300 font-bold">
                {completedLessons}/{totalLessons}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
              <div
                className="bg-cyan-400 h-full rounded-full"
                style={{ width: `${Math.round((completedLessons / totalLessons) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Layers className="w-4 h-4 text-indigo-400" /> Flashcards Consolidados
              </span>
              <span className="font-mono text-indigo-300 font-bold">
                {masteredFlashcards}/{flashcards.length}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
              <div
                className="bg-indigo-400 h-full rounded-full"
                style={{ width: `${Math.round((masteredFlashcards / flashcards.length) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Simulado ENADE
              </span>
              <span className="font-mono text-emerald-300 font-bold">Aprovado</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
              <div className="bg-emerald-400 h-full rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Badges / Medalhas Conquistadas */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Insígnias & Conquistas</h3>
            <p className="text-xs text-slate-400">Medalhas desbloqueadas através do engajamento com o conteúdo</p>
          </div>
          <span className="text-xs font-mono text-cyan-400">5 de 8 desbloqueadas</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allPossibleBadges.map((badge, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition flex flex-col justify-between space-y-2 ${
                badge.unlocked
                  ? 'bg-slate-900 border-cyan-500/40 text-slate-200 shadow-lg'
                  : 'bg-slate-950/40 border-slate-800/80 text-slate-600 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    badge.unlocked
                      ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                      : 'bg-slate-900 text-slate-600'
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>
                {badge.unlocked && (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    CONQUISTADO
                  </span>
                )}
              </div>

              <div>
                <h4 className="font-bold text-xs text-white">{badge.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
