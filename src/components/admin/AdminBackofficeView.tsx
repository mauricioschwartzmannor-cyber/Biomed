import React, { useState } from 'react';
import {
  ShieldAlert,
  Database,
  BookOpen,
  CheckCircle2,
  XCircle,
  FileCheck,
  Plus,
  Upload,
  Box,
  Layers,
  History,
  Lock,
  Search
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ANATOMICAL_STRUCTURES, QUESTIONS_DATA, COURSES_DATA } from '../../data';

export const AdminBackofficeView: React.FC = () => {
  const { currentUser, showToast } = useApp();
  const [adminTab, setAdminTab] = useState<'structures' | 'questions' | 'courses' | 'audit'>('questions');

  // Simulated question approval workflow state
  const [approvalList, setApprovalList] = useState(
    QUESTIONS_DATA.map((q) => ({
      ...q,
      status: 'approved' as 'pending' | 'approved' | 'rejected'
    }))
  );

  const handleApprove = (id: string) => {
    setApprovalList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'approved' } : item))
    );
    showToast('Questão aprovada para publicação no catálogo geral!', 'success');
  };

  const handleReject = (id: string) => {
    setApprovalList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'rejected' } : item))
    );
    showToast('Questão devolvida ao autor para ajustes metodológicos.', 'info');
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded-md border border-purple-800/50">
              Backoffice Acadêmico
            </span>
            <span className="text-xs text-slate-400">Ambiente de Curadoria & Revisão por Pares</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Gestão Pedagógica & Editorial
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setAdminTab('questions')}
            className={`px-3 py-2 rounded-lg font-semibold transition ${
              adminTab === 'questions' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Revisão de Questões
          </button>
          <button
            onClick={() => setAdminTab('structures')}
            className={`px-3 py-2 rounded-lg font-semibold transition ${
              adminTab === 'structures' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Modelos 3D & GLB
          </button>
          <button
            onClick={() => setAdminTab('courses')}
            className={`px-3 py-2 rounded-lg font-semibold transition ${
              adminTab === 'courses' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Trilhas Curriculares
          </button>
          <button
            onClick={() => setAdminTab('audit')}
            className={`px-3 py-2 rounded-lg font-semibold transition ${
              adminTab === 'audit' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Auditoria & LGPD
          </button>
        </div>
      </div>

      {/* TAB 1: REVISÃO DE QUESTÕES */}
      {adminTab === 'questions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Fluxo editorial de submissão acadêmica e checagem de referências.</span>
            <span className="font-mono text-purple-300">{approvalList.length} itens cadastrados</span>
          </div>

          <div className="space-y-3">
            {approvalList.slice(0, 8).map((q) => (
              <div
                key={q.id}
                className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
                    <span className="text-cyan-400">{q.discipline}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{q.theme}</span>
                    <span className="text-slate-600">•</span>
                    <span
                      className={`px-2 py-0.5 rounded ${
                        q.status === 'approved'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}
                    >
                      {q.status === 'approved' ? 'Aprovada' : 'Pendente'}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white leading-snug">{q.statement}</h4>
                  <p className="text-[11px] text-slate-400">Revisor: {q.reviewerName}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleApprove(q.id)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/50 text-emerald-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Aprovar
                  </button>
                  <button
                    onClick={() => handleReject(q.id)}
                    className="px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600 border border-rose-500/50 text-rose-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <XCircle className="w-4 h-4" /> Ajustes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MODELOS 3D E TAXONOMIA */}
      {adminTab === 'structures' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Acervo de malhas anatômicas em glTF/GLB e mapeamento espacial.
            </span>
            <button
              onClick={() => showToast('Módulo de upload de GLB/OBJ acionado.', 'info')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
            >
              <Upload className="w-4 h-4" /> Importar Nova Malha 3D
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ANATOMICAL_STRUCTURES.map((st) => (
              <div
                key={st.id}
                className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-cyan-400">{st.id}</span>
                  <span className="text-[10px] text-slate-500">{st.systemId}</span>
                </div>
                <h4 className="font-bold text-white text-sm">{st.ptName}</h4>
                <p className="text-slate-400 italic text-[11px]">{st.latinName}</p>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                  <span>Plano: Sagital/Coronal</span>
                  <span>Mesh Status: Validada</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: TRILHAS CURRICULARES */}
      {adminTab === 'courses' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Cursos e matrizes curriculares ativas.</span>
            <button
              onClick={() => showToast('Criador de cursos aberto.', 'info')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
            >
              <Plus className="w-4 h-4" /> Novo Curso
            </button>
          </div>

          <div className="space-y-3">
            {COURSES_DATA.map((course) => (
              <div
                key={course.id}
                className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400">
                    {course.discipline} • {course.level}
                  </span>
                  <h4 className="font-bold text-sm text-white mt-0.5">{course.title}</h4>
                  <p className="text-xs text-slate-400">Instrutor: {course.instructor}</p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="font-mono text-white font-bold">{course.modulesCount} módulos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: AUDITORIA E LGPD */}
      {adminTab === 'audit' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <History className="w-4 h-4 text-purple-400" /> Registro de Atividades & Conformidade Legal
          </h3>

          <div className="space-y-2 font-mono text-[11px]">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
              <span className="text-slate-400">[2026-09-17 14:32:10] Consentimento LGPD v2.1 aceito por usuário u_mariana_duarte</span>
              <span className="text-emerald-400 font-bold">LOG_SUCCESS</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
              <span className="text-slate-400">[2026-09-17 14:15:00] Validação de malha 3D 'coracao_miocardio' concluída pelo curador</span>
              <span className="text-cyan-400 font-bold">MESH_VERIFIED</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
              <span className="text-slate-400">[2026-09-17 13:58:22] Acesso seguro ao proxy de IA via token de sessão autenticado</span>
              <span className="text-emerald-400 font-bold">AUTH_TOKEN_OK</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
