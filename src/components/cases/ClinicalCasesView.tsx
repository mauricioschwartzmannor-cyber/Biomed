import React, { useState } from 'react';
import {
  Stethoscope,
  User,
  Activity,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CLINICAL_CASES_DATA } from '../../data';
import { ClinicalCase } from '../../types';

export const ClinicalCasesView: React.FC = () => {
  const { addXP, showToast } = useApp();
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CLINICAL_CASES_DATA[0].id);
  const [stepAnswers, setStepAnswers] = useState<Record<string, number>>({});
  const [stepConfirmed, setStepConfirmed] = useState<Record<string, boolean>>({});

  const activeCase: ClinicalCase =
    CLINICAL_CASES_DATA.find((c) => c.id === selectedCaseId) || CLINICAL_CASES_DATA[0];

  const handleSelectOption = (stepIndex: number, optionIndex: number) => {
    const key = `${activeCase.id}_step_${stepIndex}`;
    if (stepConfirmed[key]) return;
    setStepAnswers((prev) => ({ ...prev, [key]: optionIndex }));
  };

  const handleConfirmStep = (stepIndex: number, correctIndex: number) => {
    const key = `${activeCase.id}_step_${stepIndex}`;
    const chosen = stepAnswers[key];
    if (chosen === undefined) {
      showToast('Selecione uma resposta antes de confirmar a conduta.', 'warning');
      return;
    }

    setStepConfirmed((prev) => ({ ...prev, [key]: true }));
    if (chosen === correctIndex) {
      addXP(50, 'Conduta e diagnóstico clínico corretos!');
      showToast('Excelente raciocínio clínico! +50 XP adicionados.', 'success');
    } else {
      showToast('Resposta divergente da literatura de referência.', 'info');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
              Raciocínio Clínico Integrado
            </span>
            <span className="text-xs text-slate-400">Anatomia, Fisiologia e Análises Clínicas</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Casos Clínicos Interativos
          </h1>
        </div>

        {/* Case Switcher Buttons */}
        <div className="flex items-center gap-2">
          {CLINICAL_CASES_DATA.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                selectedCaseId === c.id
                  ? 'bg-cyan-600 border-cyan-500 text-white shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Caso {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Case Header & Patient Profile Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div>
          <span className="text-[11px] uppercase font-bold text-cyan-400">{activeCase.discipline}</span>
          <h2 className="text-xl font-bold text-white mt-1">{activeCase.title}</h2>
        </div>

        {/* Patient Demographic Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs">
          <div className="flex items-center gap-2.5">
            <User className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="text-slate-500 block text-[10px]">Idade / Sexo</span>
              <span className="text-slate-200 font-semibold">
                {activeCase.patient.age} anos • {activeCase.patient.sex}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:col-span-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="text-slate-500 block text-[10px]">Ocupação e Histórico Social</span>
              <span className="text-slate-200 font-medium">{activeCase.patient.occupation}</span>
            </div>
          </div>
        </div>

        {/* Clinical History & Physical Exam */}
        <div className="space-y-3 text-xs leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1">
              História da Moléstia Atual (HMA)
            </h4>
            <p className="text-slate-300 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800">
              {activeCase.clinicalHistory}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1">
              Exame Físico & Sinais Vitais
            </h4>
            <p className="text-slate-300 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800">
              {activeCase.physicalExam}
            </p>
          </div>
        </div>

        {/* Laboratory Findings Table */}
        <div className="space-y-2 pt-2">
          <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
            Resultados dos Exames Complementares & Laboratoriais
          </h4>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3">Exame / Parâmetro</th>
                  <th className="p-3">Resultado Obtido</th>
                  <th className="p-3">Valor de Referência</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900/60">
                {activeCase.labFindings.map((lab, i) => (
                  <tr key={i} className="hover:bg-slate-800/40">
                    <td className="p-3 font-semibold text-slate-200">{lab.test}</td>
                    <td className="p-3 font-mono text-cyan-300 font-bold">{lab.result}</td>
                    <td className="p-3 text-slate-400">{lab.referenceRange}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          lab.status === 'altered'
                            ? 'bg-rose-950/80 text-rose-300 border border-rose-800/80'
                            : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80'
                        }`}
                      >
                        {lab.status === 'altered' ? 'Alterado' : 'Normal'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Guided Steps / Decision Tree */}
      <div className="space-y-6">
        <h3 className="font-extrabold text-lg text-white">Etapas de Raciocínio Clínico & Diagnóstico</h3>

        {activeCase.steps.map((step, sIdx) => {
          const key = `${activeCase.id}_step_${sIdx}`;
          const chosenOpt = stepAnswers[key];
          const isConfirmed = stepConfirmed[key];
          const isCorrect = chosenOpt === step.correctIndex;

          return (
            <div key={sIdx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 font-bold text-xs flex items-center justify-center border border-cyan-800">
                  {step.stepNumber}
                </span>
                <h4 className="font-bold text-sm text-white">{step.title}</h4>
              </div>

              <p className="text-xs md:text-sm text-slate-200 font-medium">{step.prompt}</p>

              <div className="space-y-2">
                {step.options.map((optText, oIdx) => {
                  const isSelected = chosenOpt === oIdx;
                  let style = 'bg-slate-950/60 hover:bg-slate-800 border-slate-800 text-slate-300';

                  if (isConfirmed) {
                    if (oIdx === step.correctIndex) {
                      style = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold';
                    } else if (isSelected && oIdx !== step.correctIndex) {
                      style = 'bg-rose-950/70 border-rose-500 text-rose-200';
                    }
                  } else if (isSelected) {
                    style = 'bg-cyan-950/70 border-cyan-500 text-cyan-200 font-semibold';
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={isConfirmed}
                      onClick={() => handleSelectOption(sIdx, oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs flex items-start gap-3 transition ${style}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold shrink-0 text-[10px]">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{optText}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                {!isConfirmed ? (
                  <button
                    disabled={chosenOpt === undefined}
                    onClick={() => handleConfirmStep(sIdx, step.correctIndex)}
                    className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white font-bold text-xs transition shadow-md"
                  >
                    Confirmar Hipótese Diagnóstica
                  </button>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Correto! (+50 XP)
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Hipótese Incorreta
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{step.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Anatomical and Physiological Correlation Deep-Dive */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-xl">
          <h4 className="font-bold text-cyan-300 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" /> Correlação Morfofisiológica & Bioquímica Aprofundada
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            {activeCase.anatomicalPhysiologicalCorrelation}
          </p>

          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
            <strong className="text-slate-400">Referências Bibliográficas:</strong>
            <ul className="list-disc list-inside mt-1 space-y-0.5">
              {activeCase.references.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mandatory Regulatory Disclaimer */}
        <div className="flex items-center gap-2 p-3 bg-amber-950/20 border border-amber-900/40 rounded-xl text-[10px] text-amber-300 leading-tight">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Aviso Legal & Regulatório:</strong> Caso clínico exclusivamente didático formulado para estudantes de graduação e pós-graduação em saúde. Não representa recomendação de conduta clínica para pacientes reais.
          </span>
        </div>
      </div>
    </div>
  );
};
