import React, { useState, useMemo } from 'react';
import {
  Layers,
  Search,
  ArrowRight,
  Sparkles,
  Bookmark,
  CheckCircle2,
  Box,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ANATOMICAL_SYSTEMS, ANATOMICAL_STRUCTURES } from '../../data';
import { AnatomicalSystemInfo } from '../../types';

export const SystemsCatalog: React.FC = () => {
  const { navigateToStructureInAtlas, setSelectedStructureId, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<AnatomicalSystemInfo>(ANATOMICAL_SYSTEMS[0]);

  const filteredSystems = useMemo(() => {
    return ANATOMICAL_SYSTEMS.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const structuresInSelectedSystem = useMemo(() => {
    return ANATOMICAL_STRUCTURES.filter((st) => st.systemId === selectedSystem.id);
  }, [selectedSystem]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              Taxonomia Anatômica Oficial
            </span>
            <span className="text-xs text-slate-400">30 Sistemas Mapeados</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Sistemas do Organismo Humano
          </h1>
          <p className="text-xs md:text-sm text-slate-400">
            Navegue pelos 30 sistemas corporais padronizados segundo a *Terminologia Anatomica* e explore suas correlações biomédicas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por sistema (ex: Nervoso, Linfático)..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400 transition"
          />
        </div>
      </div>

      {/* Main Grid: Left is List, Right is Detailed Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Systems List */}
        <div className="lg:col-span-5 space-y-2 max-h-[calc(100vh-14rem)] overflow-y-auto pr-2">
          {filteredSystems.map((sys) => {
            const isSelected = selectedSystem.id === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setSelectedSystem(sys)}
                className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-950/80 to-slate-900 border-cyan-500 text-white shadow-lg'
                    : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: sys.colorHex }}
                  />
                  <div>
                    <h3 className="font-bold text-xs md:text-sm text-slate-100">{sys.name}</h3>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider text-[10px]">
                      {sys.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                    {sys.structureCount} estruturas
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected System In-Depth Detail */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3.5 h-3.5 rounded-full inline-block"
                  style={{ backgroundColor: selectedSystem.colorHex }}
                />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Código: {selectedSystem.id}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 capitalize">
                  Categoria: {selectedSystem.category}
                </span>
              </div>
              <h2 className="text-2xl font-black text-white">{selectedSystem.name}</h2>
              <p className="text-xs text-slate-400">
                Aproximadamente {selectedSystem.structureCount} estruturas catalogadas na literatura clássica.
              </p>
            </div>

            {/* Quick 3D Explore CTA */}
            <button
              onClick={() => {
                if (structuresInSelectedSystem.length > 0) {
                  navigateToStructureInAtlas(structuresInSelectedSystem[0].id);
                } else {
                  showToast('Abrindo Atlas 3D para este sistema...', 'info');
                  navigateToStructureInAtlas('coracao_miocardio');
                }
              }}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-2 transition shadow-lg"
            >
              <Box className="w-4 h-4" /> Ver no Atlas 3D
            </button>
          </div>

          <div className="space-y-4 text-xs leading-relaxed text-slate-300">
            <div>
              <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider mb-1 text-cyan-400">
                Descrição Fisiomorfológica & Escopo
              </h4>
              <p className="text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 leading-relaxed">
                {selectedSystem.description}
              </p>
            </div>

            {/* Mapped 3D Structures for this system */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider">
                Peças Modeladas no Atlas 3D ({structuresInSelectedSystem.length})
              </h4>

              {structuresInSelectedSystem.length === 0 ? (
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-center text-slate-500 text-xs">
                  Modelos 3D complementares deste sistema disponíveis na biblioteca de malhas GLB do painel administrativo.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {structuresInSelectedSystem.map((st) => (
                    <div
                      key={st.id}
                      className="p-3 bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-xl flex items-center justify-between transition group"
                    >
                      <div>
                        <h5 className="font-bold text-xs text-white group-hover:text-cyan-300 transition">
                          {st.ptName}
                        </h5>
                        <p className="text-[10px] text-slate-400 italic">{st.latinName}</p>
                      </div>
                      <button
                        onClick={() => navigateToStructureInAtlas(st.id)}
                        className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-600 text-slate-300 group-hover:text-white transition"
                        title="Ver no 3D"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
