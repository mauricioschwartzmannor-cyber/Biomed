import React, { useState } from 'react';
import {
  Layers,
  RotateCw,
  CheckCircle2,
  Box,
  Calendar,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Brain
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Flashcard } from '../../types';

export const FlashcardsView: React.FC = () => {
  const { flashcards, recordFlashcardReview, navigateToStructureInAtlas, showToast } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const filteredCards = flashcards.filter(
    (c) => selectedDiscipline === 'all' || c.discipline === selectedDiscipline
  );

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleReview = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;
    recordFlashcardReview(currentCard.id, rating);
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      showToast('🎉 Parabéns! Você concluiu todos os flashcards da sessão de hoje!', 'success');
      setCurrentIndex(0);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              Sistema de Repetição Espaçada (SRS)
            </span>
            <span className="text-xs text-slate-400">{filteredCards.length} Cartões</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Flashcards Inteligentes
          </h1>
        </div>

        {/* Filter */}
        <select
          value={selectedDiscipline}
          onChange={(e) => {
            setSelectedDiscipline(e.target.value);
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
        >
          <option value="all">Todas as Disciplinas</option>
          <option value="Anatomia Humana">Anatomia Humana</option>
          <option value="Hematologia">Hematologia</option>
          <option value="Neuroanatomia">Neuroanatomia</option>
          <option value="Bioquímica Clínica">Bioquímica Clínica</option>
        </select>
      </div>

      {currentCard ? (
        <div className="space-y-6">
          {/* Deck Counter & Progress */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Cartão <strong className="text-white">{currentIndex + 1}</strong> de {filteredCards.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-cyan-400">
                Próxima revisão em: {currentCard.intervalDays} dia(s)
              </span>
            </div>
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[300px] md:min-h-[360px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 relative group select-none"
          >
            {/* Top Card Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                {currentCard.discipline} • {currentCard.theme}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-cyan-400 transition">
                <RotateCw className="w-3.5 h-3.5" /> Clique para virar o cartão
              </span>
            </div>

            {/* Content Area */}
            <div className="my-auto py-6 text-center space-y-3">
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                {isFlipped ? 'RESPOSTA CIENTÍFICA' : 'PERGUNTA / CONCEITO ANATÔMICO'}
              </div>
              <p className="text-lg md:text-xl font-semibold text-slate-100 leading-relaxed max-w-xl mx-auto">
                {isFlipped ? currentCard.back : currentCard.front}
              </p>
            </div>

            {/* Bottom Card Footer */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-900">
              <span>Fator de Facilidade: {currentCard.easeFactor}</span>
              {currentCard.relatedStructureId && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToStructureInAtlas(currentCard.relatedStructureId!);
                  }}
                  className="text-cyan-400 hover:underline flex items-center gap-1 text-xs"
                >
                  <Box className="w-3.5 h-3.5" /> Ver Peça no Atlas 3D
                </button>
              )}
            </div>
          </div>

          {/* Rating Decision Bar (Anki / SM-2) */}
          {isFlipped ? (
            <div className="space-y-2">
              <div className="text-center text-xs text-slate-400 font-medium">
                Como foi a recordação deste conceito?
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => handleReview('again')}
                  className="py-3 px-2 rounded-xl bg-rose-950/50 border border-rose-800/80 hover:bg-rose-900 text-rose-200 text-xs font-bold transition flex flex-col items-center gap-0.5"
                >
                  <span>Errei / Repetir</span>
                  <span className="text-[10px] text-rose-400 font-normal">Revisar hoje</span>
                </button>
                <button
                  onClick={() => handleReview('hard')}
                  className="py-3 px-2 rounded-xl bg-amber-950/50 border border-amber-800/80 hover:bg-amber-900 text-amber-200 text-xs font-bold transition flex flex-col items-center gap-0.5"
                >
                  <span>Difícil</span>
                  <span className="text-[10px] text-amber-400 font-normal">+1-2 dias</span>
                </button>
                <button
                  onClick={() => handleReview('good')}
                  className="py-3 px-2 rounded-xl bg-blue-950/50 border border-blue-800/80 hover:bg-blue-900 text-blue-200 text-xs font-bold transition flex flex-col items-center gap-0.5"
                >
                  <span>Bom</span>
                  <span className="text-[10px] text-blue-400 font-normal">+3-5 dias</span>
                </button>
                <button
                  onClick={() => handleReview('easy')}
                  className="py-3 px-2 rounded-xl bg-emerald-950/50 border border-emerald-800/80 hover:bg-emerald-900 text-emerald-200 text-xs font-bold transition flex flex-col items-center gap-0.5"
                >
                  <span>Fácil</span>
                  <span className="text-[10px] text-emerald-400 font-normal">+7 dias</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setIsFlipped(true)}
                className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition shadow-lg inline-flex items-center gap-2"
              >
                <RotateCw className="w-4 h-4" /> Revelar Resposta
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="p-12 text-center text-slate-500 bg-slate-900 rounded-2xl border border-slate-800">
          Nenhum cartão encontrado para este filtro.
        </div>
      )}
    </div>
  );
};
