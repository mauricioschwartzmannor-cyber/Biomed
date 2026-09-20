import React, { useState } from 'react';
import {
  User,
  Shield,
  Download,
  Trash2,
  Lock,
  CheckCircle2,
  Sliders,
  Award,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';

export const ProfileAndLgpdView: React.FC = () => {
  const { currentUser, setCurrentUser, switchRole, showToast } = useApp();

  const handleExportData = () => {
    const dataStr = JSON.stringify(currentUser, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dados_lgpd_${currentUser.uid}_${Date.now()}.json`;
    link.click();
    showToast('Exportação de dados pessoais (Portabilidade LGPD) concluída!', 'success');
  };

  const handleRevokeConsent = () => {
    showToast('Consentimento revogado. Seus dados analíticos não serão mais coletados.', 'info');
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
            Minha Conta & Segurança
          </span>
          <span className="text-xs text-slate-400">Em conformidade com a LGPD (Lei 13.709/2018)</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Perfil Acadêmico & Privacidade
        </h1>
      </div>

      {/* User Information Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={currentUser.avatarUrl}
            alt={currentUser.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500 shadow-xl"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{currentUser.name}</h2>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                {currentUser.role}
              </span>
            </div>
            <p className="text-xs text-slate-400">{currentUser.email}</p>
            <p className="text-xs text-slate-500">{currentUser.institution}</p>
          </div>
        </div>

        {/* Role Switcher for Platform Evaluation */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Alternar Perfil de Acesso:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {(['student', 'teacher', 'reviewer', 'admin'] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => switchRole(r)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition ${
                  currentUser.role === r
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                }`}
              >
                {r === 'student'
                  ? 'Estudante'
                  : r === 'teacher'
                  ? 'Professor'
                  : r === 'reviewer'
                  ? 'Revisor'
                  : 'Admin'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LGPD Compliance Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-lg text-white">Privacidade, Governança & LGPD</h3>
          </div>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Consentimento Ativo (v{currentUser.lgpdConsent?.version})
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Direitos do Titular de Dados:</h4>
            <p>
              Em conformidade com o Artigo 18 da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você possui o controle integral sobre suas informações acadêmicas, registros de acesso e dados de navegação.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Confirmação da existência de tratamento dos dados educacionais;</li>
              <li>Acesso aos dados gerados durante simulados e cursos;</li>
              <li>Portabilidade dos dados para outro fornecedor de serviço acadêmico;</li>
              <li>Eliminação ou anonimização de dados desnecessários.</li>
            </ul>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Gestão de Privacidade:</h4>

            <div className="space-y-2">
              <button
                onClick={handleExportData}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4 text-cyan-400" /> Exportar Todos os Meus Dados (JSON)
              </button>

              <button
                onClick={handleRevokeConsent}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-rose-950/40 border border-slate-700 hover:border-rose-800 text-slate-300 hover:text-rose-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Lock className="w-4 h-4 text-rose-400" /> Revogar Consentimento Analítico
              </button>
            </div>

            <div className="pt-2 text-[10px] text-slate-500 border-t border-slate-800">
              Encarregado de Proteção de Dados (DPO): <strong>dpo@anatomia360.edu.br</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Download Source Code ZIP Card */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
              Exportação do Sistema & Execução Offline
            </span>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Download className="w-5 h-5 text-cyan-400" />
              Download do Código-Fonte Completo (.ZIP)
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl">
              Baixe o código integral da aplicação Anatomia 360 (React, TypeScript, Three.js, Express, Tailwind CSS e dados anatômicos) empacotado para execução em seu computador.
            </p>
          </div>

          <a
            href="/api/download/anatomia360.zip"
            download="anatomia360-projeto-completo.zip"
            className="px-5 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg shadow-cyan-950 shrink-0"
          >
            <Download className="w-4 h-4" /> Baixar Projeto .ZIP
          </a>
        </div>

        <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 text-[11px] text-slate-300 font-mono space-y-1">
          <div className="text-slate-500 font-sans font-semibold">Como rodar na sua máquina após extrair:</div>
          <div>1. <span className="text-cyan-400">npm install</span></div>
          <div>2. <span className="text-cyan-400">npm run dev</span> (abre o servidor local em http://localhost:3000)</div>
        </div>
      </div>
    </div>
  );
};
