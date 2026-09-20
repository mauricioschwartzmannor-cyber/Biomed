import React, { useState } from 'react';
import {
  Bookmark,
  FileText,
  Trash2,
  Plus,
  Box,
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  Search
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ANATOMICAL_STRUCTURES } from '../../data';

export const NotesAndFavoritesView: React.FC<{ initialTab?: 'notes' | 'favorites' }> = ({
  initialTab = 'notes'
}) => {
  const {
    favorites,
    toggleFavorite,
    notes,
    addNote,
    deleteNote,
    navigateToStructureInAtlas,
    showToast
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'favorites'>(initialTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newStructureId, setNewStructureId] = useState('coracao_miocardio');

  const favoriteStructures = ANATOMICAL_STRUCTURES.filter((s) => favorites.includes(s.id));

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    addNote({
      structureId: newStructureId,
      title: newTitle,
      content: newContent,
      tags: ['Manual', 'Estudos']
    });

    setNewTitle('');
    setNewContent('');
    setIsCreatingNote(false);
  };

  const exportNotesAsText = () => {
    const text = notes
      .map(
        (n) => `--- ${n.title} (${n.createdAt}) ---\nEstrutura: ${n.structureId}\n${n.content}\n\n`
      )
      .join('');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `minhas_anotacoes_anatomia360_${Date.now()}.txt`;
    link.click();
    showToast('Anotações exportadas com sucesso!', 'success');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header & Sub-tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              Caderno de Estudos Digital
            </span>
            <span className="text-xs text-slate-400">{notes.length} Anotações • {favorites.length} Favoritos</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Anotações & Peças Favoritas
          </h1>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveSubTab('notes')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
              activeSubTab === 'notes' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Anotações Pessoais
          </button>
          <button
            onClick={() => setActiveSubTab('favorites')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
              activeSubTab === 'favorites' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" /> Peças Salvas ({favorites.length})
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: ANOTAÇÕES PESSOAIS */}
      {activeSubTab === 'notes' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar em suas anotações..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={exportNotesAsText}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" /> Exportar TXT
              </button>

              <button
                onClick={() => setIsCreatingNote(true)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-md"
              >
                <Plus className="w-4 h-4" /> Nova Anotação
              </button>
            </div>
          </div>

          {/* New Note Form Modal / Inset */}
          {isCreatingNote && (
            <form
              onSubmit={handleCreateNote}
              className="bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <h3 className="font-bold text-sm text-white">Criar Nova Anotação Científica</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Título da anotação (ex: Vascularização do Baço)..."
                  className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-100 outline-none focus:border-cyan-400"
                />

                <select
                  value={newStructureId}
                  onChange={(e) => setNewStructureId(e.target.value)}
                  className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-100 outline-none focus:border-cyan-400"
                >
                  {ANATOMICAL_STRUCTURES.map((s) => (
                    <option key={s.id} value={s.id}>
                      Vincular a: {s.ptName}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                rows={4}
                required
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Insira o conteúdo didático, lembretes de provas, mnemônicos ou notas de aula..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-100 outline-none focus:border-cyan-400 leading-relaxed"
              />

              <div className="flex justify-end gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setIsCreatingNote(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-md"
                >
                  Salvar no Caderno
                </button>
              </div>
            </form>
          )}

          {/* Notes Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredNotes.length === 0 ? (
              <div className="col-span-2 p-12 text-center text-slate-500 bg-slate-900 rounded-2xl border border-slate-800">
                Nenhuma anotação encontrada. Crie sua primeira nota de estudos!
              </div>
            ) : (
              filteredNotes.map((note) => {
                const linked = ANATOMICAL_STRUCTURES.find((s) => s.id === note.structureId);
                return (
                  <div
                    key={note.id}
                    className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-3 transition"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {note.createdAt}
                        </span>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="text-slate-500 hover:text-rose-400 transition"
                          title="Excluir anotação"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-bold text-sm text-white">{note.title}</h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed whitespace-pre-line">
                        {note.content}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      {linked ? (
                        <button
                          onClick={() => navigateToStructureInAtlas(linked.id)}
                          className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px]"
                        >
                          <Box className="w-3.5 h-3.5" /> Ver {linked.ptName} no 3D
                        </button>
                      ) : (
                        <span className="text-slate-500 text-[11px]">Nota Geral</span>
                      )}

                      <div className="flex gap-1">
                        {note.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: PEÇAS FAVORITAS */}
      {activeSubTab === 'favorites' && (
        <div className="space-y-4">
          {favoriteStructures.length === 0 ? (
            <div className="p-12 text-center text-slate-500 bg-slate-900 rounded-2xl border border-slate-800">
              Você ainda não favoritou nenhuma peça anatômica. Abra o Atlas 3D e clique no ícone de marcador para salvar peças de interesse!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteStructures.map((st) => (
                <div
                  key={st.id}
                  className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-bold text-cyan-400">{st.region}</span>
                      <button
                        onClick={() => toggleFavorite(st.id)}
                        className="text-amber-400 hover:text-slate-400 transition"
                        title="Remover dos favoritos"
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition">
                      {st.ptName}
                    </h4>
                    <p className="text-xs text-slate-400 italic">{st.latinName}</p>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2">{st.description}</p>
                  </div>

                  <button
                    onClick={() => navigateToStructureInAtlas(st.id)}
                    className="w-full py-2 bg-slate-800 group-hover:bg-cyan-600 text-slate-200 group-hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Box className="w-4 h-4" /> Dissecção no Atlas 3D
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
