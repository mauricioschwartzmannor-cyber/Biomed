import { AnatomicalSystemInfo } from '../types';

export const ANATOMICAL_SYSTEMS: AnatomicalSystemInfo[] = [
  {
    id: 'esqueletico',
    name: 'Sistema Esquelético',
    category: 'sistemica',
    structureCount: 206,
    description: 'Armabouço osteológico que fornece suporte mecânico, proteção a órgãos vitais, reserva mineral de cálcio/fósforo e hematopoiese.',
    iconName: 'Bone',
    colorHex: '#E2E8F0'
  },
  {
    id: 'articular',
    name: 'Sistema Articular',
    category: 'sistemica',
    structureCount: 150,
    description: 'Juntas e conexões interósseas (sinoviais, cartilagíneas e fibrosas) que possibilitam graus variados de mobilidade e estabilidade.',
    iconName: 'Link',
    colorHex: '#CBD5E1'
  },
  {
    id: 'muscular',
    name: 'Sistema Muscular',
    category: 'sistemica',
    structureCount: 650,
    description: 'Músculos estriados esqueléticos responsáveis pelo movimento voluntário, manutenção da postura, tônus e termogênese.',
    iconName: 'Activity',
    colorHex: '#E11D48'
  },
  {
    id: 'nervoso_central',
    name: 'Sistema Nervoso Central',
    category: 'sistemica',
    structureCount: 88,
    description: 'Encéfalo e medula espinal integrados pelo líquido cerebroespinal e meninges, processando informações sensoriais e cognitivas.',
    iconName: 'Brain',
    colorHex: '#8B5CF6'
  },
  {
    id: 'nervoso_periferico',
    name: 'Sistema Nervoso Periférico',
    category: 'sistemica',
    structureCount: 112,
    description: 'Nervos espinais, gânglios e fibras autônomas simpáticas e parassimpáticas que conectam a periferia ao neuroeixo.',
    iconName: 'Share2',
    colorHex: '#A78BFA'
  },
  {
    id: 'cardiovascular',
    name: 'Sistema Cardiovascular',
    category: 'sistemica',
    structureCount: 180,
    description: 'Coração e leito vascular elástico, muscular e capilar encarregados da perfusão tecidual, transporte de gases e solutos.',
    iconName: 'Heart',
    colorHex: '#EF4444'
  },
  {
    id: 'linfatico',
    name: 'Sistema Linfático',
    category: 'sistemica',
    structureCount: 95,
    description: 'Vasos linfáticos, linfonodos, timo e baço dedicados à drenagem do fluido intersticial e vigilância imunológica.',
    iconName: 'Shield',
    colorHex: '#10B981'
  },
  {
    id: 'respiratorio',
    name: 'Sistema Respiratório',
    category: 'sistemica',
    structureCount: 64,
    description: 'Vias aéreas condutoras (laringe, traqueia, brônquios) e parênquima pulmonar voltados para a hematose alveolar.',
    iconName: 'Wind',
    colorHex: '#06B6D4'
  },
  {
    id: 'digestorio',
    name: 'Sistema Digestório',
    category: 'sistemica',
    structureCount: 120,
    description: 'Tubo gastrointestinal da cavidade oral ao ânus, glândulas salivares, fígado e pâncreas, atuando em motilidade e digestão.',
    iconName: 'Utensils',
    colorHex: '#F59E0B'
  },
  {
    id: 'urinario',
    name: 'Sistema Urinário',
    category: 'sistemica',
    structureCount: 42,
    description: 'Rins, ureteres, bexiga urinária e uretra, responsáveis pela filtração glomerular, regulação hidroeletrolítica e micção.',
    iconName: 'Droplet',
    colorHex: '#FBBF24'
  },
  {
    id: 'endocrino',
    name: 'Sistema Endócrino',
    category: 'sistemica',
    structureCount: 35,
    description: 'Glândulas produtoras de hormônios (hipófise, tireoide, paratireoides, adrenais, ilhotas pancreáticas e gônadas).',
    iconName: 'Zap',
    colorHex: '#EC4899'
  },
  {
    id: 'reprodutor_masculino',
    name: 'Sistema Reprodutor Masculino',
    category: 'sistemica',
    structureCount: 38,
    description: 'Testículos, epidídimos, ductos deferentes, próstata, glândulas bulbouretrais e pênis envolvidos na espermatogênese.',
    iconName: 'UserCheck',
    colorHex: '#3B82F6'
  },
  {
    id: 'reprodutor_feminino',
    name: 'Sistema Reprodutor Feminino',
    category: 'sistemica',
    structureCount: 46,
    description: 'Ovários, tubas uterinas, útero, vagina e genitália externa integrados aos ciclos ovariano e endometrial.',
    iconName: 'HeartHandshake',
    colorHex: '#F472B6'
  },
  {
    id: 'tegumentar',
    name: 'Sistema Tegumentar',
    category: 'sistemica',
    structureCount: 28,
    description: 'Epiderme, derme, hipoderme e anexos cutâneos (pelos, unhas, glândulas sudoríparas e sebáceas) formando a barreira mecânica.',
    iconName: 'Layers',
    colorHex: '#D97706'
  },
  {
    id: 'orgaos_sentidos',
    name: 'Órgãos dos Sentidos',
    category: 'especializada',
    structureCount: 52,
    description: 'Receptores visuais, auditivos, vestibulares, gustatórios e olfatórios que transcodificam estímulos ambientais em potenciais de ação.',
    iconName: 'Eye',
    colorHex: '#6366F1'
  },
  {
    id: 'cabeca_pescoco',
    name: 'Cabeça e Pescoço',
    category: 'regional',
    structureCount: 160,
    description: 'Arcabouço craniofacial, fáscias cervicais, trígonos cervicais e feixes neurovasculares da carótida e jugular.',
    iconName: 'Smile',
    colorHex: '#4F46E5'
  },
  {
    id: 'torax',
    name: 'Tórax',
    category: 'regional',
    structureCount: 110,
    description: 'Parede torácica, cavidades pleuropulmonares e mediastinos superior, anterior, médio e posterior.',
    iconName: 'ShieldAlert',
    colorHex: '#DC2626'
  },
  {
    id: 'abdome',
    name: 'Abdome',
    category: 'regional',
    structureCount: 135,
    description: 'Paredes anterolateral e posterior do abdome, cavidade peritoneal, mesentérios e compartimentos retroperitoneais.',
    iconName: 'Box',
    colorHex: '#B45309'
  },
  {
    id: 'pelve_perineo',
    name: 'Pelve e Períneo',
    category: 'regional',
    structureCount: 90,
    description: 'Cíngulo pélvico ósseo, diafragma da pelve (elevador do ânus), diafragma urogenital e fossa isquioanal.',
    iconName: 'Maximize2',
    colorHex: '#9333EA'
  },
  {
    id: 'membro_superior',
    name: 'Membro Superior',
    category: 'regional',
    structureCount: 145,
    description: 'Cíngulo peitoral, braço, antebraço e mão; compartimentos flexores e extensores, túnel do carpo.',
    iconName: 'Hand',
    colorHex: '#2563EB'
  },
  {
    id: 'membro_inferior',
    name: 'Membro Inferior',
    category: 'regional',
    structureCount: 155,
    description: 'Quadril, coxa, perna e pé; trígono femoral, fossa poplítea, arcos plantares e sustentação de carga.',
    iconName: 'Navigation',
    colorHex: '#1D4ED8'
  },
  {
    id: 'encefalo',
    name: 'Anatomia do Encéfalo',
    category: 'especializada',
    structureCount: 98,
    description: 'Telencéfalo, diencéfalo, tronco encefálico (mesencéfalo, ponte, bulbo), cerebelo e sistema ventricular.',
    iconName: 'Cpu',
    colorHex: '#7C3AED'
  },
  {
    id: 'ocular',
    name: 'Anatomia Ocular',
    category: 'especializada',
    structureCount: 36,
    description: 'Bulbo do olho, túnicas fibrosa, vascular e nervosa, meios transparentes de refração e aparelho lacrimal.',
    iconName: 'EyeOff',
    colorHex: '#0891B2'
  },
  {
    id: 'ouvido',
    name: 'Anatomia do Ouvido',
    category: 'especializada',
    structureCount: 32,
    description: 'Orelha externa, média (com cadeia ossicular) e interna (cóclea e canais semicirculares para audição e equilíbrio).',
    iconName: 'Headphones',
    colorHex: '#0D9488'
  },
  {
    id: 'dental',
    name: 'Anatomia Dental',
    category: 'especializada',
    structureCount: 32,
    description: 'Dentística funcional, esmalte, dentina, polpa, periodonto de inserção e sustentação nas arcadas maxilar e mandibular.',
    iconName: 'Smile',
    colorHex: '#F1F5F9'
  },
  {
    id: 'vasos_sanguineos',
    name: 'Vasos Sanguíneos',
    category: 'especializada',
    structureCount: 140,
    description: 'Ramos aórticos principais, polígono arterial cerebral (Willis), sistema porta-hepático e eixos vasculares periféricos.',
    iconName: 'GitCommit',
    colorHex: '#B91C1C'
  },
  {
    id: 'nervos_cranianos',
    name: 'Nervos Cranianos',
    category: 'especializada',
    structureCount: 12,
    description: 'Os 12 pares de nervos cranianos com suas origens reais no neuroeixo, trajetos foraminais e inervações sensitivo-motoras.',
    iconName: 'GitBranch',
    colorHex: '#9333EA'
  },
  {
    id: 'plexos_nervosos',
    name: 'Plexos Nervosos',
    category: 'especializada',
    structureCount: 24,
    description: 'Redes neurais somáticas cervicais, braquiais, lombares e sacrais, bem como plexos viscerais autônomos (celíaco, hipogástrico).',
    iconName: 'Network',
    colorHex: '#6D28D9'
  },
  {
    id: 'fascias',
    name: 'Fáscias e Bainhas',
    category: 'especializada',
    structureCount: 45,
    description: 'Tecido conjuntivo fibroso de compartimentação muscular, fáscia lata, fáscia tóraco-lombar e fáscias cervicais profunda e pré-traqueal.',
    iconName: 'Grid',
    colorHex: '#64748B'
  },
  {
    id: 'superficie',
    name: 'Anatomia de Superfície',
    category: 'especializada',
    structureCount: 50,
    description: 'Marcos ósseos palpáveis, linhas de orientação clínica (médio-clavicular, axilares) e projeção visceral de ausculta e punção.',
    iconName: 'Compass',
    colorHex: '#0284C7'
  }
];
