import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Info,
  Layers,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HISTOLOGY_SLIDES_DATA } from '../../data';
import { HistologySlide } from '../../types';

export const HistologyView: React.FC = () => {
  const [selectedSlideId, setSelectedSlideId] = useState<string>(HISTOLOGY_SLIDES_DATA[0].id);
  const [magnification, setMagnification] = useState<number>(10);
  const [activeMarkerIndex, setActiveMarkerIndex] = useState<number | null>(null);
  const [showPathologyComparison, setShowPathologyComparison] = useState(false);

  const activeSlide: HistologySlide =
    HISTOLOGY_SLIDES_DATA.find((s) => s.id === selectedSlideId) || HISTOLOGY_SLIDES_DATA[0];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              Microscópio Virtual de Alta Resolução
            </span>
            <span className="text-xs text-slate-400">Citologia & Histologia Biomédica</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Lâminas Histológicas Digitais
          </h1>
        </div>

        {/* Slide Picker */}
        <div className="flex items-center gap-2">
          {HISTOLOGY_SLIDES_DATA.map((slide) => (
            <button
              key={slide.id}
              onClick={() => {
                setSelectedSlideId(slide.id);
                setActiveMarkerIndex(null);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition border ${
                selectedSlideId === slide.id
                  ? 'bg-cyan-600 border-cyan-500 text-white shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {slide.organ}
            </button>
          ))}
        </div>
      </div>

      {/* Main Microscope Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Virtual Microscope Stage */}
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
          {/* Top Stage Controls */}
          <div className="p-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-200">{activeSlide.name}</span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-cyan-300 font-mono">
                {activeSlide.stain}
              </span>
            </div>

            {/* Magnification Objective Lenses */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {[4, 10, 40, 100].map((mag) => (
                <button
                  key={mag}
                  onClick={() => setMagnification(mag)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition ${
                    magnification === mag
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {mag}x
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Slide Viewer Canvas */}
          <div className="relative w-full h-[400px] md:h-[480px] bg-gradient-to-tr from-slate-950 to-indigo-950/40 flex items-center justify-center overflow-hidden">
            {/* Visual Microscopic Field Simulation */}
            <div
              className="w-full h-full relative transition-transform duration-500 ease-out flex items-center justify-center"
              style={{
                transform: `scale(${magnification === 4 ? 1 : magnification === 10 ? 1.4 : magnification === 40 ? 2.2 : 3.2})`
              }}
            >
              {/* Artistic high-fidelity cellular representation */}
              <div className="w-[320px] h-[320px] rounded-full border-4 border-slate-800/80 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] bg-gradient-to-br from-pink-950/40 via-purple-950/30 to-slate-950 relative overflow-hidden flex items-center justify-center">
                {/* Microscopic Grid & Cells pattern */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Markers */}
                {activeSlide.markers.map((marker, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMarkerIndex(idx)}
                    style={{ left: `${marker.xPercent}%`, top: `${marker.yPercent}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  >
                    <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scale Bar */}
            <div className="absolute bottom-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-400">
              Barra de Escala: {magnification === 100 ? '10 µm' : magnification === 40 ? '25 µm' : '100 µm'}
            </div>
          </div>
        </div>

        {/* Histological Details & Marker Explanation Panel */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                {activeSlide.tissueType}
              </span>
              <h3 className="font-extrabold text-lg text-white mt-0.5">{activeSlide.organ}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{activeSlide.description}</p>
            </div>

            {/* Active Marker Details */}
            {activeMarkerIndex !== null ? (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                    {activeMarkerIndex + 1}
                  </span>
                  <h4 className="font-bold text-xs text-cyan-200">
                    {activeSlide.markers[activeMarkerIndex].title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeSlide.markers[activeMarkerIndex].description}
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 text-xs text-center">
                Clique nos marcadores numerados na lâmina para inspecionar os detalhes citológicos.
              </div>
            )}

            {/* Normal vs. Pathological Note Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowPathologyComparison(!showPathologyComparison)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center justify-between transition"
              >
                <span>Correlação Patológica (Normal vs Alterado)</span>
                <span>{showPathologyComparison ? '▲' : '▼'}</span>
              </button>

              {showPathologyComparison && (
                <div className="mt-2 p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs text-slate-300 leading-relaxed space-y-1">
                  <div className="font-bold text-rose-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-rose-400" /> Diagnóstico Diferencial na Lâmina
                  </div>
                  <p>{activeSlide.normalVsAlteredNotes}</p>
                </div>
              )}
            </div>
          </div>

          <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-3">
            Coloração: <strong className="text-slate-400">{activeSlide.stain}</strong> • Curadoria do Departamento de Patologia & Histologia Biomédica.
          </div>
        </div>
      </div>
    </div>
  );
};
