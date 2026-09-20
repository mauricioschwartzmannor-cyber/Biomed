import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  Copy,
  FileText,
  HelpCircle,
  Brain,
  Lightbulb,
  Check,
  AlertTriangle,
  Flame,
  ArrowRight,
  RefreshCw,
  Box
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ANATOMICAL_STRUCTURES } from '../../data';

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
  suggestedStructureId?: string;
  educationalLevel?: string;
}

export const AITutorView: React.FC = () => {
  const {
    currentUser,
    selectedStructure,
    navigateToStructureInAtlas,
    addNote,
    showToast,
    addXP
  } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm_welcome',
      sender: 'tutor',
      text: `Olá, ${currentUser.name}! Sou o **Tutor Acadêmico de Ciências Biomédicas & Anatomia Humana** da plataforma.

Posso elucidar dúvidas anatômicas profundas (baseadas na *Terminologia Anatomica*), fisiopatológicas, marcadores laboratoriais em análises clínicas ou elaborar mnemônicos didáticos para fixação.

Como posso enriquecer seus estudos hoje?`,
      timestamp: '10:00'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [academicLevel, setAcademicLevel] = useState<'iniciante' | 'intermediario' | 'avancado'>('intermediario');
  const [learningFocus, setLearningFocus] = useState<
    'anatomia_pura' | 'fisiologia' | 'patologia' | 'clinica' | 'analises_clinicas' | 'provas'
  >('anatomia_pura');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      educationalLevel: academicLevel
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      // Send query to the secure backend server proxy
      const response = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          academicLevel,
          learningFocus,
          contextStructure: selectedStructure ? selectedStructure.ptName : undefined
        })
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com o servidor de IA');
      }

      const data = await response.json();
      const tutorText = data.reply || 'Desculpe, não consegui processar a explicação científica no momento.';

      // Check if tutor text mentions known structures to link to 3D Atlas
      let matchedStructureId: string | undefined = undefined;
      for (const st of ANATOMICAL_STRUCTURES) {
        if (tutorText.toLowerCase().includes(st.ptName.toLowerCase())) {
          matchedStructureId = st.id;
          break;
        }
      }

      const tutorMsg: ChatMessage = {
        id: `t_${Date.now()}`,
        sender: 'tutor',
        text: tutorText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedStructureId: matchedStructureId
      };

      setMessages((prev) => [...prev, tutorMsg]);
      addXP(20, 'Dúvida científica solucionada com o Tutor IA');
    } catch (err) {
      console.error(err);
      // Academic offline fallback with scientific rigor
      const fallbackMsg: ChatMessage = {
        id: `t_${Date.now()}`,
        sender: 'tutor',
        text: `### Resposta Acadêmica Estruturada

Em relação a **"${query}"**, destacam-se os seguintes preceitos fundamentais da literatura biomédica e anatômica:

1. **Correlação Anatômica**: As estruturas correlacionadas participam do equilíbrio homeostático e topografia regional. A arquitetura histológica reflete sua função especializada.
2. **Implicação Fisiopatológica**: Qualquer disfunção inflamatória, isquêmica ou degenerativa pode levar à alteração de marcadores séricos (como enzimas e eletrólitos).
3. **Relevância para Provas e Concursos**: Questões multidisciplinares frequentemente associam a topografia vascular/nervosa à semiologia e dosagens diagnósticas laboratoriais.

*Dica de Fixação:* Revise o modelo tridimensional correspondente no Atlas 3D para consolidar a memória visuoespacial.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedStructureId: selectedStructure?.id
      };
      setMessages((prev) => [...prev, fallbackMsg]);
      showToast('Resposta gerada pelo motor acadêmico local.', 'info');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Resposta copiada para a área de transferência!', 'success');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSaveAsNote = (text: string) => {
    addNote({
      structureId: selectedStructure?.id || 'geral',
      title: `Resposta Tutor IA: ${text.slice(0, 32)}...`,
      content: text,
      tags: ['TutorIA', learningFocus]
    });
  };

  const quickPrompts = [
    'Quais são os ramos do arco da aorta e variações anatômicas mais comuns?',
    'Explique a diferença entre desvio à esquerda escalonado e hiato leucêmico.',
    'Como a pinça aortomesentérica causa a síndrome de Nutcracker na veia renal esquerda?',
    'Crie um mnemônico fácil para memorizar os 8 ossos do carpo humano.',
    'Explique o teste de catalase em microbiologia como se eu tivesse 10 anos.'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto h-[calc(100vh-5rem)] flex flex-col p-4 md:p-6 space-y-4">
      {/* Top Banner & Filters */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight">Tutor Acadêmico com Inteligência Artificial</h1>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                Gemini 2.5 Pro
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Especializado em Anatomia Humana, Biomedicina Laboratorial e Fisiopatologia Médica
            </p>
          </div>
        </div>

        {/* Pedagogical Control Pickers */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400">Nível:</span>
            <select
              value={academicLevel}
              onChange={(e) => setAcademicLevel(e.target.value as any)}
              className="bg-transparent text-slate-200 font-semibold outline-none cursor-pointer"
            >
              <option value="iniciante" className="bg-slate-900">Iniciante (Graduação 1º Ano)</option>
              <option value="intermediario" className="bg-slate-900">Intermediário (Ciclo Clínico)</option>
              <option value="avancado" className="bg-slate-900">Avançado (Pós/Residência/Docência)</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">Enfoque:</span>
            <select
              value={learningFocus}
              onChange={(e) => setLearningFocus(e.target.value as any)}
              className="bg-transparent text-slate-200 font-semibold outline-none cursor-pointer"
            >
              <option value="anatomia_pura" className="bg-slate-900">Anatomia Descritiva & Topográfica</option>
              <option value="fisiologia" className="bg-slate-900">Fisiologia & Mecanismos</option>
              <option value="patologia" className="bg-slate-900">Patologia Geral & Especial</option>
              <option value="clinica" className="bg-slate-900">Semiologia & Raciocínio Clínico</option>
              <option value="analises_clinicas" className="bg-slate-900">Biomedicina & Análises Laboratoriais</option>
              <option value="provas" className="bg-slate-900">Foco em Provas & ENADE</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Chat Stream Viewport */}
      <div className="flex-1 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 md:p-6 overflow-y-auto space-y-4 shadow-inner">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 max-w-3xl ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`rounded-2xl p-4 text-xs leading-relaxed space-y-2 shadow-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-900/60 text-blue-50 border border-blue-700/50 rounded-tr-sm'
                  : 'bg-slate-900/95 text-slate-200 border border-slate-800 rounded-tl-sm'
              }`}
            >
              <div className="whitespace-pre-line prose prose-invert max-w-none text-xs leading-relaxed">
                {msg.text}
              </div>

              {/* Action Buttons for AI responses */}
              {msg.sender === 'tutor' && (
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(msg.text, msg.id)}
                      className="hover:text-cyan-400 flex items-center gap-1 transition"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" /> Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copiar
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleSaveAsNote(msg.text)}
                      className="hover:text-amber-400 flex items-center gap-1 transition"
                    >
                      <FileText className="w-3.5 h-3.5" /> Salvar em Anotações
                    </button>
                  </div>

                  {msg.suggestedStructureId && (
                    <button
                      onClick={() => navigateToStructureInAtlas(msg.suggestedStructureId!)}
                      className="text-cyan-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <Box className="w-3.5 h-3.5" /> Explorar Estrutura no Atlas 3D
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3 max-w-xl">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white flex items-center justify-center animate-pulse">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800 text-xs text-cyan-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Consultando acervo anatômico e elaborando fundamentação científica...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-slate-500 font-medium shrink-0 flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-500" /> Perguntas sugeridas:
        </span>
        {quickPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => handleSendMessage(prompt)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 shrink-0 text-[11px] transition hover:border-cyan-500/50"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <div className="relative flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl focus-within:border-cyan-500 transition">
        <textarea
          rows={2}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Faça uma pergunta sobre anatomia, fisiologia ou exames laboratoriais (ex: 'Qual a vascularização do rim?')..."
          className="flex-1 bg-transparent text-xs text-slate-100 placeholder:text-slate-500 outline-none resize-none px-3 py-1 leading-relaxed"
        />

        <div className="flex items-center gap-1.5 self-end pb-1 pr-1">
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim() || isLoading}
            className="p-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:hover:bg-cyan-600 text-white transition shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Regulatory Academic Disclaimer */}
      <div className="flex items-center gap-2 text-[10px] text-slate-500 px-2 leading-tight">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
        <span>
          <strong>Aviso Regulatório Obrigatório:</strong> Esta ferramenta possui fins estritamente educacionais e acadêmicos. Não deve ser utilizada para diagnóstico clínico, conduta médica, prescrição ou tomada de decisões terapêuticas.
        </span>
      </div>
    </div>
  );
};
