import { Flashcard, ClinicalCase, HistologySlide } from '../types';

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc1',
    discipline: 'Anatomia Humana',
    theme: 'Cardiovascular',
    front: 'Qual vaso irriga a maior parte do septo interventricular e a parede anterior do ventrículo esquerdo?',
    back: 'Ramo interventricular anterior (artéria descendente anterior) da artéria coronária esquerda.',
    relatedStructureId: 'coracao_miocardio',
    intervalDays: 1,
    easeFactor: 2.5,
    repetition: 0,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc2',
    discipline: 'Anatomia Humana',
    theme: 'Músculos e Diafragma',
    front: 'Quais raízes espinais do plexo cervical originam o nervo frênico, motor do diafragma?',
    back: 'Raízes ventrais de C3, C4 e C5 ("C3, C4, C5 mantêm o diafragma vivo").',
    relatedStructureId: 'musculo_diafragma',
    intervalDays: 2,
    easeFactor: 2.6,
    repetition: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc3',
    discipline: 'Hematologia',
    theme: 'Série Vermelha',
    front: 'O que caracteriza a presença de corpúsculos de Howell-Jolly no esfregaço de sangue periférico?',
    back: 'Fragmentos nucleares remanescentes de DNA no interior de eritrócitos, característicos de asplenia funcional, esplenectomia ou anemia megaloblástica.',
    relatedStructureId: 'baco',
    intervalDays: 3,
    easeFactor: 2.4,
    repetition: 2,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'hard'
  },
  {
    id: 'fc4',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Urinário',
    front: 'Qual é a relação topográfica da veia renal esquerda com a aorta abdominal e a artéria mesentérica superior?',
    back: 'A veia renal esquerda cruza horizontalmente anterior à aorta abdominal e logo abaixo da emergência da artéria mesentérica superior (pinça aortomesentérica).',
    relatedStructureId: 'rim_esquerdo',
    intervalDays: 1,
    easeFactor: 2.5,
    repetition: 0,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'hard'
  },
  {
    id: 'fc5',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Digestório',
    front: 'Quais veias confluem para a formação da veia porta do fígado na altura de L2?',
    back: 'A veia mesentérica superior (VMS) e a veia esplênica (frequentemente recebendo antes a veia mesentérica inferior).',
    relatedStructureId: 'figado_lobos',
    intervalDays: 4,
    easeFactor: 2.6,
    repetition: 3,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc6',
    discipline: 'Neuroanatomia',
    theme: 'Nervos Cranianos',
    front: 'Por qual forame craniano o nervo vago (NC X) deixa o crânio acompanhado pelos nervos glossofaríngeo (NC IX) e acessório (NC XI)?',
    back: 'Forame Jugular da base do crânio, acompanhado pela veia jugular interna.',
    relatedStructureId: 'nervo_vago_ncx',
    intervalDays: 2,
    easeFactor: 2.5,
    repetition: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc7',
    discipline: 'Anatomia Humana',
    theme: 'Membro Superior',
    front: 'Qual a inervação e a ação do músculo bíceps braquial?',
    back: 'Inervado pelo nervo musculocutâneo (C5, C6, C7). Atua como potente supinador do antebraço em flexão e flexor do cotovelo.',
    relatedStructureId: 'musculo_biceps_braquial',
    intervalDays: 5,
    easeFactor: 2.7,
    repetition: 4,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc8',
    discipline: 'Bioquímica Clínica',
    theme: 'Enzimologia',
    front: 'Por que a dosagem de lipase sérica é preferível à de amilase no diagnóstico de pancreatite aguda?',
    back: 'Porque a lipase é mais específica para o tecido pancreático e permanece elevada por mais tempo na circulação (7 a 14 dias), ao passo que a amilase também é produzida pelas glândulas salivares e decai rapidamente.',
    relatedStructureId: 'pancreas',
    intervalDays: 1,
    easeFactor: 2.5,
    repetition: 0,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc9',
    discipline: 'Anatomia Humana',
    theme: 'Articulação do Joelho',
    front: 'Qual ligamento cruzado do joelho é testado pela manobra da Gaveta Anterior e teste de Lachman?',
    back: 'Ligamento Cruzado Anterior (LCA).',
    relatedStructureId: 'articulacao_joelho',
    intervalDays: 6,
    easeFactor: 2.8,
    repetition: 4,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc10',
    discipline: 'Endocrinologia',
    theme: 'Tireoide',
    front: 'Quais células da tireoide produzem calcitonina e qual é o seu estímulo de liberação?',
    back: 'Células parafoliculares (células C), secretando calcitonina em resposta ao aumento da concentração de cálcio plasmático (hipercalcemia).',
    relatedStructureId: 'glandula_tireoide',
    intervalDays: 2,
    easeFactor: 2.5,
    repetition: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc11',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Respiratório',
    front: 'Quantos lobos e fissuras possui o pulmão direito humano?',
    back: 'Três lobos (superior, médio e inferior) separados por duas fissuras (oblíqua e horizontal).',
    relatedStructureId: 'pulmao_direito',
    intervalDays: 7,
    easeFactor: 2.9,
    repetition: 5,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc12',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Esquelético',
    front: 'Qual é o valor normal do ângulo de inclinação entre o colo e a diáfise do fêmur no adulto?',
    back: 'Aproximadamente 126 graus (valores <115° definem coxa vara; >140° definem coxa valga).',
    relatedStructureId: 'osso_femur',
    intervalDays: 2,
    easeFactor: 2.4,
    repetition: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'hard'
  },
  {
    id: 'fc13',
    discipline: 'Histologia',
    theme: 'Sangue e Hemocaterese',
    front: 'Em qual compartimento do baço ocorre a remoção de hemácias velhas e deformadas?',
    back: 'Nos cordões esplênicos da polpa vermelha (cordões de Billroth) e sinusoides esplênicos ricos em macrófagos.',
    relatedStructureId: 'baco',
    intervalDays: 3,
    easeFactor: 2.6,
    repetition: 2,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc14',
    discipline: 'Anatomia Humana',
    theme: 'Trato Urinário',
    front: 'Quais estruturas delimitam os três vértices do trígono da bexiga urinária (Trigonum vesicae)?',
    back: 'Os dois óstios dos ureteres (superiormente) e o óstio interno da uretra (inferiormente no ápice).',
    relatedStructureId: 'bexiga_urinaria',
    intervalDays: 1,
    easeFactor: 2.5,
    repetition: 0,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc15',
    discipline: 'Anatomia Humana',
    theme: 'Aparelho Visual',
    front: 'Quais as três túnicas concêntricas do bulbo do olho?',
    back: '1. Túnica fibrosa (esclera e córnea); 2. Túnica vascular / úvea (corioide, corpo ciliar e íris); 3. Túnica interna / nervosa (retina).',
    relatedStructureId: 'globo_ocular',
    intervalDays: 4,
    easeFactor: 2.7,
    repetition: 3,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc16',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Reprodutor Masculino',
    front: 'A hiperplasia prostática benigna (HPB) acomete comumente qual zona anatômica de McNeal?',
    back: 'Zona de transição (que circunda a porção proximal da uretra prostática).',
    relatedStructureId: 'prostata',
    intervalDays: 3,
    easeFactor: 2.5,
    repetition: 2,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc17',
    discipline: 'Anatomia Humana',
    theme: 'Vasos da Base',
    front: 'Quais são os três ramos arteriais que emergem do arco da aorta em sua conformação típica?',
    back: '1. Tronco braquiocefálico; 2. Artéria carótida comum esquerda; 3. Artéria subclávia esquerda.',
    relatedStructureId: 'arteria_aorta_toracica',
    intervalDays: 5,
    easeFactor: 2.8,
    repetition: 4,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc18',
    discipline: 'Anatomia Humana',
    theme: 'Aparelho Respiratório',
    front: 'Por que a parede posterior da traqueia não possui anéis cartilagíneos completos?',
    back: 'Porque é composta pela membrana fibromuscular contendo o músculo traqueal liso, permitindo a expansão fisiológica do esôfago anterior durante a deglutição do bolo alimentar.',
    relatedStructureId: 'traqueia',
    intervalDays: 2,
    easeFactor: 2.6,
    repetition: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'easy'
  },
  {
    id: 'fc19',
    discipline: 'Neuroanatomia',
    theme: 'Encéfalo',
    front: 'Onde se localiza o córtex somatossensorial primário (áreas 3, 1 e 2 de Brodmann)?',
    back: 'No giro pós-central do lobo parietal.',
    relatedStructureId: 'cerebro_telencefalo',
    intervalDays: 3,
    easeFactor: 2.5,
    repetition: 2,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'medium'
  },
  {
    id: 'fc20',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Digestório',
    front: 'Quais são as três camadas de músculo liso da parede gástrica (do exterior para o interior)?',
    back: 'Camada longitudinal (externa), camada circular (média) e camada oblíqua (interna).',
    relatedStructureId: 'estomago',
    intervalDays: 2,
    easeFactor: 2.5,
    repetition: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    difficulty: 'hard'
  }
];

export const CLINICAL_CASES_DATA: ClinicalCase[] = [
  {
    id: 'caso_iam_coronariano',
    title: 'Caso Clínico 1: Dor Torácica Aguda Opressiva com Irradiação para Membro Superior Esquerdo',
    discipline: 'Cardiologia & Anatomia Aplicada',
    patient: {
      age: 58,
      sex: 'Masculino',
      occupation: 'Gerente Comercial (Tabagista crônico, hipertenso)'
    },
    clinicalHistory: 'Paciente deu entrada na Unidade de Emergência referindo dor retroesternal em aperto iniciada em repouso há 90 minutos, de forte intensidade (9/10), com irradiação para a face medial do braço esquerdo e mandíbula, acompanhada de sudorese fria, náuseas e palidez cutânea.',
    physicalExam: 'PA: 160/95 mmHg, FC: 104 bpm, SpO2: 96% em ar ambiente. Bulhas taquicárdicas normofonéticas sem sopros; estertores crepitantes discretos em bases pulmonares.',
    labFindings: [
      { test: 'Troponina I Ultrassensível', result: '1.450 ng/L', referenceRange: '< 14 ng/L', status: 'altered' },
      { test: 'CK-MB massa', result: '38,5 ng/mL', referenceRange: '< 5,0 ng/mL', status: 'altered' },
      { test: 'Eletrocardiograma (ECG)', result: 'Supradesnivelamento de segmento ST de 3,5 mm em derivações V1 a V4 com ondas T hiperagudas', referenceRange: 'Isolado', status: 'altered' },
      { test: 'Glicemia de Jejum', result: '188 mg/dL', referenceRange: '70-99 mg/dL', status: 'altered' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Topografia Arterial da Isquemia',
        prompt: 'Considerando a elevação do segmento ST nas derivações precordiais V1 a V4 no ECG, qual artéria coronária é a mais provável culpada pela oclusão trombótica aguda?',
        options: [
          'Artéria coronária direita (ramo marginal direito)',
          'Artéria descendente anterior (ramo interventricular anterior da ACE)',
          'Artéria circunflexa esquerda',
          'Ramo interventricular posterior'
        ],
        correctIndex: 1,
        explanation: 'A artéria descendente anterior (ADA) irriga os dois terços anteriores do septo interventricular e a parede livre anterior do ventrículo esquerdo, correspondente às derivações V1 a V4 (parede anterosseptal).'
      },
      {
        stepNumber: 2,
        title: 'Explicação Anatômica da Dor Referida',
        prompt: 'Por que a isquemia miocárdica produz dor referida clássica na face medial do braço esquerdo?',
        options: [
          'Porque os nervos laríngeos recorrentes cruzam o plexo braquial',
          'Porque as fibras aferentes viscerais de dor cardíaca convergem para os mesmos segmentos da medula espinal (T1 a T4) que recebem sensibilidade somática do nervo cutâneo medial do braço e antebraço',
          'Por compressão direta da veia jugular interna esquerda',
          'Por anastomose direta entre a artéria subclávia e o ápice cardíaco'
        ],
        correctIndex: 1,
        explanation: 'Convergência visceral-somática: os neurônios de segunda ordem no corno posterior da medula espinal (segmentos T1 a T4) recebem sinapses tanto de aferentes nociceptivos cardíacos quanto de nervos sensitivos somáticos do tórax e membro superior esquerdo.'
      }
    ],
    anatomicalPhysiologicalCorrelation: 'A necrose isquêmica do miocárdio ventricular esquerdo compromete a contração sincrônica, gerando elevação da pressão diastólica final do ventrículo esquerdo (PDFVE), que se transmite retrogradamente para o átrio esquerdo e capilares pulmonares, justificando os estertores crepitantes incipientes (congestão venocapilar pulmonar).',
    references: [
      'Moore, K. L. Anatomia Orientada para a Clínica. 8ª ed. Guanabara Koogan, 2019.',
      'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine. 11th ed. Elsevier, 2018.'
    ]
  },
  {
    id: 'caso_sindrome_nefrotica',
    title: 'Caso Clínico 2: Edema Generalizado e Urina Espumosa em Adulto Jovem',
    discipline: 'Nefrologia & Análises Clínicas',
    patient: {
      age: 26,
      sex: 'Feminino',
      occupation: 'Estudante Universitária'
    },
    clinicalHistory: 'Paciente refere ganho súbito de 7 kg de peso em três semanas, acompanhado de edema progressivo em membros inferiores com cacifo positivo (3+/4+), edema periorbitário matutino acentuado e relato de urina com abundante formação de espuma espessa.',
    physicalExam: 'PA: 125/80 mmHg, FC: 78 bpm. Edema anasarca leve/moderado em membros inferiores até raiz das coxas, sinal de Godet francamente positivo.',
    labFindings: [
      { test: 'Proteinúria de 24 horas', result: '4,8 g/24h', referenceRange: '< 0,15 g/24h', status: 'altered' },
      { test: 'Albumina Sérica', result: '1,8 g/dL', referenceRange: '3,5 a 5,2 g/dL', status: 'altered' },
      { test: 'Colesterol Total', result: '340 mg/dL', referenceRange: '< 190 mg/dL', status: 'altered' },
      { test: 'Creatinina Sérica', result: '0,9 mg/dL', referenceRange: '0,6 a 1,1 mg/dL', status: 'normal' },
      { test: 'Sedimento Urinário (EAS)', result: 'Presença de cilindros graxos e corpos ovais gordurosos com cruz de malta em luz polarizada', referenceRange: 'Negativo', status: 'altered' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identificação da Síndrome Nefrológica',
        prompt: 'A tríade clássica apresentada (Proteinúria nefrótica > 3,5g/24h, Hipoalbuminemia intensa e Edema exuberante) define qual condição?',
        options: [
          'Síndrome Nefrítica Aguda',
          'Síndrome Nefrótica',
          'Insuficiência Renal Aguda Pré-Renal',
          'Necrose Tubular Aguda Tóxica'
        ],
        correctIndex: 1,
        explanation: 'A perda massiva de proteínas urinárias (>3,5 g/24h por 1,73 m²) associada à hipoalbuminemia sérica (<3,0 g/dL), edema e dislipidemia secundária compõe o quadro fechado de Síndrome Nefrótica.'
      },
      {
        stepNumber: 2,
        title: 'Morfologia da Barreira de Filtração Glomerular',
        prompt: 'Qual estrutura da barreira de filtração glomerular renal sofre fusão ou apagamento de seus prolongamentos celulares (pedicelos) nas glomerulopatias associadas à perda de nefrina e podocina?',
        options: [
          'Célula endotelial fenestrada glomerular',
          'Lâmina densa da membrana basal glomerular',
          'Podócito (célula epitelial visceral da cápsula de Bowman)',
          'Célula mesangial extraglomerular'
        ],
        correctIndex: 2,
        explanation: 'Os podócitos mantêm as fendas de filtração com diafragmas moleculares ricos em nefrina e podocina. A perda da carga eletronegativa ou o apagamento dos pedicelos podocitários permite o extravasamento livre de macromoléculas como a albumina.'
      }
    ],
    anatomicalPhysiologicalCorrelation: 'A hipoalbuminemia marcante reduz drasticamente a pressão coloidosmótica (oncótica) intravascular nos capilares periféricos, desbalanceando as Forças de Starling e favorecendo o influxo maciço de fluido para o interstício tecidual (edema). Concomitantemente, a queda da volemia efetiva estimula o sistema renina-angiotensina-aldosterona (SRAA), gerando retenção secundária de sódio e água pelo túbulo contorcido distal e ducto coletor.',
    references: [
      'Guyton & Hall. Tratado de Fisiologia Médica. 14ª ed. Elsevier, 2021.',
      'Robbins & Cotran. Bases Patológicas das Doenças. 9ª ed. Elsevier, 2016.'
    ]
  }
];

export const HISTOLOGY_SLIDES_DATA: HistologySlide[] = [
  {
    id: 'lamina_miocardio',
    name: 'Coração: Tecido Muscular Estriado Cardíaco',
    tissueType: 'Tecido Muscular Estriado',
    organ: 'Miocárdio',
    stain: 'Hematoxilina & Eosina (H&E)',
    description: 'Fibras musculares estriadas cardíacas ramificadas com um ou dois núcleos volumosos em posição estritamente central, separadas por tecido conjuntivo perimísio vascularizado e unidas término-terminalmente por discos intercalares.',
    normalVsAlteredNotes: 'Tecido normal exibe núcleos ovais claros centrais e estriações transversais regulares. Em áreas de isquemia/infarto recente, observa-se necrose de coagulação com hipereosinofilia das fibras, ausência de núcleos (cariólise) e infiltrado neutrofílico intersticial.',
    markers: [
      { xPercent: 32, yPercent: 45, title: 'Disco Intercalar', description: 'Complexo juncional transversal contendo desmossomos e junções comunicantes elétricas.' },
      { xPercent: 55, yPercent: 48, title: 'Núcleo Central', description: 'Núcleo ovoide grande único em posição central, diferenciando o músculo cardíaco do esquelético.' },
      { xPercent: 78, yPercent: 62, title: 'Capilar Sanguíneo', description: 'Rica rede de capilares contínuos provendo suprimento contínuo de oxigênio.' }
    ]
  },
  {
    id: 'lamina_rim_glomerulo',
    name: 'Rim: Córtex Renal com Corpúsculo de Malpighi',
    tissueType: 'Epitélio e Filtração Renal',
    organ: 'Rim / Córtex',
    stain: 'Ácido Periódico de Schiff (PAS) + H&E',
    description: 'Glomérulo capilar enovelado no interior da cápsula de Bowman, cercado por túbulos contorcidos proximais (com borda em escova bem corada pelo PAS) e túbulos contorcidos distais.',
    normalVsAlteredNotes: 'Normalmente, o espaço de Bowman urinário é límpido e os capilares contêm hemácias isoladas. Na glomerulonefrite proliferativa, observa-se hipercelularidade mesangial, espessamento da membrana basal capilar e obliteração do espaço capsular.',
    markers: [
      { xPercent: 48, yPercent: 44, title: 'Tufo Glomerular', description: 'Alças capilares fenestradas sustentadas pela matriz e células mesangiais.' },
      { xPercent: 24, yPercent: 38, title: 'Espaço Capsular de Bowman', description: 'Espaço urinário que recebe o ultrafiltrado plasmático primário.' },
      { xPercent: 75, yPercent: 28, title: 'Túbulo Contorcido Proximal', description: 'Epitélio simples cúbico com microvilosidades apicais densas (borda em escova).' }
    ]
  },
  {
    id: 'lamina_sangue_periferico',
    name: 'Esfregaço de Sangue Periférico Normal',
    tissueType: 'Tecido Sanguíneo',
    organ: 'Sangue Venoso',
    stain: 'Coloração de Wright-Giemsa',
    description: 'Distribuição homogênea de eritrócitos anucleados bicôncavos com halo central claro (cerca de 1/3 do diâmetro), plaquetas em pequenos agregados e leucócitos preservados (neutrófilos segmentados, linfócitos e monócitos).',
    normalVsAlteredNotes: 'Em condições normais, há cerca de 500 a 1000 hemácias para cada leucócito. Na anemia ferropriva, as hemácias mostram microcitose e halo central ampliado (hipocromia). Em infecções bacterianas agudas, predominam neutrófilos com grânulos escuros tóxicos.',
    markers: [
      { xPercent: 42, yPercent: 52, title: 'Neutrófilo Segmentado', description: 'Leucócito polimorfonuclear com 3 a 5 lobos nucleares conectados por filamentos de cromatina.' },
      { xPercent: 68, yPercent: 35, title: 'Linfócito Maduro', description: 'Célula mononuclear esférica com núcleo denso arredondado e fino halo citoplasmático azul-claro.' },
      { xPercent: 30, yPercent: 70, title: 'Plaquetas', description: 'Fragmentos citoplasmáticos de megacariócitos anucleados medindo 2 a 4 micrômetros.' }
    ]
  }
];
