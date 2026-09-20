import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  HelpCircle,
  Filter,
  Award,
  Box,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QUESTIONS_DATA, SIMULATED_EXAMS } from '../../data';
import { Question, SimulatedExam } from '../../types';

export const QuestionsView: React.FC = () => {
  const { navigateToStructureInAtlas, addXP, showToast } = useApp();

  const [mode, setMode] = useState<'bank' | 'simulation'>('bank');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Single Question Answering State
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [confirmedAnswers, setConfirmedAnswers] = useState<Record<string, boolean>>({});

  // Active Simulation State
  const [activeExam, setActiveExam] = useState<SimulatedExam | null>(null);
  const [currentExamIndex, setCurrentExamIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examTimeRemaining, setExamTimeRemaining] = useState<number>(0);
  const [isExamFinished, setIsExamFinished] = useState(false);

  // Timer countdown for simulation
  useEffect(() => {
    if (!activeExam || isExamFinished || examTimeRemaining <= 0) return;
    const interval = setInterval(() => {
      setExamTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishSimulatedExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeExam, isExamFinished, examTimeRemaining]);

  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    const matchDiscipline = selectedDiscipline === 'all' || q.discipline === selectedDiscipline;
    const matchDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    return matchDiscipline && matchDifficulty;
  });

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (confirmedAnswers[questionId]) return; // already answered
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleConfirmAnswer = (question: Question) => {
    const selected = userAnswers[question.id];
    if (!selected) {
      showToast('Selecione uma alternativa antes de confirmar.', 'warning');
      return;
    }

    setConfirmedAnswers((prev) => ({ ...prev, [question.id]: true }));
    const isCorrect = selected === question.correctOptionId;
    if (isCorrect) {
      addXP(25, 'Resposta correta no Banco de Questões');
      showToast('Correto! +25 XP adicionados ao seu perfil.', 'success');
    } else {
      showToast('Resposta incorreta. Revise a fundamentação do gabarito.', 'info');
    }
  };

  const startExam = (exam: SimulatedExam) => {
    setActiveExam(exam);
    setCurrentExamIndex(0);
    setExamAnswers({});
    setIsExamFinished(false);
    setExamTimeRemaining(exam.timeLimitMinutes * 60);
    setMode('simulation');
    showToast(`Simulado iniciado! Você tem ${exam.timeLimitMinutes} minutos.`, 'info');
  };

  const finishSimulatedExam = () => {
    setIsExamFinished(true);
    if (!activeExam) return;

    let correctCount = 0;
    activeExam.questionIds.forEach((qId) => {
      const q = QUESTIONS_DATA.find((item) => item.id === qId);
      if (q && examAnswers[qId] === q.correctOptionId) {
        correctCount++;
      }
    });

    const scorePercent = Math.round((correctCount / activeExam.questionIds.length) * 100);
    const passed = scorePercent >= activeExam.passingScorePercent;

    if (passed) {
      addXP(150, `Aprovação no simulado: ${activeExam.title}`);
      showToast(`🎉 Parabéns! Você foi aprovado com ${scorePercent}% de acerto! (+150 XP)`, 'success');
    } else {
      showToast(`Simulado finalizado: ${scorePercent}% de acerto. Continue praticando!`, 'info');
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      {/* Top Controls & Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              Avaliação de Desempenho & ENADE
            </span>
            <span className="text-xs text-slate-400">30 Questões Comentadas</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Questões & Provas Simuladas
          </h1>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setMode('bank');
              setActiveExam(null);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              mode === 'bank'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Banco de Questões
          </button>
          <button
            onClick={() => setMode('simulation')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              mode === 'simulation'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Simulados Oficiais
          </button>
        </div>
      </div>

      {/* MODE 1: BANCO DE QUESTÕES */}
      {mode === 'bank' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-900 p-3.5 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filtrar por:
            </div>

            <select
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-1.5 text-slate-200 outline-none"
            >
              <option value="all">Todas as Disciplinas</option>
              <option value="Anatomia Humana">Anatomia Humana</option>
              <option value="Hematologia">Hematologia</option>
              <option value="Neuroanatomia">Neuroanatomia</option>
              <option value="Histologia Humana">Histologia Humana</option>
              <option value="Bioquímica Clínica">Bioquímica Clínica</option>
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-1.5 text-slate-200 outline-none"
            >
              <option value="all">Todas as Dificuldades</option>
              <option value="easy">Fácil</option>
              <option value="medium">Média</option>
              <option value="hard">Difícil</option>
            </select>

            <span className="ml-auto text-slate-500 font-mono text-[11px]">
              {filteredQuestions.length} questões encontradas
            </span>
          </div>

          {/* Question Cards List */}
          <div className="space-y-6">
            {filteredQuestions.map((q, idx) => {
              const selectedOpt = userAnswers[q.id];
              const isConfirmed = confirmedAnswers[q.id];
              const isCorrect = selectedOpt === q.correctOptionId;

              return (
                <div
                  key={q.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4"
                >
                  {/* Question Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-400">Questão #{idx + 1}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400">{q.discipline}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-[11px] text-slate-500">{q.theme}</span>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        q.difficulty === 'easy'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : q.difficulty === 'medium'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {q.difficulty === 'easy' ? 'Fácil' : q.difficulty === 'medium' ? 'Média' : 'Difícil'}
                    </span>
                  </div>

                  {/* Statement */}
                  <p className="text-slate-100 font-medium text-xs md:text-sm leading-relaxed">
                    {q.statement}
                  </p>

                  {/* Options List */}
                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isOptionSelected = selectedOpt === opt.id;
                      const isOptionCorrect = opt.id === q.correctOptionId;

                      let style = 'bg-slate-950/60 hover:bg-slate-800/80 border-slate-800 text-slate-300';
                      if (isConfirmed) {
                        if (isOptionCorrect) {
                          style = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          style = 'bg-rose-950/60 border-rose-500 text-rose-200';
                        }
                      } else if (isOptionSelected) {
                        style = 'bg-cyan-950/60 border-cyan-500 text-cyan-200 font-semibold';
                      }

                      return (
                        <button
                          key={opt.id}
                          disabled={isConfirmed}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`w-full text-left p-3 rounded-xl border text-xs flex items-start gap-3 transition ${style}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold uppercase shrink-0 text-[10px]">
                            {opt.id}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Question Bottom Action */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    {!isConfirmed ? (
                      <button
                        onClick={() => handleConfirmAnswer(q)}
                        disabled={!selectedOpt}
                        className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white font-bold text-xs transition shadow-md"
                      >
                        Confirmar Resposta
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-bold">
                        {isCorrect ? (
                          <span className="text-emerald-400 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> Resposta Correta (+25 XP)
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1.5">
                            <XCircle className="w-4 h-4" /> Resposta Incorreta
                          </span>
                        )}
                      </div>
                    )}

                    {q.relatedStructureId && (
                      <button
                        onClick={() => navigateToStructureInAtlas(q.relatedStructureId!)}
                        className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <Box className="w-3.5 h-3.5" /> Explorar Estrutura no Atlas 3D
                      </button>
                    )}
                  </div>

                  {/* Feedback Explanation */}
                  {isConfirmed && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                      <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" /> Comentário do Gabarito Oficial:
                      </div>
                      <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                      <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Revisor: {q.reviewerName}</span>
                        <span>Revisado em: {q.reviewedDate}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE 2: SIMULADOS OFICIAIS */}
      {mode === 'simulation' && (
        <div>
          {!activeExam ? (
            /* List of Available Simulations */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SIMULATED_EXAMS.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 transition group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                      {exam.discipline}
                    </span>
                    <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition">
                      {exam.title}
                    </h3>
                    <p className="text-xs text-slate-400">{exam.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {exam.timeLimitMinutes} minutos
                      </span>
                      <span>{exam.questionIds.length} questões</span>
                    </div>

                    <button
                      onClick={() => startExam(exam)}
                      className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-md"
                    >
                      Iniciar Prova Simulada <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : !isExamFinished ? (
            /* Active Simulation Running */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
              {/* Simulation Header with Timer */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white">{activeExam.title}</h2>
                  <span className="text-xs text-slate-400">
                    Questão {currentExamIndex + 1} de {activeExam.questionIds.length}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-cyan-400 font-mono text-sm font-bold shadow-inner">
                  <Clock className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>{formatTimer(examTimeRemaining)}</span>
                </div>
              </div>

              {/* Current Question Display */}
              {(() => {
                const currentQId = activeExam.questionIds[currentExamIndex];
                const q = QUESTIONS_DATA.find((item) => item.id === currentQId);
                if (!q) return null;

                const selected = examAnswers[q.id];

                return (
                  <div className="space-y-4">
                    <p className="text-slate-100 font-medium text-sm leading-relaxed">{q.statement}</p>

                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isSelected = selected === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setExamAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs flex items-start gap-3 transition ${
                              isSelected
                                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 font-semibold'
                                : 'bg-slate-950/50 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold uppercase shrink-0 text-[10px]">
                              {opt.id}
                            </span>
                            <span className="leading-snug">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              {/* Simulation Navigation Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  disabled={currentExamIndex === 0}
                  onClick={() => setCurrentExamIndex((p) => Math.max(0, p - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-semibold text-slate-300 transition"
                >
                  Anterior
                </button>

                <div className="flex items-center gap-1.5">
                  {activeExam.questionIds.map((qId, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentExamIndex(idx)}
                      className={`w-6 h-6 rounded-md text-[10px] font-bold transition ${
                        currentExamIndex === idx
                          ? 'bg-cyan-600 text-white'
                          : examAnswers[qId]
                          ? 'bg-slate-700 text-slate-200'
                          : 'bg-slate-950 text-slate-500 border border-slate-800'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                {currentExamIndex < activeExam.questionIds.length - 1 ? (
                  <button
                    onClick={() => setCurrentExamIndex((p) => p + 1)}
                    className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition"
                  >
                    Próxima
                  </button>
                ) : (
                  <button
                    onClick={finishSimulatedExam}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition shadow-lg"
                  >
                    Finalizar Simulado
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Simulation Results Summary */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-600/30 text-cyan-400 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>

              {(() => {
                let correctCount = 0;
                activeExam.questionIds.forEach((qId) => {
                  const q = QUESTIONS_DATA.find((item) => item.id === qId);
                  if (q && examAnswers[qId] === q.correctOptionId) correctCount++;
                });
                const total = activeExam.questionIds.length;
                const percent = Math.round((correctCount / total) * 100);
                const isPassed = percent >= activeExam.passingScorePercent;

                return (
                  <div className="space-y-3">
                    <h2 className="text-2xl font-black text-white">Resultado do Simulado</h2>
                    <p className="text-xs text-slate-400">{activeExam.title}</p>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto space-y-1">
                      <div className="text-3xl font-mono font-black text-cyan-400">{percent}%</div>
                      <div className="text-xs text-slate-300">
                        {correctCount} de {total} questões acertadas
                      </div>
                      <div className={`text-xs font-bold ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isPassed ? '✓ APROVADO' : '✗ REPROVADO (Nota mínima: ' + activeExam.passingScorePercent + '%)'}
                      </div>
                    </div>

                    <div className="flex justify-center gap-3 pt-4">
                      <button
                        onClick={() => startExam(activeExam)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
                      >
                        <RotateCcw className="w-4 h-4" /> Tentar Novamente
                      </button>
                      <button
                        onClick={() => setActiveExam(null)}
                        className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition shadow-md"
                      >
                        Voltar aos Simulados
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
