import { Question, SimulatedExam } from '../types';

export const QUESTIONS_DATA: Question[] = [
  {
    id: 'q1',
    statement: 'Em relação à vascularização arterial do coração humano, a artéria interventricular anterior (descendente anterior) é ramo direto de qual vaso?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Artéria coronária direita.' },
      { id: 'b', text: 'Artéria coronária esquerda.' },
      { id: 'c', text: 'Arco da aorta.' },
      { id: 'd', text: 'Artéria circunflexa.' }
    ],
    correctOptionId: 'b',
    explanation: 'A artéria coronária esquerda (ACE) origina-se do seio aórtico esquerdo de Valsalva e divide-se precocemente em dois ramos principais: o ramo interventricular anterior (descendente anterior) e o ramo circunflexo.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Cardiovascular',
    difficulty: 'easy',
    relatedStructureId: 'coracao_miocardio',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-01',
    stats: { totalAttempts: 1420, successRatePercent: 82 }
  },
  {
    id: 'q2',
    statement: 'Qual é o nível vertebral em que a veia cava inferior atravessa o músculo diafragma?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'T6' },
      { id: 'b', text: 'T8' },
      { id: 'c', text: 'T10' },
      { id: 'd', text: 'T12' }
    ],
    correctOptionId: 'b',
    explanation: 'A veia cava inferior atravessa o forame da veia cava situado na porção tendínea (centro tendíneo) do diafragma na altura da vértebra T8.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Muscular / Tórax',
    difficulty: 'medium',
    relatedStructureId: 'musculo_diafragma',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-02',
    stats: { totalAttempts: 980, successRatePercent: 68 }
  },
  {
    id: 'q3',
    statement: 'Na anatomia topográfica renal, qual estrutura vascular passa ventralmente à aorta abdominal e sob a artéria mesentérica superior, podendo sofrer compressão extrínseca?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Veia renal direita.' },
      { id: 'b', text: 'Veia renal esquerda.' },
      { id: 'c', text: 'Veia gonadal direita.' },
      { id: 'd', text: 'Veia porta.' }
    ],
    correctOptionId: 'b',
    explanation: 'A veia renal esquerda tem um trajeto transversal mais longo cruzando a face anterior da aorta abdominal logo abaixo da emergência da artéria mesentérica superior (pinça aortomesentérica), configurando a Síndrome de Nutcracker.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Urinário',
    difficulty: 'hard',
    relatedStructureId: 'rim_esquerdo',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-03',
    stats: { totalAttempts: 710, successRatePercent: 54 }
  },
  {
    id: 'q4',
    statement: 'Qual dos seguintes ossos NÃO faz parte da fileira proximal dos ossos do carpo?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Escafóide.' },
      { id: 'b', text: 'Semilunar.' },
      { id: 'c', text: 'Trapézio.' },
      { id: 'd', text: 'Piramidal.' }
    ],
    correctOptionId: 'c',
    explanation: 'A fileira proximal do carpo é composta por: escafóide, semilunar, piramidal e pisiforme. O trapézio pertence à fileira distal (trapézio, trapezoide, capitato e hamato).',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Esquelético',
    difficulty: 'medium',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-04',
    stats: { totalAttempts: 1250, successRatePercent: 74 }
  },
  {
    id: 'q5',
    statement: 'O sinal clínico do esfregaço de sangue periférico caracterizado por hemácias fragmentadas em formato de elmo ou cunha (esquizócitos) indica tipicamente:',
    type: 'clinical_case',
    options: [
      { id: 'a', text: 'Anemia megaloblástica por carência de cobalamina.' },
      { id: 'b', text: 'Hemólise mecânica ou microangiopatia trombótica.' },
      { id: 'c', text: 'Talassemia beta minor.' },
      { id: 'd', text: 'Deficiência congênita de G6PD sem crise oxidativa.' }
    ],
    correctOptionId: 'b',
    explanation: 'Os esquizócitos representam hemácias seccionadas mecanicamente ao colidirem com redes intravasculares de fibrina (como na Púrpura Trombocitopênica Trombótica e CIVD) ou por próteses valvares cardíacas estenóticas.',
    discipline: 'Hematologia',
    theme: 'Morfologia Eritrocitária',
    difficulty: 'hard',
    reviewerName: 'Profa. Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-05',
    stats: { totalAttempts: 890, successRatePercent: 61 }
  },
  {
    id: 'q6',
    statement: 'Qual estrutura é responsável pela produção do humor aquoso que circula na câmara anterior e posterior do bulbo do olho?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Glândula lacrimal principal.' },
      { id: 'b', text: 'Processos ciliares do corpo ciliar.' },
      { id: 'c', text: 'Canal de Schlemm.' },
      { id: 'd', text: 'Epitélio pigmentar da retina.' }
    ],
    correctOptionId: 'b',
    explanation: 'O humor aquoso é ativamente secretado pelos processos ciliares do corpo ciliar na câmara posterior, flui através da pupila para a câmara anterior e é drenado na malha trabecular para o canal de Schlemm.',
    discipline: 'Anatomia Humana',
    theme: 'Órgãos dos Sentidos / Olho',
    difficulty: 'medium',
    relatedStructureId: 'globo_ocular',
    reviewerName: 'Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-06',
    stats: { totalAttempts: 950, successRatePercent: 71 }
  },
  {
    id: 'q7',
    statement: 'A artéria cística, responsável pela irrigação da vesícula biliar, é comumente ramo de qual vaso no trígono cisto-hepático de Calot?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Artéria hepática direita.' },
      { id: 'b', text: 'Artéria gastroduodenal.' },
      { id: 'c', text: 'Artéria gástrica direita.' },
      { id: 'd', text: 'Artéria esplênica.' }
    ],
    correctOptionId: 'a',
    explanation: 'Na anatomia biliar clássica (cerca de 75-80% dos casos), a artéria cística origina-se da artéria hepática direita no interior do trígono de Calot (delimitado pelo ducto cístico, ducto hepático comum e borda hepática).',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Digestório',
    difficulty: 'medium',
    relatedStructureId: 'vesicula_biliar',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-07',
    stats: { totalAttempts: 820, successRatePercent: 65 }
  },
  {
    id: 'q8',
    statement: 'Sobre as células de Kupffer presentes nos sinusoides hepáticos, assinale a afirmativa correta:',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'São macrófagos fixos derivados de monócitos que participam da fagocitose de antígenos e debris.' },
      { id: 'b', text: 'São as principais células produtoras de albumina plasmática.' },
      { id: 'c', text: 'Armazenam vitamina A no espaço perisinusoidal de Disse.' },
      { id: 'd', text: 'São células epiteliais biliares colangiocíticas.' }
    ],
    correctOptionId: 'a',
    explanation: 'As células de Kupffer são macrófagos residentes localizados na luz dos sinusoides hepáticos, essenciais para a depuração de endotoxinas intestinais e remoção de hemácias senescentes.',
    discipline: 'Histologia & Biomedicina',
    theme: 'Fígado e Imunologia',
    difficulty: 'medium',
    relatedStructureId: 'figado_lobos',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-08',
    stats: { totalAttempts: 1100, successRatePercent: 78 }
  },
  {
    id: 'q9',
    statement: 'Qual o nervo craniano que emerge da face dorsal do tronco encefálico e inerva o músculo oblíquo superior do olho?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Nervo Oculomotor (NC III).' },
      { id: 'b', text: 'Nervo Troclear (NC IV).' },
      { id: 'c', text: 'Nervo Abducente (NC VI).' },
      { id: 'd', text: 'Nervo Trigêmeo (NC V).' }
    ],
    correctOptionId: 'b',
    explanation: 'O nervo troclear (NC IV) é o único nervo craniano que tem sua origem aparente na face dorsal do tronco encefálico (abaixo dos colículos inferiores) e inerva exclusivamente o músculo oblíquo superior.',
    discipline: 'Neuroanatomia',
    theme: 'Nervos Cranianos',
    difficulty: 'hard',
    reviewerName: 'Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-09',
    stats: { totalAttempts: 640, successRatePercent: 52 }
  },
  {
    id: 'q10',
    statement: 'Em um hemograma de paciente febril, a identificação de neutrófilos com granulações tóxicas grosseiras e corpúsculos de Döhle sugere:',
    type: 'clinical_case',
    options: [
      { id: 'a', text: 'Leucemia Linfoide Crônica.' },
      { id: 'b', text: 'Resposta inflamatória/infecciosa bacteriana aguda grave.' },
      { id: 'c', text: 'Anemia ferropriva pura.' },
      { id: 'd', text: 'Trombocitemia essencial.' }
    ],
    correctOptionId: 'b',
    explanation: 'As granulações tóxicas (grânulos azurófilos hipertrofiados e persistentes) e corpúsculos de Döhle (restos lamelares de retículo endoplasmático rugoso) traduzem maturação acelerada da medula em resposta a citocinas inflamatórias (IL-1, TNF-alfa).',
    discipline: 'Hematologia',
    theme: 'Leucograma',
    difficulty: 'medium',
    reviewerName: 'Profa. Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-10',
    stats: { totalAttempts: 840, successRatePercent: 73 }
  },
  {
    id: 'q11',
    statement: 'Qual é o principal músculo supinador do antebraço humano quando o cotovelo encontra-se em flexão de 90°?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Músculo braquial.' },
      { id: 'b', text: 'Músculo pronador redondo.' },
      { id: 'c', text: 'Músculo bíceps braquial.' },
      { id: 'd', text: 'Músculo tríceps braquial.' }
    ],
    correctOptionId: 'c',
    explanation: 'O músculo bíceps braquial, devido à inserção distal de seu tendão na tuberosidade do rádio, exerce momento de força máximo para supinação quando a articulação do cotovelo está flexionada em 90 graus.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Muscular / Membro Superior',
    difficulty: 'easy',
    relatedStructureId: 'musculo_biceps_braquial',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-11',
    stats: { totalAttempts: 1300, successRatePercent: 86 }
  },
  {
    id: 'q12',
    statement: 'A zona da glândula prostática onde se originam aproximadamente 70% a 80% dos adenocarcinomas de próstata é a:',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Zona periférica.' },
      { id: 'b', text: 'Zona de transição.' },
      { id: 'c', text: 'Zona central.' },
      { id: 'd', text: 'Estroma fibromuscular anterior.' }
    ],
    correctOptionId: 'a',
    explanation: 'Segundo o zoneamento anatômico de McNeal, a zona periférica (que constitui a maior porção posterior e lateral da glândula) é o sítio de cerca de 75% dos carcinomas, permitindo sua detecção por palpação no exame de toque retal.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Reprodutor Masculino',
    difficulty: 'hard',
    relatedStructureId: 'prostata',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-12',
    stats: { totalAttempts: 790, successRatePercent: 58 }
  },
  {
    id: 'q13',
    statement: 'Qual ligamento do complexo articular do joelho tem como função mecânica primária resistir à translação anterior excessiva da tíbia em relação ao fêmur?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Ligamento cruzado anterior (LCA).' },
      { id: 'b', text: 'Ligamento cruzado posterior (LCP).' },
      { id: 'c', text: 'Ligamento colateral fibular.' },
      { id: 'd', text: 'Ligamento poplíteo oblíquo.' }
    ],
    correctOptionId: 'a',
    explanation: 'O Ligamento Cruzado Anterior (LCA) insere-se na área intercondilar anterior da tíbia e impede a gaveta anterior (deslocamento anterior excessivo da tíbia sob o fêmur) e rotações patológicas.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Articular',
    difficulty: 'easy',
    relatedStructureId: 'articulacao_joelho',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-13',
    stats: { totalAttempts: 1510, successRatePercent: 88 }
  },
  {
    id: 'q14',
    statement: 'O hormônio eritropoietina (EPO), regulador primordial da hematopoiese da linhagem vermelha, é sintetizado predominantemente por quais células e órgão no indivíduo adulto?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Células foliculares da tireoide.' },
      { id: 'b', text: 'Fibroblastos peritubulares do córtex renal em resposta à hipóxia tecidual.' },
      { id: 'c', text: 'Cardiomiócitos atriais em resposta a estiramento volêmico.' },
      { id: 'd', text: 'Células beta das ilhotas pancreáticas.' }
    ],
    correctOptionId: 'b',
    explanation: 'Aproximadamente 90% da eritropoietina no adulto é produzida por células intersticiais fibroblastóides peritubulares no córtex e medula externa renal, através da ativação do fator induzido por hipóxia (HIF-1alfa).',
    discipline: 'Fisiologia & Biomedicina',
    theme: 'Hematologia e Função Renal',
    difficulty: 'medium',
    relatedStructureId: 'rim_esquerdo',
    reviewerName: 'Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-14',
    stats: { totalAttempts: 1020, successRatePercent: 77 }
  },
  {
    id: 'q15',
    statement: 'Qual dos seguintes tipos celulares do parênquima pulmonar é responsável pela síntese e secreção do surfactante dipalmitoilfosfatidilcolina (DPPC), reduzindo a tensão superficial alveolar?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Pneumócitos tipo I.' },
      { id: 'b', text: 'Pneumócitos tipo II.' },
      { id: 'c', text: 'Macrófagos alveolares.' },
      { id: 'd', text: 'Células caliciformes.' }
    ],
    correctOptionId: 'b',
    explanation: 'Os pneumócitos tipo II (células septais cubóides com corpos lamelares) sintetizam o surfactante pulmonar, prevenindo o colapso dos alvéolos ao final da expiração (atelectasia).',
    discipline: 'Histologia & Anatomia',
    theme: 'Sistema Respiratório',
    difficulty: 'easy',
    relatedStructureId: 'pulmao_direito',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-15',
    stats: { totalAttempts: 1390, successRatePercent: 84 }
  },
  {
    id: 'q16',
    statement: 'A flexura duodenojejunal é suspensa e delimitada anatomicamente na cavidade peritoneal por qual estrutura tendínea?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Ligamento falciforme.' },
      { id: 'b', text: 'Ligamento suspensor do duodeno (Músculo/Ligamento de Treitz).' },
      { id: 'c', text: 'Ligamento gastroesplênico.' },
      { id: 'd', text: 'Ligamento inguinal de Poupart.' }
    ],
    correctOptionId: 'b',
    explanation: 'O ligamento de Treitz (músculo suspensor do duodeno) fixa a flexura duodenojejunal ao pilar direito do diafragma e marca formalmente a divisão entre o trato gastrointestinal superior e inferior (hemorragia digestiva alta vs baixa).',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Digestório',
    difficulty: 'medium',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-01',
    stats: { totalAttempts: 880, successRatePercent: 67 }
  },
  {
    id: 'q17',
    statement: 'No esqueleto craniano, o forame redondo, o forame oval e o forame espinhoso situam-se na asa maior de qual osso da base do crânio?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Osso etmóide.' },
      { id: 'b', text: 'Osso esfenóide.' },
      { id: 'c', text: 'Osso temporal.' },
      { id: 'd', text: 'Osso occipital.' }
    ],
    correctOptionId: 'b',
    explanation: 'A asa maior do osso esfenóide abriga: forame redondo (passagem do nervo maxilar NC V2), forame oval (nervo mandibular NC V3) e forame espinhoso (artéria meníngea média).',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Esquelético / Cabeça e Pescoço',
    difficulty: 'hard',
    reviewerName: 'Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-02',
    stats: { totalAttempts: 670, successRatePercent: 49 }
  },
  {
    id: 'q18',
    statement: 'Qual anticoagulante padrão presente nos tubos de coleta de sangue a vácuo com tampa roxa atua quelando íons cálcio (Ca2+) para conservação dos elementos figurados?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Heparina de lítio.' },
      { id: 'b', text: 'Fluoreto de sódio.' },
      { id: 'c', text: 'EDTA dipotássico / tripotássico (K2EDTA / K3EDTA).' },
      { id: 'd', text: 'Citrato de sódio a 3,2%.' }
    ],
    correctOptionId: 'c',
    explanation: 'O EDTA quelante de cálcio é o anticoagulante padrão-ouro para o hemograma automatizado e confecção de esfregaços celulares, pois preserva fielmente a morfologia leucocitária e eritrocitária.',
    discipline: 'Biomedicina Laboratorial',
    theme: 'Fase Pré-Analítica',
    difficulty: 'easy',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-03',
    stats: { totalAttempts: 1650, successRatePercent: 94 }
  },
  {
    id: 'q19',
    statement: 'O espaço subaracnóideo, por onde circula o líquido cerebroespinal (líquor) e onde é realizada a punção lombar diagnóstica, situa-se entre quais folhetos meníngeos?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Dura-máter e periósteo vertebral.' },
      { id: 'b', text: 'Dura-máter e aracnóide.' },
      { id: 'c', text: 'Aracnóide e pia-máter.' },
      { id: 'd', text: 'Pia-máter e substância branca medular.' }
    ],
    correctOptionId: 'c',
    explanation: 'O espaço subaracnóideo fica localizado entre a lâmina interna da aracnóide e a pia-máter que recobre intimamente o tecido nervoso, contendo trabéculas aracnóideas e líquor em livre circulação.',
    discipline: 'Neuroanatomia',
    theme: 'Meninges e LCR',
    difficulty: 'easy',
    relatedStructureId: 'cerebro_telencefalo',
    reviewerName: 'Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-04',
    stats: { totalAttempts: 1320, successRatePercent: 81 }
  },
  {
    id: 'q20',
    statement: 'Qual é o exame laboratorial de triagem neonatal que quantifica os níveis de Tripsina Imunorreativa (IRT) para rastreamento de fibrose cística?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Teste de Guthrie (Teste do Pezinho).' },
      { id: 'b', text: 'Cariótipo com banda G.' },
      { id: 'c', text: 'Eletroforese de hemoglobina.' },
      { id: 'd', text: 'Coombs direto.' }
    ],
    correctOptionId: 'a',
    explanation: 'No Teste do Pezinho ampliado, a dosagem de Tripsina Imunorreativa (IRT) em sangue seco de papel de filtro é o teste primário de triagem para fibrose cística, doença autossômica recessiva do gene CFTR.',
    discipline: 'Biomedicina / Bioquímica Clínica',
    theme: 'Triagem Neonatal',
    difficulty: 'medium',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-05',
    stats: { totalAttempts: 910, successRatePercent: 76 }
  },
  {
    id: 'q21',
    statement: 'Em um corte transversal do tórax na altura da vértebra T4, o plano transverso divide o mediastino em superior e inferior e coincide com qual marco ósseo anterior?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Incisura jugular.' },
      { id: 'b', text: 'Ângulo esternal (Ângulo de Louis).' },
      { id: 'c', text: 'Processo xifoide.' },
      { id: 'd', text: 'Clavícula direita.' }
    ],
    correctOptionId: 'b',
    explanation: 'O ângulo do esterno (de Louis), junção manubrioesternal, localiza-se na altura do disco intervertebral T4-T5 e marca a bifurcação traqueal (carina), início e fim do arco da aorta.',
    discipline: 'Anatomia Humana',
    theme: 'Tórax e Mediastino',
    difficulty: 'easy',
    relatedStructureId: 'arteria_aorta_toracica',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-06',
    stats: { totalAttempts: 1400, successRatePercent: 85 }
  },
  {
    id: 'q22',
    statement: 'Qual é o principal marcador enzimático sérico que apresenta maior especificidade para lesão do parênquima exócrino pancreático na pancreatite aguda?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Amilase total.' },
      { id: 'b', text: 'Lipase sérica.' },
      { id: 'c', text: 'Lactato Desidrogenase (LDH).' },
      { id: 'd', text: 'Fosfatase Alcalina.' }
    ],
    correctOptionId: 'b',
    explanation: 'A lipase sérica apresenta maior sensibilidade (85-100%) e consideravelmente maior especificidade que a amilase para pancreatite aguda, permanecendo elevada por mais tempo (7 a 14 dias).',
    discipline: 'Bioquímica Clínica',
    theme: 'Enzimologia Diagnóstica',
    difficulty: 'medium',
    relatedStructureId: 'pancreas',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-07',
    stats: { totalAttempts: 1140, successRatePercent: 79 }
  },
  {
    id: 'q23',
    statement: 'O músculo iliopsoas, principal flexor potente da articulação do quadril, insere-se distalmente em qual acidente ósseo do fêmur?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Trocanter maior.' },
      { id: 'b', text: 'Trocanter menor.' },
      { id: 'c', text: 'Linha áspera intermediária.' },
      { id: 'd', text: 'Tubérculo dos adutores.' }
    ],
    correctOptionId: 'b',
    explanation: 'Os tendões do psoas maior e ilíaco unem-se e fixam-se no trocanter menor da face posteromedial da epífise proximal do fêmur.',
    discipline: 'Anatomia Humana',
    theme: 'Sistema Muscular / Membro Inferior',
    difficulty: 'medium',
    relatedStructureId: 'osso_femur',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-08',
    stats: { totalAttempts: 950, successRatePercent: 66 }
  },
  {
    id: 'q24',
    statement: 'A anemia ferropriva clássica manifesta-se nos índices hematimétricos laboratoriais tipicamente como:',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Macrocítica e hipercrômica com RDW normal.' },
      { id: 'b', text: 'Microcítica e hipocrômica com RDW elevado.' },
      { id: 'c', text: 'Normocítica e normocrômica com reticulocitose intensa.' },
      { id: 'd', text: 'Microcítica com ferritina sérica acentuadamente aumentada.' }
    ],
    correctOptionId: 'b',
    explanation: 'A depleção de ferro reduz a síntese de cadeias heme, levando a hemácias menores (VCM < 80 fL), pálidas (HCM < 27 pg) e com elevada anisocitose (RDW > 15%).',
    discipline: 'Hematologia',
    theme: 'Anemias Carenciais',
    difficulty: 'easy',
    reviewerName: 'Profa. Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-09',
    stats: { totalAttempts: 1720, successRatePercent: 91 }
  },
  {
    id: 'q25',
    statement: 'O teste da catalase é uma reação bioquímica clássica em microbiologia utilizada rotineiramente para diferenciar:',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Staphylococcus spp. (catalase positiva) de Streptococcus spp. (catalase negativa).' },
      { id: 'b', text: 'Escherichia coli de Pseudomonas aeruginosa.' },
      { id: 'c', text: 'Bactérias Gram-positivas de Gram-negativas.' },
      { id: 'd', text: 'Fungos filamentosos de leveduras.' }
    ],
    correctOptionId: 'a',
    explanation: 'O teste da catalase (que degrada o peróxido de hidrogênio H2O2 em água e bolhas de oxigênio gasoso) é a prova bioquímica primária para diferenciar estafilococos (positivos) de estreptococos e enterococos (negativos).',
    discipline: 'Microbiologia Clínica',
    theme: 'Identificação Bacteriana',
    difficulty: 'easy',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-10',
    stats: { totalAttempts: 1580, successRatePercent: 89 }
  },
  {
    id: 'q26',
    statement: 'Qual é o tipo de epitélio que reveste a mucosa da traqueia e dos brônquios principais humanos?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Epitélio simples pavimentoso.' },
      { id: 'b', text: 'Epitélio estratificado pavimentoso queratinizado.' },
      { id: 'c', text: 'Epitélio pseudoestratificado colunar ciliado com células caliciformes.' },
      { id: 'd', text: 'Epitélio de transição (urotélio).' }
    ],
    correctOptionId: 'c',
    explanation: 'O epitélio respiratório clássico é o pseudoestratificado colunar ciliado com células caliciformes produtoras de muco, essencial para o clearance mucociliar.',
    discipline: 'Histologia Humana',
    theme: 'Aparelho Respiratório',
    difficulty: 'easy',
    relatedStructureId: 'traqueia',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-11',
    stats: { totalAttempts: 1490, successRatePercent: 90 }
  },
  {
    id: 'q27',
    statement: 'A área de Broca, relacionada com a expressão motora da fala e linguagem articulada, localiza-se habitualmente em qual lobo cerebral?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Lobo occipital nos lábios do sulco calcarino.' },
      { id: 'b', text: 'Lobo frontal no giro frontal inferior (partes triangular e opercular).' },
      { id: 'c', text: 'Lobo temporal no giro temporal superior.' },
      { id: 'd', text: 'Lobo parietal no giro pós-central.' }
    ],
    correctOptionId: 'b',
    explanation: 'A área de Broca (áreas 44 e 45 de Brodmann) situa-se no giro frontal inferior do hemisfério dominante (esquerdo na imensa maioria), responsável pelo planejamento motor da fala.',
    discipline: 'Neuroanatomia',
    theme: 'Córtex Cerebral',
    difficulty: 'medium',
    relatedStructureId: 'cerebro_telencefalo',
    reviewerName: 'Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-12',
    stats: { totalAttempts: 1120, successRatePercent: 75 }
  },
  {
    id: 'q28',
    statement: 'A glândula tireoide origina-se embriologicamente a partir do assoalho da faringe primitiva, mantendo como vestígio anatômico na língua adulta o:',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Forame cego da língua.' },
      { id: 'b', text: 'Sulco terminal lingual.' },
      { id: 'c', text: 'Frênulo lingual.' },
      { id: 'd', text: 'Ducto de Wharton.' }
    ],
    correctOptionId: 'a',
    explanation: 'O forame cego no ápice do "V" lingual é a cicatriz do ponto de origem do ducto tireoglosso embrionário, pelo qual a glândula tireoide migra caudalmente até sua posição pré-traqueal definitiva.',
    discipline: 'Embriologia e Anatomia',
    theme: 'Sistema Endócrino',
    difficulty: 'hard',
    relatedStructureId: 'glandula_tireoide',
    reviewerName: 'Dra. Helena Matos (CRBM 1892)',
    reviewedDate: '2026-03-13',
    stats: { totalAttempts: 740, successRatePercent: 57 }
  },
  {
    id: 'q29',
    statement: 'Qual das seguintes alterações imunológicas é patognomônica da Doença Hemolítica Perinatal por incompatibilidade Rh (eritroblastose fetal)?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Presença de anticorpos maternos da classe IgM que atravessam livremente a barreira placentária.' },
      { id: 'b', text: 'Teste de Coombs Direto (TAD) positivo nas hemácias do recém-nascido por anticorpos anti-D maternos da classe IgG.' },
      { id: 'c', text: 'Plaquetopenia isolada com tempo de tromboplastina parcial ativado prolongado.' },
      { id: 'd', text: 'Hiperbilirrubinemia direta (conjugada) pura sem anemia.' }
    ],
    correctOptionId: 'b',
    explanation: 'Na aloimunização Rh, anticorpos IgG anti-D atravessam a placenta e recobrem as hemácias Rh positivas fetais, detectados pelo teste de Coombs direto (anticorpos anti-globulina humana).',
    discipline: 'Imuno-hematologia',
    theme: 'Doença Hemolítica do Neonato',
    difficulty: 'medium',
    reviewerName: 'Profa. Dra. Camila Albuquerque (CRBM 5120)',
    reviewedDate: '2026-03-14',
    stats: { totalAttempts: 990, successRatePercent: 72 }
  },
  {
    id: 'q30',
    statement: 'Na barreira de filtração glomerular renal, qual estrutura celular possui prolongamentos primários e secundários (pedicelos) que formam as fendas de filtração com diafragma de nefrina?',
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'Células mesangiais intraglomerulares.' },
      { id: 'b', text: 'Células endoteliais fenestradas.' },
      { id: 'c', text: 'Podócitos (folheto visceral da cápsula de Bowman).' },
      { id: 'd', text: 'Células principais do ducto coletor.' }
    ],
    correctOptionId: 'c',
    explanation: 'Os podócitos recobrem externamente a membrana basal glomerular com seus pedicelos interdigitados, formando fendas com diafragma de nefrina que impedem a passagem de proteínas de médio e alto peso molecular (como a albumina).',
    discipline: 'Histologia & Nefrologia',
    theme: 'Glomérulo Renal',
    difficulty: 'medium',
    relatedStructureId: 'rim_esquerdo',
    reviewerName: 'Prof. Dr. Arnaldo Silva (CRBM 0451)',
    reviewedDate: '2026-03-15',
    stats: { totalAttempts: 1040, successRatePercent: 75 }
  }
];

export const SIMULATED_EXAMS: SimulatedExam[] = [
  {
    id: 'sim_enade_biomedicina',
    title: 'Simulado Geral Enade / Biomédico de Excelência',
    description: 'Prova simulada multidisciplinar contendo questões comentadas de Anatomia, Hematologia, Fisiologia e Análises Clínicas.',
    discipline: 'Geral / Multidisciplinar',
    questionIds: ['q1', 'q2', 'q3', 'q5', 'q8', 'q10', 'q12', 'q14', 'q18', 'q22', 'q24', 'q29'],
    timeLimitMinutes: 45,
    passingScorePercent: 70
  },
  {
    id: 'sim_cardio_respiratorio',
    title: 'Simulado Integrado: Cardiorrespiratório e Tórax',
    description: 'Avaliação focada na anatomia topográfica e clínica do mediastino, pulmões, coração e diafragma.',
    discipline: 'Morfofisiologia Torácica',
    questionIds: ['q1', 'q2', 'q11', 'q15', 'q21', 'q26'],
    timeLimitMinutes: 25,
    passingScorePercent: 75
  },
  {
    id: 'sim_neuro_sensorial',
    title: 'Simulado de Neuroanatomia, Sentidos e Nervos Cranianos',
    description: 'Questões aprofundadas sobre tronco encefálico, nervos cranianos, órgãos da visão e meninges.',
    discipline: 'Neurociências',
    questionIds: ['q6', 'q9', 'q17', 'q19', 'q27'],
    timeLimitMinutes: 20,
    passingScorePercent: 70
  }
];
