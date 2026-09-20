import { AnatomicalStructure } from '../types';

export const ANATOMICAL_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'coracao_miocardio',
    ptName: 'Miocárdio',
    latinName: 'Myocardium',
    englishName: 'Myocardium',
    synonyms: ['Músculo Cardíaco', 'Parede Muscular do Coração'],
    systemId: 'cardiovascular',
    region: 'torax',
    laterality: 'medial',
    description: 'Camada muscular espessa média da parede cardíaca, composta por cardiomiócitos estriados involuntários unidos por discos intercalares com junções comunicantes (gap junctions).',
    location: 'Mediastino médio, entre o endocárdio internamente e o epicárdio (folheto visceral do pericárdio seroso) externamente.',
    shape: 'Cone oco assimétrico com espessura ventricular esquerda três vezes superior à ventricular direita.',
    dimensions: 'Espessura média de 8-12 mm no ventrículo esquerdo e 3-5 mm no ventrículo direito.',
    function: 'Contração sincrônica bifásica (sístole e diástole) capaz de gerar gradiente de pressão ejetando volume sistólico de cerca de 70 mL por batimento no leito sistêmico e pulmonar.',
    relations: 'Anteriormente relacionado ao esterno e cartilagens costais (3ª a 6ª); posteriormente com esôfago e aorta torácica descendente; inferiormente repousa sobre o centro tendíneo do diafragma.',
    vascularization: {
      arterial: 'Artérias coronárias direita (ACD) e esquerda (ACE) que emergem dos seios aórticos de Valsalva.',
      venous: 'Veia cardíaca magna, média e parva drenando no seio coronário, que desemboca no átrio direito.',
      lymphatic: 'Troncos coletores linfáticos subepicárdicos que tributam nos linfonodos traqueobrônquicos inferiores.'
    },
    innervation: 'Plexo cardíaco superficial e profundo: fibras simpáticas pós-ganglionares (cronotropismo/inotropismo positivo) e parassimpáticas pelo nervo vago (NC X, cronotropismo negativo).',
    neighboringStructures: ['Pericárdio parietal e fibroso', 'Tronco pulmonar', 'Aorta ascendente', 'Esôfago', 'Pulmões direito e esquerdo'],
    variations: 'Dominância coronariana direita presente em 70-80% dos indivíduos; artéria circunflexa dominante em 10-12%; codominância em cerca de 10%.',
    clinicalApplications: 'Sítio de isquemia transmural, infarto agudo do miocárdio, miocardiopatia hipertrófica ou dilatada. Ponto de ausculta dos focos mitral e aórtico.',
    relatedPathologies: ['Infarto Agudo do Miocárdio (IAM)', 'Miocardite viral/autoimune', 'Insuficiência Cardíaca Congestiva (ICC)', 'Arritmias ventriculares'],
    evaluationExams: ['Eletrocardiograma (ECG)', 'Ecocardiograma Transtorácico com Doppler', 'Ressonância Magnética Cardíaca', 'Troponina I e T ultrassensíveis', 'CK-MB massa'],
    model3DMapping: {
      meshId: 'ORGAN_Heart_Myocardium',
      category: 'organ',
      position: [0, 1.4, 0.2]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, PhD em Ciências Morfológicas (CRBM 0451)',
      reviewerTitle: 'Professor Titular de Anatomia Humana',
      revisionDate: '2026-03-12',
      references: [
        'Terminologia Anatomica (IFAA, 2ª ed., 2019 - Código A12.1.00.003)',
        'Moore, K. L. et al. Anatomia Orientada para a Clínica. 8ª ed. Guanabara Koogan, 2019.',
        'Guyton, A. C. & Hall, J. E. Tratado de Fisiologia Médica. 14ª ed. Elsevier, 2021.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'pulmao_direito',
    ptName: 'Pulmão Direito',
    latinName: 'Pulmo dexter',
    englishName: 'Right Lung',
    synonyms: ['Pulmão Trilobado'],
    systemId: 'respiratorio',
    region: 'torax',
    laterality: 'direito',
    description: 'Órgão essencial da hematose pulmonar, dividido em três lobos (superior, médio e inferior) pelas fissuras horizontal e oblíqua, apresentando volume maior que o esquerdo.',
    location: 'Hemitórax direito, ocupando a cavidade pleural direita lateralmente ao mediastino.',
    shape: 'Cônico, com ápice projetado 2-3 cm acima da 1ª costela, base diafragmática côncava e três faces (costal, mediastinal e diafragmática).',
    dimensions: 'Peso médio de 625 g; capacidade volumétrica média de 3000 a 3500 mL em inspiração máxima.',
    function: 'Troca gasosa alvéolo-capilar (O2 por CO2), termorregulação, barreira imunológica de macrófagos alveolares e conversão de angiotensina I em angiotensina II pela ECA endotelial.',
    relations: 'Face mediastinal moldada pela veia cava superior, veia cava inferior, veia ázigos e esôfago; base apoiada sobre a cúpula hemidiafragmática direita sobreposta ao lobo direito do fígado.',
    vascularization: {
      arterial: 'Artéria pulmonar direita (sangue venoso funcional) e artérias brônquicas direitas (nutrição do estroma, ramos da 3ª artéria intercostal posterior).',
      venous: 'Veias pulmonares direitas superior e inferior (drenam sangue oxigenado para o átrio esquerdo).',
      lymphatic: 'Linfonodos broncopulmonares (hilares) tributários dos linfonodos traqueobrônquicos inferiores e paratraqueais direitos.'
    },
    innervation: 'Plexo pulmonar anterior e posterior com fibras parassimpáticas do nervo vago (broncoconstrição e vasodilatação) e simpáticas do tronco simpático T2-T5 (broncodilatação).',
    neighboringStructures: ['Pleura visceral e parietal', 'Diafragma', 'Fígado', 'Veia cava superior', 'Arco da veia ázigos'],
    variations: 'Presença do lobo da veia ázigos em cerca de 1% dos indivíduos devido à migração anômala da veia ázigos durante o desenvolvimento embrionário.',
    clinicalApplications: 'Local frequente de pneumonia lobar, atelectasia por aspiração de corpo estranho (devido ao brônquio principal direito mais retilíneo e calibroso) e tromboembolismo pulmonar.',
    relatedPathologies: ['Tromboembolismo Pulmonar (TEP)', 'Pneumonia Adquirida na Comunidade', 'Neoplasia Broncogênica', 'DPOC'],
    evaluationExams: ['Radiografia de Tórax em PA e Perfil', 'Tomografia Computadorizada de Alta Resolução (TCAR)', 'Gasometria Arterial', 'Espirometria'],
    model3DMapping: {
      meshId: 'ORGAN_Lung_Right',
      category: 'organ',
      position: [0.6, 1.45, 0.1]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Profa. Dra. Helena Matos, Biomédica e Docente (CRBM 1892)',
      reviewerTitle: 'Especialista em Morfofisiologia Respiratória',
      revisionDate: '2026-02-18',
      references: [
        'Terminologia Anatomica (IFAA - Código A06.5.01.002)',
        'Netter, F. H. Atlas de Anatomia Humana. 7ª ed. Elsevier, 2019.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'rim_esquerdo',
    ptName: 'Rim Esquerdo',
    latinName: 'Ren sinister',
    englishName: 'Left Kidney',
    synonyms: ['Órgão Renal Esquerdo'],
    systemId: 'urinario',
    region: 'abdome',
    laterality: 'esquerdo',
    description: 'Órgão retroperitoneal em formato de feijão, responsável pela ultrafiltração plasmática, síntese de renina, eritropoietina e ativação de calcitriol.',
    location: 'Espaço retroperitoneal paravertebral esquerdo, estendendo-se entre as vértebras T11 e L2 (ligeiramente mais alto que o rim direito).',
    shape: 'Feijão bicôncavo com polo superior, polo inferior, margem medial com hilo renal e margem lateral convexa.',
    dimensions: 'Comprimento: 10-12 cm; largura: 5-6 cm; espessura: 3 cm; peso aproximado: 135 a 150 g.',
    function: 'Excreção de escórias nitrogenadas (ureia, creatinina, ácido úrico), controle do balanço hídrico e eletrolítico (Na+, K+, Cl-, HCO3-), regulação da pressão arterial média via SRAA.',
    relations: 'Posteriormente repousa sobre a 11ª e 12ª costelas, músculo psoas maior, quadrado lombar e fáscia transversalis; anteriormente contíguo ao estômago, pâncreas, baço e flexura cólica esquerda.',
    vascularization: {
      arterial: 'Artéria renal esquerda (emerge diretamente da aorta abdominal no nível de L1/L2).',
      venous: 'Veia renal esquerda (cruza anteriormente à aorta abdominal e sob a artéria mesentérica superior para alcançar a VCI).',
      lymphatic: 'Linfonodos aórticos laterais (para-aórticos esquerdos).'
    },
    innervation: 'Plexo renal autonômico derivado do plexo celíaco e nervos esplâncnicos menor e imo.',
    neighboringStructures: ['Glândula suprarrenal esquerda', 'Baço', 'Cauda do pâncreas', 'Flexura cólica esquerda', 'Alças jejunais'],
    variations: 'Presença de artérias renais polares acessórias em até 25% dos indivíduos; duplicação pieloureteral incompleta.',
    clinicalApplications: 'Síndrome de Quebra-Nozes (compressão da veia renal esquerda pela pinça aortomesentérica causando hematúria e varicocele esquerda), pielonefrite, litíase renal.',
    relatedPathologies: ['Litíase Renal (Nefrolitíase)', 'Insuficiência Renal Aguda e Crônica', 'Carcinoma de Células Renais', 'Glomerulonefrites'],
    evaluationExams: ['Ureia e Creatinina Sérica com cálculo do eGFR', 'EAS / Sumário de Urina', 'Ultrassonografia Renal e Vias Urinárias', 'Urotomografia'],
    model3DMapping: {
      meshId: 'ORGAN_Kidney_Left',
      category: 'organ',
      position: [-0.4, 0.9, -0.2]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Professor Titular de Anatomia',
      revisionDate: '2026-03-01',
      references: [
        'Terminologia Anatomica (IFAA - Código A08.1.01.002)',
        'Standring, S. Gray’s Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. Elsevier, 2020.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'figado_lobos',
    ptName: 'Fígado',
    latinName: 'Hepar',
    englishName: 'Liver',
    synonyms: ['Glândula Hepática'],
    systemId: 'digestorio',
    region: 'abdome',
    laterality: 'bilateral',
    description: 'Maior glândula e víscera maciça do organismo humano, centro metabólico primário para gliconeogênese, síntese de albumina, lipoproteínas, fatores de coagulação e excreção biliar.',
    location: 'Hipocôndrio direito, epigástrio e estendendo-se parcialmente ao hipocôndrio esquerdo, protegido pela caixa torácica inferior.',
    shape: 'Cunha convexa anteriormente adaptada à cúpula diafragmática e achatada inferiormente com impressões viscerais gástrica, cólica e renal.',
    dimensions: 'Peso médio de 1,4 a 1,6 kg em adultos; diâmetro transverso aproximado de 20 a 25 cm.',
    function: 'Biotransformação de xenobióticos de fase I e II, ciclo da ureia, síntese de bile para emulsificação lipídica intestinal, estocagem de glicogênio e vitaminas lipossolúveis (A, D, E, K).',
    relations: 'Superiormente faceia o músculo diafragma através do ligamento falciforme; inferiormente faceia estômago, duodeno, vesícula biliar, rim direito e flexura cólica direita.',
    vascularization: {
      arterial: 'Artéria hepática própria (ramo da artéria hepática comum do tronco celíaco, 20-25% do fluxo total oxigenado).',
      venous: 'Veia porta do fígado (traz 75-80% do fluxo venoso rico em nutrientes absorvidos do trato digestório); drenagem venosa por três veias hepáticas na VCI.',
      lymphatic: 'Linfonodos hepáticos no omento menor, tributários dos linfonodos celíacos e frênicos.'
    },
    innervation: 'Plexo hepático derivado do plexo celíaco e ramos hepáticos do tronco vagal anterior.',
    neighboringStructures: ['Vesícula biliar', 'Veia cava inferior', 'Estômago', 'Bulbo duodenal', 'Diafragma'],
    variations: 'Segmentação hepática de Couinaud (8 segmentos independentes); lobo de Riedel (projeção anômala do lobo direito).',
    clinicalApplications: 'Hipertensão portal com circulação colateral (cabeça de medusa, varizes esofágicas), hepatites virais e esteato-hepatite não alcoólica (MASH), biópsia hepática.',
    relatedPathologies: ['Cirrose Hepática', 'Hepatites B e C', 'Esteatose Hepática', 'Carcinoma Hepatocelular'],
    evaluationExams: ['Enzimas hepáticas (ALT, AST, FA, GGT)', 'Bilirrubinas total e frações', 'Tempo de Protrombina (TP/INR)', 'Ultrassonografia de Abdome Total'],
    model3DMapping: {
      meshId: 'ORGAN_Liver',
      category: 'organ',
      position: [0.35, 1.05, 0.15]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Docente de Anatomia',
      revisionDate: '2026-03-05',
      references: [
        'Terminologia Anatomica (IFAA - Código A05.8.01.001)',
        'Devlin, T. M. Manual de Bioquímica com Correlações Clínicas. 7ª ed. Blucher, 2018.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'cerebro_telencefalo',
    ptName: 'Hemisférios Cerebrais (Telencéfalo)',
    latinName: 'Cerebrum (Telencephalon)',
    englishName: 'Cerebral Hemispheres',
    synonyms: ['Cérebro', 'Córtex Cerebral'],
    systemId: 'encefalo',
    region: 'cabeca_pescoco',
    laterality: 'bilateral',
    description: 'Componente rostral do encéfalo composto por substância cinzenta cortical (seis camadas histológicas no neocórtex), substância branca subcortical e núcleos da base.',
    location: 'Fossas cranianas anterior e média e sobre a tenda do cerebelo na fossa craniana posterior.',
    shape: 'Ovoide com fissura longitudinal do cérebro dividindo os hemisférios direito e esquerdo, interligados pelo corpo caloso.',
    dimensions: 'Volume médio de 1200 a 1400 cm³; contém aproximadamente 86 bilhões de neurônios.',
    function: 'Controle motor voluntário primário (giro pré-central), sensibilidade somestésica (giro pós-central), linguagem (áreas de Broca e Wernicke), cognição e memória executiva.',
    relations: 'Envolvido pelas meninges (pia-máter, aracnóide e dura-máter) e banhado pelo LCR no espaço subaracnóideo; repousa sobre a base óssea do crânio.',
    vascularization: {
      arterial: 'Círculo arterial do cérebro (Polígono de Willis): artérias cerebrais anterior, média e posterior comunicadas pelas a. comunicante anterior e posteriores.',
      venous: 'Seios durais da dura-máter (sagital superior, reto, transverso, sigmóide) drenando para as veias jugulares internas.',
      lymphatic: 'Sistema glinfático perivascular dependente de aquaporina-4 em astrócitos com drenagem para linfonodos cervicais profundos.'
    },
    innervation: 'Tecido parenquimatoso desprovido de nocicepção própria; dura-máter inervada pelo nervo trigêmeo (NC V) e ramos espinais cervicais superiores.',
    neighboringStructures: ['Ossos frontal, parietal, temporal e occipital', 'Corpo caloso', 'Ventrículos laterais', 'Cerebelo', 'Tronco encefálico'],
    variations: 'Padrão dos giros e sulcos secundários varia consideravelmente entre indivíduos; assimetria funcional com dominância hemisférica esquerda para linguagem em >90% dos destros.',
    clinicalApplications: 'Acidente Vascular Cerebral (AVC isquêmico e hemorrágico), traumatismo cranioencefálico, crises epilépticas, síndromes demenciais (Alzheimer).',
    relatedPathologies: ['AVC Isquêmico', 'Hemorragia Subaracnóidea', 'Doença de Alzheimer', 'Epilepsia Focal'],
    evaluationExams: ['Ressonância Magnética de Encéfalo (DWI/FLAIR)', 'Angiotomografia Cerebral', 'Eletroencefalograma (EEG)', 'Análise de LCR por Punção Lombar'],
    model3DMapping: {
      meshId: 'ORGAN_Brain',
      category: 'organ',
      position: [0, 2.5, 0.05]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Camila Albuquerque, CRBM 5120',
      reviewerTitle: 'Pesquisadora em Neurociências',
      revisionDate: '2026-03-10',
      references: [
        'Terminologia Anatomica (IFAA - Código A14.1.09.001)',
        'Kandel, E. R. et al. Princípios de Neurociências. 5ª ed. Artmed, 2014.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'osso_femur',
    ptName: 'Fêmur',
    latinName: 'Os femoris',
    englishName: 'Femur',
    synonyms: ['Osso da Coxa'],
    systemId: 'esqueletico',
    region: 'membro_inferior',
    laterality: 'bilateral',
    description: 'Osso longo mais resistente, pesado e extenso do esqueleto humano, transmitindo todo o peso do tronco e cíngulo pélvico para a tíbia.',
    location: 'Segmento da coxa, articulando-se proximalmente com o acetábulo do osso do quadril e distalmente com a tíbia e a patela.',
    shape: 'Tubular longo com diáfise cilíndrica arqueada anteriormente e duas epífises (proximal com cabeça, colo, trocanteres maior e menor; distal com côndilos lateral e medial).',
    dimensions: 'Comprimento médio de 45 a 48 cm em adultos; suporta forças de compressão axial superiores a 1000 kg.',
    function: 'Sustentação mecânica durante a marcha e ortostatismo; alavanca para os potentes músculos locomotores (quadríceps femoral, isquiotibiais, glúteos); canal medular fonte de medula óssea.',
    relations: 'Epífise proximal na cápsula da articulação do quadril; epífise distal na articulação do joelho; envolvido pelos compartimentos musculares anterior, medial e posterior da coxa.',
    vascularization: {
      arterial: 'Artérias circunflexas femorais medial e lateral (irrigação do colo e cabeça femoral); artéria nutrícia originada da 2ª artéria perfurante da artéria femoral profunda.',
      venous: 'Veias comitantes que drenam para a veia femoral profunda e veia femoral.',
      lymphatic: 'Linfáticos ósseos drenam para os linfonodos inguinais profundos e ilíacos externos.'
    },
    innervation: 'Inervação periosteal sensitiva pelo nervo femoral (anteriormente) e nervo ciático/obturatório.',
    muscularOriginInsertion: 'Origem de: vasto intermédio, vasto medial, vasto lateral. Inserção de: glúteo máximo, glúteo médio, iliopsoas, adutor magno, pectíneo.',
    neighboringStructures: ['Articulação coxofemoral', 'Articulação do joelho', 'Músculo reto femoral', 'Artéria femoral', 'Nervo ciático'],
    variations: 'Ângulo de inclinação colo-diafisário varia de 115° (coxa vara) a 140° (coxa valga); média normal no adulto é de 126°.',
    clinicalApplications: 'Fratura do colo do fêmur em idosos com osteoporose com risco iminente de necrose avascular da cabeça femoral; fraturas diafisárias com choque hipovolêmico por sangramento de até 1,5 L.',
    relatedPathologies: ['Fratura transtrocanteriana e de colo femoral', 'Osteonecrose da cabeça do fêmur', 'Osteossarcoma', 'Osteomielite'],
    evaluationExams: ['Radiografia de Pelve e Coxa em AP e Perfil', 'Densitometria Óssea (DEXA)', 'Ressonância Magnética do Quadril', 'Tomografia 3D'],
    model3DMapping: {
      meshId: 'BONE_Femur_Left',
      category: 'bone',
      position: [-0.35, -0.6, 0]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Docente de Anatomia Humana',
      revisionDate: '2026-03-02',
      references: [
        'Terminologia Anatomica (IFAA - Código A02.5.04.001)',
        'Kapandji, A. I. Fisiologia Articular. 6ª ed. Guanabara Koogan, 2008.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'musculo_diafragma',
    ptName: 'Músculo Diafragma',
    latinName: 'Musculus diaphragma',
    englishName: 'Diaphragm Muscle',
    synonyms: ['Septo Toracoabdominal'],
    systemId: 'muscular',
    region: 'torax',
    laterality: 'medial',
    description: 'Músculo estriado esquelético delgado e musculotendíneo em formato de cúpula dupla, constituindo a principal bomba motora da ventilação pulmonar e separando o tórax do abdome.',
    location: 'Assoalho da cavidade torácica e teto da cavidade abdominal, fixado na abertura inferior da caixa torácica.',
    shape: 'Duas cúpulas (direita mais alta no 5º espaço intercostal, esquerda no 6º espaço intercostal) convergindo para um centro tendíneo aponeurótico em forma de trevo.',
    dimensions: 'Espessura muscular de 3 a 5 mm; área de superfície de aproximadamente 900 cm².',
    function: 'Inspiração primária: ao contrair-se, sua cúpula desce de 1,5 a 7 cm aumentando o diâmetro vertical torácico e gerando pressão negativa intrapleural de até -8 mmHg, admitindo ar.',
    relations: 'Face superior recoberta pelas pleuras diafragmáticas e pericárdio fibroso; face inferior revestida pelo peritônio parietal e em contato com fígado, estômago e baço.',
    vascularization: {
      arterial: 'Artérias frênicas superiores e inferiores, artérias pericardiofrênicas e musculofrênicas (ramos da artéria torácica interna).',
      venous: 'Veias frênicas inferiores drenam para a VCI à direita e veia renal esquerda à esquerda.',
      lymphatic: 'Linfonodos frênicos anteriores e posteriores drenando para os linfonodos paraesternais e celíacos.'
    },
    innervation: 'Nervo frênico motor exclusivo (raízes C3, C4, C5 do plexo cervical: "C3, C4, C5 mantêm o diafragma vivo"); inervação sensitiva periférica pelos nervos intercostais inferiores (T7-T11).',
    muscularOriginInsertion: 'Origem: processo xifoide (esternal), cartilagens costais 7ª a 12ª (costal) e vértebras L1 a L3 via pilares direito e esquerdo (lombar). Inserção: centro tendíneo central.',
    neighboringStructures: ['Centro tendíneo', 'Hiato da veia cava (nível T8)', 'Hiato esofágico (nível T10)', 'Hiato aórtico (nível T12)', 'Pericárdio'],
    variations: 'Hiato esofágico formado pelo pilar direito em 85% e compartilhado pelo pilar esquerdo em 15%; presença de trígonos esternocostais de Morgagni e vertebrocostais de Bochdalek.',
    clinicalApplications: 'Hérnia hiatal por deslizamento ou paraesofágica; hérnia diafragmática congênita de Bochdalek com hipoplasia pulmonar neonatal; soluço por espasmo frênico.',
    relatedPathologies: ['Hérnia Hiatal', 'Paralisia Diafragmática unilateral por lesão frênica', 'Evisceração diafragmática traumática'],
    evaluationExams: ['Fluoroscopia Dinâmica ("Sniff Test")', 'Radiografia de Tórax em Inspiração e Expiração', 'Eletroneuromiografia do Nervo Frênico', 'Ultrassom diafragmático'],
    model3DMapping: {
      meshId: 'MUSC_Diaphragm',
      category: 'muscle',
      position: [0, 1.15, 0]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Professor Titular de Anatomia Humana',
      revisionDate: '2026-03-08',
      references: [
        'Terminologia Anatomica (IFAA - Código A04.4.02.001)',
        'West, J. B. Fisiologia Respiratória: Princípios Básicos. 10ª ed. Artmed, 2017.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'estomago',
    ptName: 'Estômago',
    latinName: 'Gaster',
    englishName: 'Stomach',
    synonyms: ['Ventre'],
    systemId: 'digestorio',
    region: 'abdome',
    laterality: 'esquerdo',
    description: 'Segmento dilatado do tubo gastrointestinal que atua na digestão química e mecânica do bolo alimentar, formando o quimo através do ácido clorídrico e pepsina.',
    location: 'Região epigástrica, umbilical e hipocôndrio esquerdo do abdome.',
    shape: 'Letra "J" maiúscula, com cárdia, fundo gástrico, corpo gástrico, parte pilórica (antro e canal) e duas curvaturas (menor e maior).',
    dimensions: 'Comprimento de 25 cm; capacidade de 1 a 1,5 litros no adulto em estado pós-prandial.',
    function: 'Secreção de HCl por células parietais, fator intrínseco para absorção de vitamina B12 no íleo terminal, pepsinogênio por células principais e gastrina por células G.',
    relations: 'Anteriormente com a parede abdominal anterior e lobo esquerdo do fígado; posteriormente com a bolsa omental, pâncreas, rim esquerdo e artéria esplênica.',
    vascularization: {
      arterial: 'Curvatura menor: a. gástrica esquerda (tronco celíaco) e a. gástrica direita (a. hepática própria). Curvatura maior: a. gastroomental direita e esquerda.',
      venous: 'Veias gástricas esquerda e direita tributárias diretas da veia porta; veias gástricas curtas drenando na veia esplênica.',
      lymphatic: 'Linfonodos gástricos, gastroomentais e pancreatoesplênicos tributários dos linfonodos celíacos.'
    },
    innervation: 'Parassimpático: troncos vagais anterior e posterior (aumentam secreção ácida e motilidade). Simpático: nervos esplâncnicos maiores (T5-T9) via plexo celíaco.',
    neighboringStructures: ['Esôfago abdominal', 'Duodeno', 'Baço', 'Pâncreas', 'Cólon transverso'],
    variations: 'Variação na posição do piloro de acordo com o biótipo (longilíneos apresentam estômago em anzol baixo; brevilíneos apresentam estômago horizontal alto).',
    clinicalApplications: 'Úlcera péptica gastroduodenal associada a Helicobacter pylori ou AINEs; adenocarcinoma gástrico; anemia perniciosa por deficiência de fator intrínseco.',
    relatedPathologies: ['Doença do Refluxo Gastroesofágico (DRGE)', 'Úlcera Péptica', 'Gastrite Crônica Atrófica', 'Estenose Hipertrófica do Piloro'],
    evaluationExams: ['Endoscopia Digestiva Alta (EDA) com biópsia', 'Pesquisa de H. pylori por teste da urease', 'Hemograma completo', 'Tomografia com contraste'],
    model3DMapping: {
      meshId: 'ORGAN_Stomach',
      category: 'organ',
      position: [-0.2, 1.05, 0.1]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Helena Matos, CRBM 1892',
      reviewerTitle: 'Docente de Fisiologia e Patologia',
      revisionDate: '2026-03-04',
      references: [
        'Terminologia Anatomica (IFAA - Código A05.5.01.001)',
        'Robbins & Cotran. Patologia: Bases Patológicas das Doenças. 9ª ed. Elsevier, 2016.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'pancreas',
    ptName: 'Pâncreas',
    latinName: 'Pancreas',
    englishName: 'Pancreas',
    synonyms: ['Glândula Mista Pancreática'],
    systemId: 'endocrino',
    region: 'abdome',
    laterality: 'bilateral',
    description: 'Glândula mista retroperitoneal com função exócrina (ácinos secretores de enzimas amilase, lipase, tripsinogênio) e endócrina (ilhotas de Langerhans produtoras de insulina, glucagon e somatostatina).',
    location: 'Espaço retroperitoneal na parede abdominal posterior, estendendo-se transversalmente da curva duodenal ao hilo esplênico.',
    shape: 'Alongado transversalmente em martelo, dividido em cabeça, colo, corpo e cauda.',
    dimensions: 'Comprimento: 12-15 cm; peso: 70 a 100 g.',
    function: 'Neutralização do ácido gástrico duodenal pelo bicarbonato; digestão intraluminal de macromoléculas; regulação da glicemia plasmática.',
    relations: 'Cabeça abraçada pelo "C" duodenal e cruzada pelos vasos mesentéricos superiores; cauda em contato direto com o hilo esplênico; posterior à bolsa omental.',
    vascularization: {
      arterial: 'Artérias pancreaticoduodenais superiores (anterior e posterior, da gastroduodenal) e inferiores (da mesentérica superior); ramos pancreáticos da artéria esplênica.',
      venous: 'Drenagem para as veias mesentérica superior e esplênica, confluindo para a formação da veia porta.',
      lymphatic: 'Linfonodos pancreaticoesplênicos e celíacos.'
    },
    innervation: 'Fibras autônomas simpáticas dos nervos esplâncnicos e parassimpáticas vagais pelo plexo celíaco e mesentérico superior.',
    neighboringStructures: ['Duodeno', 'Baço', 'Veia porta', 'Veia e artéria mesentéricas superiores', 'Artéria esplênica'],
    variations: 'Pâncreas anular (defeito de rotação do broto ventral estrangulando a segunda porção duodenal); pâncreas divisum por falha de fusão dos ductos.',
    clinicalApplications: 'Pancreatite aguda biliar ou alcoólica com autodigestão enzimática retroperitoneal e necrose; adenocarcinoma da cabeça do pâncreas com icterícia colestática indolor.',
    relatedPathologies: ['Pancreatite Aguda e Crônica', 'Diabetes Mellitus Tipo 1 e 2', 'Adenocarcinoma Pancreático'],
    evaluationExams: ['Amilase e Lipase séricas', 'Glicemia de jejum e Hemoglobina Glicada (HbA1c)', 'Tomografia Computadorizada de Abdome com protocolo pâncreas', 'Colangiorressonância'],
    model3DMapping: {
      meshId: 'ORGAN_Pancreas',
      category: 'organ',
      position: [0.05, 0.95, -0.05]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Professor de Anatomia',
      revisionDate: '2026-02-28',
      references: [
        'Terminologia Anatomica (IFAA - Código A05.9.01.001)',
        'Junqueira, L. C. & Carneiro, J. Histologia Básica: Texto e Atlas. 13ª ed. Guanabara Koogan, 2017.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'baco',
    ptName: 'Baço',
    latinName: 'Splen (Lien)',
    englishName: 'Spleen',
    synonyms: ['Órgão Linfoide Esplênico'],
    systemId: 'linfatico',
    region: 'abdome',
    laterality: 'esquerdo',
    description: 'Maior órgão linfoide secundário do corpo humano, vascularizado pela circulação sistêmica, especializado em hemocaterese (filtração e destruição de eritrócitos senescentes) e imunidade celular/humoral.',
    location: 'Hipocôndrio esquerdo, profundamente abrigado sob a cúpula hemidiafragmática esquerda e protegido pelas 9ª, 10ª e 11ª costelas.',
    shape: 'Ovoide com faces diafragmática convexa e visceral com impressões gástrica, renal e cólica; hilo esplênico na face medial.',
    dimensions: 'Comprimento aproximado de 12 cm, largura de 7 cm, espessura de 3-4 cm e peso de 150 a 200 g (regra de 1x3x5x7x9x11 polegadas/costelas).',
    function: 'Polpa vermelha: controle de qualidade eritrocitária, fagocitose de hemácias deformadas por macrófagos sinusais. Polpa branca: produção de anticorpos (IgM) e resposta imune a bactérias capsuladas.',
    relations: 'Superiormente faceia o diafragma; medialmente o fundo gástrico e rim esquerdo; inferiormente a flexura cólica esquerda; ponta da cauda do pâncreas atinge seu hilo.',
    vascularization: {
      arterial: 'Artéria esplênica (ramo tortuoso mais calibroso do tronco celíaco, que corre ao longo da borda superior do pâncreas).',
      venous: 'Veia esplênica (corre dorsalmente ao corpo do pâncreas e une-se à VMS para formar a veia porta).',
      lymphatic: 'Linfonodos esplênicos hilares tributários dos linfonodos celíacos.'
    },
    innervation: 'Plexo celíaco e nervos esplâncnicos via plexo esplênico que acompanha as ramificações arteriais.',
    neighboringStructures: ['Estômago', 'Rim esquerdo', 'Cauda do pâncreas', 'Flexura cólica esquerda', 'Diafragma'],
    variations: 'Baços acessórios (esplênulos) presentes em 10-15% dos indivíduos, situados comumente no ligamento gastroesplênico ou hilo.',
    clinicalApplications: 'Ruptura esplênica pós-trauma toracoabdominal fechado com hemoperitônio maciço exigindo esplenectomia de urgência; esplenomegalia congestiva por esquistossomose ou cirrose.',
    relatedPathologies: ['Esplenomegalia', 'Ruptura Esplênica Traumática', 'Infarto Esplênico', 'Anemia Falciforme com autoesplenectomia'],
    evaluationExams: ['Ultrassonografia de Hipocôndrio Esquerdo', 'Hemograma com contagem de plaquetas e esfregaço (corpúsculos de Howell-Jolly)', 'Tomografia Computadorizada'],
    model3DMapping: {
      meshId: 'ORGAN_Spleen',
      category: 'organ',
      position: [-0.55, 1.1, -0.1]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Profa. Dra. Camila Albuquerque, CRBM 5120',
      reviewerTitle: 'Especialista em Imunologia e Hematologia',
      revisionDate: '2026-03-11',
      references: [
        'Terminologia Anatomica (IFAA - Código A13.2.01.001)',
        'Abbas, A. K. et al. Imunologia Celular e Molecular. 9ª ed. Elsevier, 2018.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'arteria_aorta_toracica',
    ptName: 'Artéria Aorta (Segmento Torácico)',
    latinName: 'Aorta thoracica',
    englishName: 'Thoracic Aorta',
    synonyms: ['Tronco Aórtico Torácico'],
    systemId: 'vasos_sanguineos',
    region: 'torax',
    laterality: 'medial',
    description: 'Maior tronco arterial sistêmico do corpo humano com parede elástica espessa para amortecimento da onda pressórica sistólica (efeito Windkessel).',
    location: 'Origina-se no ventrículo esquerdo (óstio aórtico), ascende no mediastino médio, curva-se no arco aórtico e desce pelo mediastino posterior até o hiato aórtico (T12).',
    shape: 'Tubo cilíndrico curvo em cajado com ramos coronários na raiz e ramos para o encéfalo e membros superiores no arco.',
    dimensions: 'Calibre de 25 a 30 mm na raiz e 20 a 24 mm na aorta torácica descendente.',
    function: 'Condução de todo o débito cardíaco sistêmico (5 L/min no repouso) mantendo o fluxo contínuo durante a diástole através do recolhimento elástico da túnica média rica em elastina.',
    relations: 'No arco: anterior à traqueia e esôfago, cruzada pelo nervo vago esquerdo e nervo laríngeo recorrente esquerdo; na porção descendente: anterior aos corpos vertebrais T4-T12.',
    vascularization: {
      arterial: 'Vasa vasorum na adventícia provenientes de ramos intercostais e pericárdicos.',
      venous: 'Venae vasorum tributárias do sistema ázigos.',
      lymphatic: 'Linfáticos drenam para linfonodos mediastinais posteriores e ducto torácico.'
    },
    innervation: 'Nervo aórtico de Cyon (ramo do vago) nos barorreceptores do arco aórtico monitorando a pressão arterial sistêmica para o reflexo barorreceptor.',
    neighboringStructures: ['Tronco pulmonar', 'Veia cava superior', 'Ducto torácico', 'Esôfago', 'Traqueia'],
    variations: 'Arco aórtico bovino (origem comum do tronco braquiocefálico e da carótida comum esquerda em cerca de 15% da população); coarctação de aorta congênita.',
    clinicalApplications: 'Dissecção aguda de aorta tipo A ou B de Stanford; aneurisma de aorta torácica com risco de rotura hemorrágica fatal; aterosclerose com estenose de óstios de ramos vitais.',
    relatedPathologies: ['Dissecção Aórtica Aguda', 'Aneurisma Aórtico Torácico', 'Aterosclerose Sistêmica', 'Coarctação da Aorta'],
    evaluationExams: ['Angiotomografia de Tórax', 'Ecocardiograma Transesofágico (ECO-TE)', 'Ressonância Magnética com Angio-RM'],
    model3DMapping: {
      meshId: 'VESSEL_Aorta',
      category: 'vessel',
      position: [-0.05, 1.45, 0.05]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Docente de Anatomia',
      revisionDate: '2026-03-09',
      references: [
        'Terminologia Anatomica (IFAA - Código A12.2.03.001)',
        'Moore, K. L. Anatomia Orientada para a Clínica. 8ª ed. Guanabara Koogan, 2019.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'nervo_vago_ncx',
    ptName: 'Nervo Vago (NC X)',
    latinName: 'Nervus vagus (NC X)',
    englishName: 'Vagus Nerve (Cranial Nerve X)',
    synonyms: ['X Par Craniano', 'Nervo Pneumogástrico'],
    systemId: 'nervos_cranianos',
    region: 'cabeca_pescoco',
    laterality: 'bilateral',
    description: 'Mais longo e amplamente distribuído nervo craniano, contendo fibras aferentes e eferentes viscerais gerais (parassimpáticas) para quase todas as vísceras torácicas e abdominais até a flexura cólica esquerda.',
    location: 'Emerge do sulco posterolateral do bulbo, atravessa o forame jugular no crânio e desce pela bainha carotídea no pescoço entre a carótida interna/comum e a veia jugular interna.',
    shape: 'Cordão nervoso calibroso com gânglios sensitivos superior (jugular) e inferior (nodoso).',
    dimensions: 'Comprimento superior a 50 cm desde o tronco encefálico até o abdome.',
    function: 'Inervação parassimpática cronotrópica negativa cardíaca, broncoconstrição e hipersecreção pulmonar, peristaltismo e secreção digestória gástrica e intestinal; inervação motora dos músculos da laringe via nervos laríngeos recorrentes para fonação.',
    relations: 'No pescoço: posterior à artéria carótida comum e veia jugular interna; no tórax: direito cruza a artéria subclávia e esquerdo cruza o arco aórtico, onde emitem os ramos laríngeos recorrentes.',
    vascularization: {
      arterial: 'Vasa nervorum derivados da artéria faríngea ascendente, artéria tireóidea inferior e ramos bronquiais.',
      venous: 'Veias comitantes para o sistema jugular interno e ázigos.',
      lymphatic: 'Drenagem para linfonodos cervicais profundos.'
    },
    neighboringStructures: ['Veia jugular interna', 'Artéria carótida comum', 'Nervo glossofaríngeo (NC IX)', 'Nervo acessório (NC XI)', 'Esôfago'],
    variations: 'Nervo laríngeo não-recorrente direito em casos de artéria subclávia direita anômala retroesofágica (artéria lusória).',
    clinicalApplications: 'Lesão do nervo laríngeo recorrente pós-tireoidectomia provocando rouquidão (lesão unilateral) ou asfixia por paralisia das cordas vocais (bilateral); síncope vasovagal; estimulação vagal para epilepsia refratária.',
    relatedPathologies: ['Paralisia das Cordas Vocais', 'Gastroparesia Diabética por neuropatia autonômica vagal', 'Síndrome do Seio Carotídeo'],
    evaluationExams: ['Laringoscopia Direta e Indireta', 'Ressonância Magnética de Encéfalo e Forame Jugular', 'Tilt Test (Teste de Inclinação)', 'Eletromiografia Laríngea'],
    model3DMapping: {
      meshId: 'NERVE_Vagus',
      category: 'nerve',
      position: [0.15, 1.9, 0.05]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Camila Albuquerque, CRBM 5120',
      reviewerTitle: 'Docente de Neuroanatomia',
      revisionDate: '2026-03-07',
      references: [
        'Terminologia Anatomica (IFAA - Código A14.2.01.153)',
        'Machado, A. Neuroanatomia Funcional. 3ª ed. Atheneu, 2014.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'globo_ocular',
    ptName: 'Bulbo do Olho',
    latinName: 'Bulbus oculi',
    englishName: 'Eyeball',
    synonyms: ['Globo Ocular', 'Olho'],
    systemId: 'ocular',
    region: 'cabeca_pescoco',
    laterality: 'bilateral',
    description: 'Órgão receptor periférico do aparelho da visão, composto por três túnicas concêntricas (fibrosa externa: esclera e córnea; vascular média: corioide, corpo ciliar e íris; nervosa interna: retina fotossensível).',
    location: 'Cavidade orbitária óssea, repousando sobre um coxim adiposo periorbitário e sustentado pela fáscia do bulbo (cápsula de Tenon).',
    shape: 'Esfera ligeiramente aplanada no sentido anteroposterior com curvatura anterior mais pronunciada na córnea.',
    dimensions: 'Diâmetro anteroposterior médio de 24 mm no adulto emetrope; peso aproximado de 7 a 8 g.',
    function: 'Focalização dos raios luminosos na fóvea central da retina pelos meios refringentes transparentes (córnea, humor aquoso, lente/cristalino e corpo vítreo); fototransdução por cones e bastonetes gerando potenciais de ação no nervo óptico.',
    relations: 'Superiormente com o teto da órbita (osso frontal); inferiormente com o assoalho da órbita (maxila); inserção dos 6 músculos extraoculares (4 retos e 2 oblíquos).',
    vascularization: {
      arterial: 'Artéria oftálmica (ramo da carótida interna) emitindo a artéria central da retina e artérias ciliares posteriores curtas e longas.',
      venous: 'Veias vorticosas e veia central da retina drenando para as veias oftálmicas superior e inferior em direção ao seio cavernoso.',
      lymphatic: 'Ausência de circulação linfática intrínseca no globo ocular.'
    },
    innervation: 'Sensitiva: nervo nasociliar do nervo oftálmico (NC V1); motora autônoma: parassimpático do NC III para miose pupilar e acomodação da lente; simpático cervical para midríase.',
    neighboringStructures: ['Músculos extraoculares', 'Glândula lacrimal', 'Nervo óptico (NC II)', 'Palpebrais superior e inferior', 'Seio cavernoso'],
    variations: 'Variações axiais do diâmetro produzem miopia (>24 mm) ou hipermetropia (<24 mm); astigmatismo por curvatura corneana assimétrica.',
    clinicalApplications: 'Glaucoma por aumento da pressão intraocular decorrente do bloqueio de drenagem do humor aquoso na malha trabecular/canal de Schlemm; catarata por opacificação da lente; retinopatia diabética.',
    relatedPathologies: ['Glaucoma Primário de Ângulo Aberto e Fechado', 'Catarata Senil', 'Descolamento de Retina', 'Retinopatia Hipertensiva'],
    evaluationExams: ['Tonometria de Aplanação de Goldmann', 'Fundoscopia / Mapeamento de Retina', 'Tomografia de Coerência Óptica (OCT)', 'Campimetria Computadorizada'],
    model3DMapping: {
      meshId: 'ORGAN_Eye_Left',
      category: 'organ',
      position: [-0.25, 2.5, 0.4]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Camila Albuquerque, CRBM 5120',
      reviewerTitle: 'Docente de Morfologia Funcional',
      revisionDate: '2026-03-01',
      references: [
        'Terminologia Anatomica (IFAA - Código A15.2.01.001)',
        'Yanoff, M. & Duker, J. S. Ophthalmology. 5th ed. Elsevier, 2019.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'traqueia',
    ptName: 'Traqueia',
    latinName: 'Trachea',
    englishName: 'Trachea',
    synonyms: ['Conduto Aéreo Traqueal'],
    systemId: 'respiratorio',
    region: 'cabeca_pescoco',
    laterality: 'medial',
    description: 'Tubo cartilagíneo e membranoso que conduz o ar da laringe até a bifurcação traqueal (carina) nos brônquios principais direito e esquerdo, reforçado por 16 a 20 anéis cartilagíneos incompletos em "C".',
    location: 'Estende-se da margem inferior da cartilagem cricoide (nível da vértebra C6) até o plano transverso do tórax na altura de T4/T5.',
    shape: 'Tubo cilíndrico com parede posterior aplanada contendo o músculo traqueal liso.',
    dimensions: 'Comprimento médio de 10 a 12 cm; diâmetro externo de 2 cm em homens e 1,8 cm em mulheres.',
    function: 'Condução aérea, umidificação, aquecimento do ar inspirado e transporte mucociliar contínuo ("escada rolante mucociliar") eliminando microrganismos e partículas inaladas.',
    relations: 'Posteriormente em contato íntimo com o esôfago; anteriormente cruzada pelo istmo da tireoide (2º ao 4º anel) no pescoço e pelo arco aórtico no tórax.',
    vascularization: {
      arterial: 'Ramos traqueais das artérias tireóideas inferiores no pescoço e artérias brônquicas no tórax.',
      venous: 'Plexo venoso que drena para as veias tireóideas inferiores e veia braquiocefálica.',
      lymphatic: 'Linfonodos pré-traqueais e paratraqueais.'
    },
    innervation: 'Nervos laríngeos recorrentes (ramos do vago) para contração do músculo traqueal e sensibilidade mucosa; troncos simpáticos para broncodilatação.',
    neighboringStructures: ['Esôfago', 'Glândula tireoide', 'Artérias carótidas comuns', 'Nervos laríngeos recorrentes', 'Timo'],
    variations: 'Tracheobronchial pig bronchus (brônquio traqueal anômalo emergindo da parede lateral direita da traqueia superior à carina em 0,5% dos casos).',
    clinicalApplications: 'Traqueostomia de emergência e eletiva realizada habitualmente entre o 2º e 3º anéis cartilagíneos; intubação orotraqueal e posicionamento do tubo 3-4 cm acima da carina.',
    relatedPathologies: ['Estenose Traqueal Pós-Intubação Prolongada', 'Traqueomalácia', 'Fístula Traqueoesofágica', 'Traqueobronquite Infecciosa'],
    evaluationExams: ['Broncoscopia Flexível', 'Tomografia Computadorizada de Vias Aéreas com Reconstrução Virtual 3D', 'Radiografia Cervicotorácica'],
    model3DMapping: {
      meshId: 'ORGAN_Trachea',
      category: 'organ',
      position: [0, 1.8, 0.1]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Professor Titular de Anatomia',
      revisionDate: '2026-03-03',
      references: [
        'Terminologia Anatomica (IFAA - Código A06.3.01.001)',
        'Moore, K. L. Anatomia Orientada para a Clínica. 8ª ed. Guanabara Koogan, 2019.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'glandula_tireoide',
    ptName: 'Glândula Tireoide',
    latinName: 'Glandula thyroidea',
    englishName: 'Thyroid Gland',
    synonyms: ['Tireoide'],
    systemId: 'endocrino',
    region: 'cabeca_pescoco',
    laterality: 'bilateral',
    description: 'Maior glândula exclusivamente endócrina do organismo, altamente vascularizada, composta por folículos coloides sintetizadores de tiroxina (T4), tri-iodotironina (T3) e células parafoliculares (células C) produtoras de calcitonina.',
    location: 'Região cervical anterior infra-hióidea, abraçando a traqueia e as cartilagens tireóidea e cricoide da laringe (níveis vertebrais C5 a T1).',
    shape: 'Borboreta com lobos direito e esquerdo unidos centralmente por um istmo delgado anterior à traqueia.',
    dimensions: 'Peso médio de 15 a 25 g; cada lobo mede aproximadamente 5 cm de altura por 3 cm de largura.',
    function: 'Regulação da taxa metabólica basal de todos os tecidos periféricos, sensibilidade adrenérgica, maturação do sistema nervoso fetal e infantil e homeostase de cálcio.',
    relations: 'Anteriormente recoberta pelos músculos infra-hióideos (esterno-hióideo, esternotireóideo, omo-hióideo); posterolateralmente faceia a bainha carotídea; na face posterior de seus lobos encontram-se as quatro glândulas paratireoides.',
    vascularization: {
      arterial: 'Artérias tireóideas superiores (ramos da carótida externa) e inferiores (ramos do tronco tireocervical da subclávia); ocasionalmente artéria tireóidea ima da aorta/braquiocefálico.',
      venous: 'Veias tireóideas superior e média (tributárias da jugular interna) e veias tireóideas inferiores (drenam na veia braquiocefálica).',
      lymphatic: 'Linfonodos pré-laríngeos (Delfianos), pré-traqueais, paratraqueais e cervicais profundos.'
    },
    innervation: 'Gânglios simpáticos cervicais superior, médio e inferior com função predominantemente vasomotora; parassimpático derivado do nervo vago.',
    neighboringStructures: ['Cartilagem tireóidea', 'Cartilagem cricoide', 'Traqueia', 'Nervos laríngeos recorrentes', 'Glândulas paratireoides'],
    variations: 'Lobo piramidal presente em cerca de 40 a 50% dos indivíduos como remanescente do ducto tireoglosso embrionário.',
    clinicalApplications: 'Hipotireoidismo primário (Tireoidite de Hashimoto) com TSH elevado e T4 livre baixo; hipertireoidismo (Doença de Graves) com exoftalmia; punção aspirativa por agulha fina (PAAF) de nódulos.',
    relatedPathologies: ['Hipotireoidismo de Hashimoto', 'Hipertireoidismo de Graves', 'Bócio Multinodular Tóxico', 'Carcinoma Papilífero de Tireoide'],
    evaluationExams: ['TSH ultra-sensível e T4 livre séricos', 'Anti-TPO e Anti-Tireoglobulina', 'Ultrassonografia de Tireoide com Doppler e classificação ACR TI-RADS', 'PAAF de nódulo suspeito'],
    model3DMapping: {
      meshId: 'ORGAN_Thyroid',
      category: 'organ',
      position: [0, 2.05, 0.2]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Camila Albuquerque, CRBM 5120',
      reviewerTitle: 'Pesquisadora em Endocrinologia Molecular',
      revisionDate: '2026-03-06',
      references: [
        'Terminologia Anatomica (IFAA - Código A11.3.01.001)',
        'Kronenberg, H. M. et al. Williams Textbook of Endocrinology. 14th ed. Elsevier, 2020.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'articulacao_joelho',
    ptName: 'Articulação do Joelho',
    latinName: 'Articulatio genus',
    englishName: 'Knee Joint',
    synonyms: ['Complexo Articular do Joelho'],
    systemId: 'articular',
    region: 'membro_inferior',
    laterality: 'bilateral',
    description: 'Maior e mais complexa articulação sinovial do corpo humano, do tipo gínglimo (dobradiça) modificada que permite movimentos de flexão, extensão e discreta rotação axial.',
    location: 'Entre o fêmur distal, a tíbia proximal e a patela anteriormente.',
    shape: 'Articulação bicondilar composta pelas articulações tibiofemoral (medial e lateral) e patelofemoral.',
    dimensions: 'Amplitude de movimento média: 0° de extensão até 135-145° de flexão ativa.',
    function: 'Sustentação de carga dinâmica corporal, absorção de impacto na locomoção através dos meniscos fibrocartilaginosos medial e lateral e estabilidade por ligamentos cruzados e colaterais.',
    relations: 'Envolvida por cápsula articular espessa reforçada pelo tendão patelar anteriormente, ligamentos colaterais tibial e fibular lateralmente, e ligamentos poplíteos posteriormente.',
    vascularization: {
      arterial: 'Rede anastomótica genicular formada por 10 ramos derivados das artérias femoral, poplítea e recorrente tibial anterior.',
      venous: 'Veias comitantes para a veia poplítea e safena magna.',
      lymphatic: 'Linfonodos poplíteos e inguinais profundos.'
    },
    innervation: 'Nervos femoral, tibial, fibular comum e obturatório seguindo a Lei de Hilton (nervos que cruzam a articulação inervam sua cápsula e os músculos motores).',
    relatedLigaments: [
      'Ligamento Cruzado Anterior (LCA)',
      'Ligamento Cruzado Posterior (LCP)',
      'Ligamento Colateral Tibial / Medial (LCT)',
      'Ligamento Colateral Fibular / Lateral (LCF)',
      'Ligamento Patelar'
    ],
    neighboringStructures: ['Menisco medial em "C"', 'Menisco lateral em "O"', 'Bursa suprapatelar', 'Fossa poplítea', 'Coxim adiposo infrapatelar de Hoffa'],
    variations: 'Menisco discóide lateral presente em até 3-5% da população, predispondo a estalos e lesões precoces.',
    clinicalApplications: 'Ruptura do ligamento cruzado anterior (LCA) por mecanismo rotacional do joelho em valgo com teste da gaveta anterior e teste de Lachman positivos; osteoartrite com estreitamento do espaço femorotibial.',
    relatedPathologies: ['Lesão de LCA e LCP', 'Lesão meniscal', 'Osteoartrite / Gonartrose', 'Tendinite patelar (joelho do saltador)'],
    evaluationExams: ['Ressonância Magnética do Joelho', 'Radiografia sob estresse e com apoio monopodal', 'Ultrassonografia articular', 'Artrocentese com análise do líquido sinovial'],
    model3DMapping: {
      meshId: 'JOINT_Knee_Left',
      category: 'bone',
      position: [-0.35, -1.2, 0.05]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Professor Titular de Anatomia',
      revisionDate: '2026-03-09',
      references: [
        'Terminologia Anatomica (IFAA - Código A03.6.08.001)',
        'Kapandji, A. I. Fisiologia Articular - Membro Inferior. Guanabara Koogan, 2008.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'musculo_biceps_braquial',
    ptName: 'Músculo Bíceps Braquial',
    latinName: 'Musculus biceps brachii',
    englishName: 'Biceps Brachii Muscle',
    synonyms: ['Bíceps'],
    systemId: 'muscular',
    region: 'membro_superior',
    laterality: 'bilateral',
    description: 'Músculo fusiforme do compartimento anterior do braço com duas cabeças (longa e curta), sendo o mais potente supinador do antebraço e importante flexor do cotovelo.',
    location: 'Compartimento anterior do braço, superficialmente ao músculo braquial e coracobraquial.',
    shape: 'Fusiforme bicipital com duas cabeças proximais convergindo para um tendão distal único inserido no rádio.',
    dimensions: 'Comprimento médio de 28 a 32 cm.',
    function: 'Potente supinador do antebraço quando o cotovelo está fletido; flexor primário da articulação do cotovelo; fraco flexor da articulação do ombro.',
    relations: 'Cruzado superficialmente pela veia cefálica lateralmente e veia basílica medialmente; repousa sobre os nervos mediano e músculocutâneo e a artéria braquial.',
    vascularization: {
      arterial: 'Ramos musculares da artéria braquial e ramos da artéria circunflexa umeral anterior.',
      venous: 'Veias braquiais e veias comitantes para a veia axilar.',
      lymphatic: 'Linfonodos axilares laterais e peitorais.'
    },
    innervation: 'Nervo musculocutâneo (raízes C5, C6 e C7 do fascículo lateral do plexo braquial).',
    muscularOriginInsertion: 'Origem: cabeça curta no processo coracoide da escápula; cabeça longa no tubérculo supraglenoidal da escápula (tendão intracapsular na goteira intertubercular). Inserção: tuberosidade do rádio e aponeurose bicipital.',
    muscularAction: 'Supinação do antebraço em flexão e flexão do antebraço na articulação do cotovelo.',
    neighboringStructures: ['Músculo braquial', 'Nervo musculocutâneo', 'Artéria braquial', 'Nervo mediano', 'Aponeurose bicipital (lacertus fibrosus)'],
    variations: 'Cabeça acessória (terceira cabeça) emergindo da diáfise umeral superior presente em até 10% dos indivíduos.',
    clinicalApplications: 'Ruptura do tendão da cabeça longa do bíceps produzindo a clássica deformidade de "Popeye" na contração; tendinopatia bicipital no sulco intertubercular.',
    relatedPathologies: ['Tendinite Bicipital', 'Ruptura do Tendão Distal do Bíceps', 'Neuropatia compressiva do nervo musculocutâneo'],
    evaluationExams: ['Ultrassonografia Musculoesquelética', 'Ressonância Magnética de Ombro e Cotovelo', 'Teste de Yergason e Teste de Speed'],
    model3DMapping: {
      meshId: 'MUSC_Biceps_Left',
      category: 'muscle',
      position: [-0.65, 1.4, 0.1]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Professor de Anatomia',
      revisionDate: '2026-03-02',
      references: [
        'Terminologia Anatomica (IFAA - Código A04.6.02.005)',
        'Moore, K. L. Anatomia Orientada para a Clínica. 8ª ed. Guanabara Koogan, 2019.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'vesicula_biliar',
    ptName: 'Vesícula Biliar',
    latinName: 'Vesica biliaris (fellea)',
    englishName: 'Gallbladder',
    synonyms: ['Colecisto'],
    systemId: 'digestorio',
    region: 'abdome',
    laterality: 'direito',
    description: 'Órgão sacular em formato de pera que armazena e concentra a bile sintetizada pelos hepatócitos, desidratando-a até 10 vezes mediante transporte ativo de sódio e cloreto.',
    location: 'Fossa da vesícula biliar na face visceral do lobo hepático direito, entre o lobo direito e o lobo quadrado.',
    shape: 'Piriforme dividida em fundo arredondado, corpo cilíndrico e infundíbulo com colo que se continua pelo ducto cístico.',
    dimensions: 'Comprimento: 7 a 10 cm; largura: 3 a 4 cm; volume de reserva: 30 a 50 mL.',
    function: 'Concentração da bile e ejeção coordenada em resposta à colecistoquinina (CCK) duodenal durante a chegada de quimo gorduroso, relaxando concomitantemente o esfíncter de Oddi.',
    relations: 'Fundo projeta-se na borda inferior do fígado na intersecção da 9ª cartilagem costal com a margem lateral do músculo reto abdominal; corpo faceia a primeira e segunda porções duodenais.',
    vascularization: {
      arterial: 'Artéria cística (ramo habitual da artéria hepática direita no trígono cisto-hepático de Calot).',
      venous: 'Veias císticas que drenam diretamente para o leito sinusoidal hepático ou para a veia porta.',
      lymphatic: 'Linfonodo cístico de Lund (no colo vesicular), tributário dos linfonodos celíacos.'
    },
    innervation: 'Plexo celíaco (fibras simpáticas vasomotoras) e nervo vago (fibras parassimpáticas motoras); inervação sensitiva somática do peritônio parietal sobrejacente pelo nervo frênico direito.',
    neighboringStructures: ['Lobo quadrado do fígado', 'Ducto cístico', 'Ducto hepático comum', 'Bulbo duodenal', 'Cólon transverso'],
    variations: 'Bolsa de Hartmann (divertículo de dilatação no infundíbulo); variações da origem e trajeto da artéria cística em mais de 20% dos casos cirúrgicos.',
    clinicalApplications: 'Colelitíase (cálculos de colesterol ou pigmentares biliares); colecistite aguda litiásica com sinal de Murphy positivo (parada súbita da inspiração à palpação profunda do hipocôndrio direito).',
    relatedPathologies: ['Colelitíase', 'Colecistite Aguda e Crônica', 'Coledocolitíase com colangite aguda', 'Colangiocarcinoma'],
    evaluationExams: ['Ultrassonografia de Abdome Superior (padrão ouro para cálculos com sombra acústica posterior)', 'Fosfatase Alcalina e Gama-GT', 'Colangiorressonância'],
    model3DMapping: {
      meshId: 'ORGAN_Gallbladder',
      category: 'organ',
      position: [0.25, 0.95, 0.2]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Helena Matos, CRBM 1892',
      reviewerTitle: 'Docente em Ciências Médicas',
      revisionDate: '2026-03-08',
      references: [
        'Terminologia Anatomica (IFAA - Código A05.8.02.001)',
        'Sleisenger and Fordtran\'s Gastrointestinal and Liver Disease. 11th ed. Elsevier, 2020.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'bexiga_urinaria',
    ptName: 'Bexiga Urinária',
    latinName: 'Vesica urinaria',
    englishName: 'Urinary Bladder',
    synonyms: ['Reservatório Urinário'],
    systemId: 'urinario',
    region: 'pelve_perineo',
    laterality: 'medial',
    description: 'Reservatório muscular oco e distensível do aparelho urinário revestido por epitélio de transição (urotélio) especializado e potente túnica muscular lisa (músculo detrusor).',
    location: 'Pelve menor, posterior à sínfise púbica; no homem situa-se anterior ao reto e superior à próstata; na mulher situa-se anterior ao útero e vagina.',
    shape: 'Tetraédrica quando vazia, tornando-se ovoide esférica ao encher e subindo para a cavidade abdominal anterior.',
    dimensions: 'Capacidade fisiológica de 350 a 500 mL antes de desencadear forte reflexo miccional; capacidade máxima suportada até 1 litro em retenções agudas.',
    function: 'Armazenamento de urina sob baixa pressão intravesical e esvaziamento coordenado (micção) por contração do músculo detrusor e relaxamento dos esfíncteres uretrais interno e externo.',
    relations: 'O trígono da bexiga (área triangular fixa na base pélvica) é delimitado pelos dois óstios dos ureteres e o óstio interno da uretra.',
    vascularization: {
      arterial: 'Artérias vesicais superiores e inferiores (ramos da artéria ilíaca interna).',
      venous: 'Plexo venoso vesical drenando nas veias ilíacas internas.',
      lymphatic: 'Linfonodos ilíacos internos e externos.'
    },
    innervation: 'Parassimpático sacral (S2-S4 via nervos esplâncnicos pélvicos: contração do detrusor e micção); simpático lombar (L1-L2 via nervos hipogástricos: relaxamento do detrusor e continência); somático pelo nervo pudendo (S2-S4) para esfíncter externo voluntário.',
    neighboringStructures: ['Sínfise púbica', 'Próstata (homens)', 'Útero e vagina (mulheres)', 'Reto', 'Alças ileais superiores'],
    variations: 'Divertículo congênito da bexiga; cisto do úraco por fechamento incompleto do canal alantoico embrionário.',
    clinicalApplications: 'Cistite bacteriana infecciosa aguda (comum em mulheres por uretra curta); retenção urinária aguda por hiperplasia prostática benigna; neoplasia urotelial com hematúria indolor.',
    relatedPathologies: ['Infecção do Trato Urinário Baixo (Cistite)', 'Bexiga Hiperativa / Neurodermatite', 'Carcinoma Urotelial', 'Incontinência Urinária de Esforço'],
    evaluationExams: ['Sumário de Urina (EAS/Leucócitos/Hemácias)', 'Urocultura com Antibiograma', 'Ultrassonografia com medição de resíduo pós-miccional', 'Cistoscopia com biópsia'],
    model3DMapping: {
      meshId: 'ORGAN_Bladder',
      category: 'organ',
      position: [0, 0.35, 0.1]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Prof. Dr. Arnaldo Silva, CRBM 0451',
      reviewerTitle: 'Docente de Anatomia',
      revisionDate: '2026-03-05',
      references: [
        'Terminologia Anatomica (IFAA - Código A08.3.01.001)',
        'Wein, A. J. et al. Campbell-Walsh Urology. 12th ed. Elsevier, 2020.'
      ],
      isDemoOnly: false
    }
  },
  {
    id: 'prostata',
    ptName: 'Próstata',
    latinName: 'Prostata',
    englishName: 'Prostate Gland',
    synonyms: ['Glândula Prostática'],
    systemId: 'reprodutor_masculino',
    region: 'pelve_perineo',
    laterality: 'medial',
    description: 'Maior glândula acessória do sistema reprodutor masculino, fibromuscular e glandular, perfurada pela uretra prostática e pelos ductos ejaculatórios.',
    location: 'Pelve menor masculina, imediatamente inferior ao colo vesical e superior ao diafragma urogenital, repousando anteriormente à ampola do reto.',
    shape: 'Noz ou cone invertido com base superior voltada para a bexiga e ápice inferior voltado para o esfíncter uretral externo.',
    dimensions: 'Volume normal de 20 a 25 cm³ no adulto jovem; diâmetro transverso aproximado de 4 cm.',
    function: 'Secreção de fluido prostático leitoso ligeiramente alcalino (pH 7,29) contendo ácido cítrico, zinco, fosfatase ácida prostática e antígeno prostático específico (PSA) para liquefação do sêmen e viabilidade espermática.',
    relations: 'Posteriormente separada da parede anterior do reto pela fáscia retoprostática de Denonvilliers (permitindo palpação clínica no toque retal).',
    vascularization: {
      arterial: 'Artéria vesical inferior e artéria retal média (ramos da artéria ilíaca interna).',
      venous: 'Plexo venoso prostático de Santorini que se conecta ao plexo venoso vertebral de Batson (via de metástase óssea para coluna lombar).',
      lymphatic: 'Linfonodos obturatórios e ilíacos internos.'
    },
    innervation: 'Plexo prostático derivado do plexo hipogástrico inferior (fibras simpáticas essenciais para emissão ejaculátoria; fibras parassimpáticas para secreção).',
    neighboringStructures: ['Colo da bexiga urinária', 'Reto', 'Vesículas seminais', 'Ductos deferentes', 'Uretra prostática'],
    variations: 'Zoneamento anatômico de McNeal: Zona Periférica (70% do volume, sítio de 70-80% dos cânceres), Zona de Transição (sítio clássico da Hiperplasia Prostática Benigna) e Zona Central.',
    clinicalApplications: 'Hiperplasia Prostática Benigna (HPB) com jato urinário fraco, noctúria e hesitação; Adenocarcinoma de próstata rastreado por PSA total/livre e toque retal.',
    relatedPathologies: ['Hiperplasia Prostática Benigna (HPB)', 'Adenocarcinoma de Próstata', 'Prostatite Bacteriana Aguda e Crônica'],
    evaluationExams: ['PSA Total e Livre séricos', 'Exame de Toque Retal', 'Ressonância Magnética Multiparamétrica de Próstata (PI-RADS)', 'Biópsia Transretal Guiada por Ultrassom'],
    model3DMapping: {
      meshId: 'ORGAN_Prostate',
      category: 'organ',
      position: [0, 0.2, 0.05]
    },
    curation: {
      status: 'approved',
      reviewerName: 'Dra. Helena Matos, CRBM 1892',
      reviewerTitle: 'Docente em Análises Clínicas',
      revisionDate: '2026-03-10',
      references: [
        'Terminologia Anatomica (IFAA - Código A09.3.08.001)',
        'McNeal, J. E. The zonal anatomy of the prostate. The Prostate, 1981.'
      ],
      isDemoOnly: false
    }
  }
];
