import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  Award,
  Box,
  PlayCircle,
  BookOpen,
  CheckCircle2,
  Layers,
  ArrowRight,
  TrendingUp,
  Clock,
  HelpCircle,
  Bookmark,
  Calendar,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QUESTIONS_DATA, ANATOMICAL_STRUCTURES } from '../../data';

export const DashboardView: React.FC = () => {
  const {
    currentUser,
    setActiveTab,
    navigateToStructureInAtlas,
    addXP,
    showToast,
    courses,
    flashcards
  } = useApp();

  const [dailyQuestionAnswered, setDailyQuestionAnswered] = useState(false);
  const [selectedDailyOption, setSelectedDailyOption] = useState<string | null>(null);

  const dailyQuestion = QUESTIONS_DATA[0]; // Arteria descendente anterior

  const handleAnswerDaily = (optId: string) => {
    if (dailyQuestionAnswered) return;
    setSelectedDailyOption(optId);
    setDailyQuestionAnswered(true);

    if (optId === dailyQuestion.correctOptionId) {
      addXP(50, 'Desafio Diário Concluído com Sucesso!');
      showToast('🎉 Resposta Correta! +50 XP do Desafio Diário!', 'success');
    } else {
      showToast('Resposta incorreta no Desafio Diário. Continue estudando!', 'info');
    }
  };

  const pendingFlashcardsCount = flashcards.filter(
    (c) => new Date(c.nextReviewDate) <= new Date()
  ).length;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      {/* Welcome Hero & Daily Stats Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              {currentUser.institution}
            </span>
            <span className="text-xs text-slate-400">Biomedicina • Bacharelado</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Olá, {currentUser.name.split(' ')[0]}!
          </h1>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl">
            Pronto para sua imersão em Ciências Biomédicas? Mantenha sua rotina com repetição espaçada, dissecação 3D e simulados de alto rendimento.
          </p>
        </div>

        {/* Gamification Highlights Box */}
        <div className="flex items-center gap-3 md:gap-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl z-10 shrink-0">
          {/* Streak */}
          <div className="text-center px-3 border-r border-slate-800">
            <div className="flex items-center justify-center text-amber-400 mb-0.5">
              <Flame className="w-5 h-5 fill-current animate-bounce" />
            </div>
            <div className="font-mono text-lg font-black text-white">{currentUser.gamification.streakDays}</div>
            <div className="text-[10px] uppercase font-bold text-slate-500">Dias de Ofensiva</div>
          </div>

          {/* XP & Level */}
          <div className="text-center px-3 border-r border-slate-800">
            <div className="flex items-center justify-center text-cyan-400 mb-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="font-mono text-lg font-black text-cyan-300">{currentUser.gamification.xp}</div>
            <div className="text-[10px] uppercase font-bold text-slate-500">Pontos de XP</div>
          </div>

          {/* Level */}
          <div className="text-center px-3">
            <div className="flex items-center justify-center text-indigo-400 mb-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-mono text-lg font-black text-white">Nível {currentUser.gamification.level}</div>
            <div className="text-[10px] uppercase font-bold text-slate-500">Patente Acadêmica</div>
          </div>
        </div>
      </div>

      {/* Quick Launch Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Continue Learning Card */}
        <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 transition">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/30 text-cyan-400 flex items-center justify-center">
              <PlayCircle className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-slate-500">Continuar Estudos</span>
            <h3 className="font-bold text-base text-white">
              Anatomia Sistêmica e Topográfica Humana
            </h3>
            <p className="text-xs text-slate-400">
              Módulo 1 • Aula 1: Arquitetura do Miocárdio e Vasos Coronários
            </p>
          </div>

          <button
            onClick={() => setActiveTab('cursos')}
            className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md"
          >
            <PlayCircle className="w-4 h-4" /> Retomar Aula Agora
          </button>
        </div>

        {/* 3D Atlas Spotlight Card */}
        <div className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 transition">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center">
              <Box className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-cyan-400">Atlas 3D em Destaque</span>
            <h3 className="font-bold text-base text-white">
              Coração Humano: Estrutura Tridimensional
            </h3>
            <p className="text-xs text-slate-400">
              Explore o miocárdio, vascularização coronária e o plano de corte sagital no simulador.
            </p>
          </div>

          <button
            onClick={() => navigateToStructureInAtlas('coracao_miocardio')}
            className="w-full py-2.5 bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
          >
            <Box className="w-4 h-4" /> Abrir no Atlas 3D
          </button>
        </div>

        {/* Spaced Repetition (SRS) Card */}
        <div className="bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 transition">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-indigo-400">Repetição Espaçada</span>
            <h3 className="font-bold text-base text-white">
              {pendingFlashcardsCount} Flashcards para Revisão Hoje
            </h3>
            <p className="text-xs text-slate-400">
              Algoritmo SM-2 calculado para fixação de longo prazo dos conceitos anatômicos.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('flashcards')}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md"
          >
            <Layers className="w-4 h-4" /> Iniciar Sessão de Flashcards
          </button>
        </div>
      </div>

      {/* Middle Section: Daily Challenge & Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Daily Challenge Card (Interactive) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <h3 className="font-bold text-sm text-white">Desafio Biomédico do Dia (+50 XP)</h3>
            </div>
            <span className="text-[11px] text-cyan-400 font-medium">Anatomia Cardiovascular</span>
          </div>

          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            {dailyQuestion.statement}
          </p>

          <div className="space-y-2">
            {dailyQuestion.options.map((opt) => {
              const isSelected = selectedDailyOption === opt.id;
              const isCorrect = opt.id === dailyQuestion.correctOptionId;

              let btnStyle = 'bg-slate-950/60 hover:bg-slate-800 border-slate-800 text-slate-300';
              if (dailyQuestionAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={dailyQuestionAnswered}
                  onClick={() => handleAnswerDaily(opt.id)}
                  className={`w-full text-left p-3 rounded-xl border text-xs flex items-center gap-3 transition ${btnStyle}`}
                >
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold uppercase shrink-0 text-[10px]">
                    {opt.id}
                  </span>
                  <span>{opt.text}</span>
                </button>
              );
            })}
          </div>

          {dailyQuestionAnswered && (
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
              <strong className="text-cyan-400 block mb-0.5">Explicação Acadêmica:</strong>
              {dailyQuestion.explanation}
            </div>
          )}
        </div>

        {/* Weekly Performance Metrics Card */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" /> Rendimento Acadêmico
              </h3>
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                +14% vs semana anterior
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Taxa de Acerto em Questões</span>
                  <span className="font-mono text-cyan-300 font-bold">84%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: '84%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Domínio de Anatomia Topográfica</span>
                  <span className="font-mono text-emerald-300 font-bold">78%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '78%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Retenção no Spaced Repetition</span>
                  <span className="font-mono text-indigo-300 font-bold">92%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-400 h-full rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('progresso')}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
          >
            Ver Relatório Completo de Competências <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fast Navigation Grid (All functional modules) */}
      <div className="space-y-3">
        <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-400">
          Módulos Integrados da Plataforma
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <button
            onClick={() => setActiveTab('atlas')}
            className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
              <Box className="w-5 h-5" />
            </div>
            <span className="font-bold text-white">Atlas 3D</span>
          </button>

          <button
            onClick={() => setActiveTab('sistemas')}
            className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center group-hover:scale-110 transition">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-bold text-white">30 Sistemas</span>
          </button>

          <button
            onClick={() => setActiveTab('tutor')}
            className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center group-hover:scale-110 transition">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-white">Tutor IA</span>
          </button>

          <button
            onClick={() => setActiveTab('questoes')}
            className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-white">Questões & Sim.</span>
          </button>

          <button
            onClick={() => setActiveTab('casos-clinicos')}
            className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-950 text-rose-400 flex items-center justify-center group-hover:scale-110 transition">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="font-bold text-white">Casos Clínicos</span>
          </button>

          <button
            onClick={() => setActiveTab('histologia')}
            className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition">
              <Layers className="w-5 h-5" />
            </div>
            <span className="font-bold text-white">Lâminas Virtuais</span>
          </button>
        </div>
      </div>
    </div>
  );
};
