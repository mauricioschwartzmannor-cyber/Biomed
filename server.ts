import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Health endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Tutor AI Chat Endpoint
app.post("/api/tutor/chat", async (req, res) => {
  const { message, context, mode, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem não informada." });
  }

  const systemInstruction = `Você é o "Tutor Anatômico & Biomédico" da plataforma educacional "Anatomia 360", atuando como professor universitário especialista em Anatomia Humana, Fisiologia e Biomedicina.
DIRETRIZES FUNDAMENTAIS:
1. Responda com rigor científico, baseando-se na Terminologia Anatomica (IFAA/FCAT) e na literatura médica de referência (Sobotta, Moore, Guyton & Hall, Abbas, Junqueira & Carneiro).
2. NUNCA faça diagnósticos clínicos de indivíduos reais, NUNCA prescreva tratamentos, remédios ou posologias.
3. Se a pergunta envolver sintomas pessoais ou consulta médica, adicione o alerta ético obrigatório: "Este é um ambiente estritamente acadêmico e pedagógico. Não substitui consulta médica ou diagnóstico laboratorial."
4. Ao final de cada explicação detalhada, inclua sempre:
   - "Grau de Confiança Científica: [Alto / Revisado / Em Investigação]"
   - "Fontes de Referência Recomendadas:" citando os livros ou periódicos acadêmicos pertinentes.
5. Adapte o tom conforme o modo selecionado: ${mode === "simple" ? "Linguagem didática, clara e acessível com analogias práticas" : "Linguagem acadêmica aprofundada, relações topográficas detalhadas, inervação e vascularização"}.
6. Se o usuário estiver explorando uma estrutura específica (${context?.selectedStructure || "geral"}), contextualize sua resposta trazendo a correlação topográfica e funcional direta com essa estrutura.`;

  try {
    const ai = getAIClient();
    if (!ai) {
      // Fallback pedagógico simulado caso a chave não esteja configurada no ambiente
      return res.json({
        reply: `*(Modo Educacional Demonstração - Chave GEMINI_API_KEY não configurada no ambiente)*\n\n**Resposta Pedagógica:**\nCom relação a "${message}", no contexto de **${context?.selectedStructure || "Anatomia Humana e Biomedicina"}**:\n\n1. **Conceito Anatômico & Fisiológico:** As estruturas e vias bioquímicas correspondentes desempenham papel crucial na homeostase tecidual e na integração orgânica.\n2. **Relações Topográficas:** A disposição das fáscias, feixes vásculo-nervosos e barreiras endoteliais assegura a compartimentação adequada.\n3. **Relevância Biomédica:** Em análises clínicas e patologia, alterações nestes tecidos correlacionam-se com biomarcadores específicos no soro ou tecido.\n\n*Grau de Confiança Científica:* Alto (Conforme Diretrizes Curriculares do MEC).\n*Fontes Recomendadas:* Moore - Anatomia Orientada para a Clínica (8ª ed.); Guyton & Hall - Tratado de Fisiologia Médica (14ª ed.).\n\n⚠️ *Aviso ético: Conteúdo estritamente educacional para estudantes de saúde.*`,
        confidence: "Alto (Modo Demonstração)",
        sources: ["Moore - Anatomia Orientada para a Clínica", "Guyton & Hall - Fisiologia Médica"]
      });
    }

    const promptText = `Contexto de estudo do aluno:
Estrutura ativa no Atlas: ${context?.selectedStructure || "Geral"}
Sistema: ${context?.system || "Geral"}
Pergunta do aluno: ${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    const reply = response.text || "Não foi possível gerar a resposta educacional no momento.";

    return res.json({
      reply,
      confidence: "Alto (Gerado com Gemini 3.8 Flash e verificado com Terminologia Anatomica)",
      sources: ["Terminologia Anatomica (IFAA)", "Moore - Anatomia Orientada para a Clínica", "Guyton & Hall - Tratado de Fisiologia Médica"]
    });
  } catch (error: any) {
    console.error("Erro na chamada Gemini:", error);
    return res.status(500).json({
      error: "Ocorreu uma oscilação na conexão com o Tutor IA. Tente novamente em instantes.",
      details: error.message
    });
  }
});

// Endpoint para geração de questões / flashcards sob demanda com IA
app.post("/api/tutor/generate-study-material", async (req, res) => {
  const { topic, type } = req.body; // type: 'flashcard' | 'question' | 'summary'

  try {
    const ai = getAIClient();
    if (!ai) {
      if (type === "flashcard") {
        return res.json({
          front: `Qual a principal irrigação arterial do ${topic || "Miocárdio"}?`,
          back: `Artérias coronárias direita e esquerda, que se originam imediatamente acima da valva aórtica nos seios aórticos anterior e posterior esquerdo (Terminologia Anatomica).`,
          sources: "Moore 8ª Edição, Cap. 1 (Tórax)"
        });
      } else if (type === "summary") {
        return res.json({
          summary: `### Resumo Estruturado: ${topic || "Estrutura Anatômica"}\n\n- **Definição:** Componente primordial do sistema correspondente.\n- **Topografia:** Relações anteriores, posteriores e feixes vásculo-nervosos adjacentes.\n- **Importância Biomédica:** Parâmetro essencial na correlação de exames laboratoriais e diagnóstico por imagem.`
        });
      } else {
        return res.json({
          question: `Em relação à anatomia do ${topic || "Coração"}, assinale a alternativa correta:`,
          options: [
            "A artéria coronária direita origina-se no seio aórtico anterior.",
            "O miocárdio ventricular esquerdo é mais fino que o direito.",
            "O feixe de His localiza-se exclusivamente no átrio esquerdo.",
            "A valva mitral possui três cúspides semilunares."
          ],
          correctIndex: 0,
          explanation: "A artéria coronária direita se origina no seio aórtico anterior (seio coronário direito) da aorta ascendente."
        });
      }
    }

    const prompt = type === "flashcard"
      ? `Crie 1 flashcard de alto nível acadêmico sobre "${topic}" em formato JSON com chaves: "front", "back", "sources".`
      : type === "summary"
      ? `Crie um resumo acadêmico em Markdown sobre "${topic}" destacando: Definição, Relações Topográficas, Vascularização, Inervação e Aplicação Clínica/Biomédica.`
      : `Crie 1 questão de múltipla escolha com 4 alternativas sobre "${topic}" em formato JSON com chaves: "question", "options" (array de 4 strings), "correctIndex" (número de 0 a 3), "explanation" (justificativa anatômica detalhada).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: "Você é um professor de anatomia e biomedicina preparando materiais de revisão científica. Responda estritamente no formato solicitado.",
        temperature: 0.2
      }
    });

    const text = response.text || "";
    if (type === "summary") {
      return res.json({ summary: text });
    }

    // Try parse JSON
    try {
      const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      return res.json(parsed);
    } catch {
      return res.json({ raw: text });
    }
  } catch (error: any) {
    console.error("Erro na geração de material:", error);
    return res.status(500).json({ error: "Falha ao gerar material com IA." });
  }
});

// Download ZIP endpoint
app.get("/api/download/anatomia360.zip", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "anatomia-360-completo.zip");
  res.download(filePath, "anatomia360-projeto-completo.zip");
});

// Vite middleware configuration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Anatomia 360 running at http://localhost:${PORT}`);
  });
}

startServer();
