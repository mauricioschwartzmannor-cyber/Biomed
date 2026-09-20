import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'curso_anatomia_sistemica',
    title: 'Anatomia Sistêmica e Topográfica Humana',
    discipline: 'Anatomia Humana',
    coverImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    instructor: 'Prof. Dr. Arnaldo Silva, PhD (CRBM 0451)',
    modulesCount: 3,
    lessonsCount: 6,
    level: 'Intermediário',
    modules: [
      {
        id: 'mod_torax_mediastino',
        title: 'Módulo 1: Tórax, Mediastino e Compartimentos Viscerais',
        description: 'Topografia e relações espaciais dos órgãos mediastinais e vasculatura da caixa torácica.',
        lessons: [
          {
            id: 'aula_miocardio_pericardio',
            title: 'Aula 1: Arquitetura do Miocárdio e Vasos Coronários',
            durationMinutes: 35,
            type: '3d_interactive',
            description: 'Estudo tridimensional da parede ventricular, septo interventricular e origem dos ramos coronários principais nos seios aórticos.',
            relatedStructureId: 'coracao_miocardio',
            completed: true,
            contentMarkdown: `### Arquitetura do Miocárdio e Vasos Coronários

O miocárdio é composto por feixes entrelaçados de cardiomiócitos dispostos em espirais helicoidais. Essa conformação anatômica permite que, durante a sístole ventricular, o coração sofra um movimento de torção ("wringing motion"), ejetando sangue eficientemente com menor gasto energético.

#### 1. Irrigação Coronariana
- **Artéria Coronária Direita (ACD):** Emerge do seio aórtico anterior (direito). Dá origem ao ramo marginal direito e, na maioria dos indivíduos (70-80%), ao ramo interventricular posterior (dominância direita).
- **Artéria Coronária Esquerda (ACE):** Emerge do seio aórtico posterior esquerdo. Ramifica-se no ramo interventricular anterior (descendente anterior) e no ramo circunflexo.

#### 2. Correlações Biomédicas
A oclusão aterotrombótica aguda da artéria descendente anterior (ADA) é responsável pelos infartos transmurais anteriores graves. Em análises clínicas, a liberação de marcadores de necrose miocárdica (Troponina I, Troponina T e fração MB da Creatinoquinase) confirma a quebra da integridade da membrana sarcolêmica dos cardiomiócitos.`
          },
          {
            id: 'aula_pulmoes_arvore_traqueobronquica',
            title: 'Aula 2: Segmentação Pulmonar e Mecânica Diafragmática',
            durationMinutes: 40,
            type: 'video',
            description: 'Divisão dos 10 segmentos broncopulmonares à direita e 8-10 à esquerda com correlação na ausculta pulmonar e drenagem postural.',
            relatedStructureId: 'pulmao_direito',
            completed: true,
            contentMarkdown: `### Segmentação Broncopulmonar

Cada pulmão é subdividido em segmentos broncopulmonares independentes, supridos por um brônquio segmentar e um ramo da artéria pulmonar correspondente, enquanto as veias intersegmentares correm no septo conjuntivo interlobular.

#### 1. Pulmão Direito (3 Lobos / 10 Segmentos):
- **Lobo Superior:** Apical (S1), Posterior (S2), Anterior (S3).
- **Lobo Médio:** Lateral (S4), Medial (S5).
- **Lobo Inferior:** Superior (S6), Basal Medial (S7), Basal Anterior (S8), Basal Lateral (S9), Basal Posterior (S10).

#### 2. Relevância na Prática em Saúde
Infecções aspirativas com o paciente em decúbito dorsal acometem prioritariamente o segmento superior do lobo inferior (S6) ou os segmentos posteriores (S2) devido à conformação axial dos brônquios segmentares.`
          },
          {
            id: 'aula_diafragma_hiatos',
            title: 'Aula 3: O Músculo Diafragma e seus Hiatos Anatômicos',
            durationMinutes: 28,
            type: 'text',
            description: 'Morfologia dos pilares diafragmáticos, centro tendíneo e passagens para veia cava inferior, esôfago e aorta.',
            relatedStructureId: 'musculo_diafragma',
            completed: false,
            contentMarkdown: `### O Diafragma e suas Aberturas Principais

O músculo diafragma possui três grandes orifícios que permitem a transição de estruturas viscerais e vasculares entre o tórax e o abdome:

| Abertura | Nível Vertebral | Estruturas Transfixadas |
| :--- | :--- | :--- |
| **Forame da Veia Cava** | T8 (Centro tendíneo) | Veia cava inferior (VCI) e ramos do nervo frênico direito |
| **Hiato Esofágico** | T10 (Pilar muscular direito) | Esôfago e troncos vagais anterior e posterior (NC X) |
| **Hiato Aórtico** | T12 (Ligamento arqueado mediano) | Aorta descendente, ducto torácico e veia ázigos |

*Regra Mnemônica Tradicional:* **C**ava = 8 letras (T8), **E**sôfago = 10 letras (T10), **A**órtico = 12 letras (T12).`
          }
        ]
      },
      {
        id: 'mod_abdome_retroperitonio',
        title: 'Módulo 2: Topografia Abdominal e Órgãos Retroperitoneais',
        description: 'Vascularização do tronco celíaco, sistema porta e compartimento retroperitoneal.',
        lessons: [
          {
            id: 'aula_rim_pediculo_vascular',
            title: 'Aula 4: Rins, Pedículo Vascular e Glândulas Suprarrenais',
            durationMinutes: 32,
            type: '3d_interactive',
            description: 'Relações topográficas entre a veia renal esquerda, aorta e artéria mesentérica superior (pinça aortomesentérica).',
            relatedStructureId: 'rim_esquerdo',
            completed: false,
            contentMarkdown: `### Pedículo Renal e Relações Topográficas

No hilo renal, a disposição anteroposterior das estruturas segue a regra "VAP":
1. **V**eia renal (mais anterior);
2. **A**rtéria renal (intermediária);
3. **P**elve renal (mais posterior).

#### 1. A Veia Renal Esquerda e a Síndrome de Nutcracker
A veia renal esquerda tem um trajeto longo (cerca de 7,5 cm), cruzando ventralmente a aorta abdominal e passando sob o ângulo agudo formado pela artéria mesentérica superior. O estreitamento deste ângulo (inferior a 40°) pode comprimir a veia, gerando hematúria macroscópica e varicocele do lado esquerdo.`
          },
          {
            id: 'aula_figado_sistema_porta',
            title: 'Aula 5: Fígado, Segmentação de Couinaud e Sistema Porta',
            durationMinutes: 45,
            type: 'video',
            description: 'Diferenciação anatômica entre lobos funcionais e anatômicos, tríade portal e anastomoses portossistêmicas.',
            relatedStructureId: 'figado_lobos',
            completed: false,
            contentMarkdown: `### Sistema Porta-Hepático e Segmentação de Couinaud

A veia porta é formada na altura de L2 pela confluência da **veia mesentérica superior** com a **veia esplênica**. Ela transporta todo o sangue drenado das vísceras gastrointestinais para os sinusoides hepáticos.

#### 1. Anastomoses Portossistêmicas Críticas:
1. **Esofágica:** Veia gástrica esquerda (porta) anastomosa-se com veias esofágicas inferiores (ázigos/cava) -> Varizes de esôfago.
2. **Retal:** Veia retal superior (porta) com veias retais média e inferior (cava) -> Hemorroidas anorretais.
3. **Umbilical:** Veias paraumbilicais (porta) com veias epigástricas da parede abdominal (cava) -> Cabeça de Medusa.`
          },
          {
            id: 'aula_pancreas_baco',
            title: 'Aula 6: Pâncreas, Baço e Ductos Biliares Extra-hepáticos',
            durationMinutes: 30,
            type: 'text',
            description: 'Confluência biliopancreática na papila duodenal maior (Ampola de Vater) e circulação esplênica.',
            relatedStructureId: 'pancreas',
            completed: false,
            contentMarkdown: `### Complexo Biliopancreático

O ducto colédoco e o ducto pancreático principal (de Wirsung) unem-se na parede medial da segunda porção duodenal para formar a **ampola hepatopancreática (de Vater)**, circundada pelo **esfíncter de Oddi**.

Um cálculo biliar impactado nesta ampola obstrui tanto a drenagem biliar quanto o escoamento das enzimas pancreáticas inativas, podendo deflagrar uma pancreatite aguda biliar potencialmente fatal por ativação enzimática intraglandular prematura.`
          }
        ]
      }
    ]
  },
  {
    id: 'curso_hematologia_clinica',
    title: 'Hematologia Clínica & Morfologia Celular',
    discipline: 'Hematologia',
    coverImage: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
    instructor: 'Profa. Dra. Camila Albuquerque, PhD (CRBM 5120)',
    modulesCount: 2,
    lessonsCount: 4,
    level: 'Avançado',
    modules: [
      {
        id: 'mod_eritropoiese_anemias',
        title: 'Módulo 1: Fisiologia Eritroide e Diagnóstico Laboratorial',
        description: 'Maturação na medula óssea, índices hematimétricos e esfregaço de sangue periférico.',
        lessons: [
          {
            id: 'aula_indices_hematimetricos',
            title: 'Aula 1: Interpretação de VCM, HCM, CHCM e RDW',
            durationMinutes: 30,
            type: 'text',
            description: 'Classificação morfológica das anemias microcíticas, macrocíticas e normocíticas com estudo prático de lâminas.',
            completed: true,
            contentMarkdown: `### Interpretação Clínica dos Índices Hematimétricos de Wintrobe

O eritrograma automatizado fornece parâmetros essenciais para o raciocínio fisiopatológico:

1. **Volume Corpuscular Médio (VCM):** Média do volume das hemácias (80 a 100 fL).
   - *Microcítico (<80 fL):* Deficiência de ferro, talassemia minor, anemia de doença crônica (fase avançada).
   - *Macrocítico (>100 fL):* Deficiência de vitamina B12 / folato (megaloblástica), síndrome mielodisplásica, etilismo crônico.
2. **Hemoglobina Corpuscular Média (HCM):** Massa média de Hb por eritrócito (27 a 32 pg).
3. **Concentração de Hemoglobina Corpuscular Média (CHCM):** Grau de saturação (32 a 36 g/dL).
4. **RDW (Red Cell Distribution Width):** Índice de anisocitose eritrocitária (11,5 a 14,5%). Um RDW elevado (>15%) diferencia a anemia ferropriva clássica da beta-talassemia menor (que costuma manter RDW normal).`
          },
          {
            id: 'aula_esfregaco_citologia',
            title: 'Aula 2: Citologia do Esfregaço e Alterações de Forma (Poiquilocitose)',
            durationMinutes: 38,
            type: '3d_interactive',
            description: 'Identificação de dacriócitos, esquizócitos, esferócitos e drepanócitos ao microscópio de luz.',
            completed: false,
            contentMarkdown: `### Alterações Morfológicas Eritrocitárias

A análise microscópica do esfregaço com coloração panótica (Leishman ou Giemsa) é mandatória para identificar pistas diagnósticas:

- **Esquizócitos (fragmentos de hemácias):** Indicam microangiopatia trombótica (PTT, SHU) ou presença de valvas cardíacas mecânicas.
- **Dacriócitos (células em lágrima):** Sugerem fibrose medular (mielofibrose primária) ou invasão do espaço hematopoético.
- **Drepanócitos (células em foice):** Patognomônicos da Anemia Falciforme (HbSS em hipóxia).
- **Esferócitos:** Células arredondadas sem halo central claro (Esferocitose Hereditária ou anemia hemolítica autoimune Coombs positiva).`
          }
        ]
      },
      {
        id: 'mod_leucocitos_leucemias',
        title: 'Módulo 2: Série Branca e Neoplasias Hematológicas',
        description: 'Diferenciação mieloide e linfoide, desvio à esquerda e imunofenotipagem.',
        lessons: [
          {
            id: 'aula_desvio_esquerda',
            title: 'Aula 3: Neutrofilia e Desvio à Esquerda Reativo vs. Neoplásico',
            durationMinutes: 35,
            type: 'text',
            description: 'Identificação de bastonetes, metamielócitos, mielócitos e granulações tóxicas em sepse bacteriana.',
            completed: false,
            contentMarkdown: `### O Conceito de Desvio à Esquerda

Durante infecções agudas severas, a medula óssea libera precursores neutrofílicos na circulação antes de sua maturação completa:
- **Desvio Escalonado:** Presença ordenada de bastonetes > metamielócitos > mielócitos com predomínio de formas maduras e granulações tóxicas nas lâminas. Caracteriza **reação leucemoide** benigna.
- **Hiato Leucêmico:** Presença simultânea de blastos primitivos e formas maduras sem células intermediárias de transição. É o achado típico de **Leucemia Mieloide Aguda (LMA)**.`
          },
          {
            id: 'aula_hemostasia_coagulacao',
            title: 'Aula 4: Cascata da Coagulação e Testes de Hemostasia',
            durationMinutes: 42,
            type: 'video',
            description: 'Fisiopatologia do Tempo de Protrombina (TP/INR), TTPa e dosagem de D-dímero em trombofilias.',
            completed: false,
            contentMarkdown: `### Modelo Celular da Hemostasia

Substituindo o antigo modelo mecânico em cascata, o modelo celular compreende três fases inter-relacionadas:
1. **Iniciação:** Expressão do Fator Tecidual (FT) na superfície celular com ativação do Fator VII;
2. **Amplificação:** Adesão plaquetária via complexo GPIb-IX-V e fator de von Willebrand com pequenas quantidades de trombina ativando cofatores V, VIII e XI;
3. **Propagação:** Formação dos complexos tenase e protrombinase na superfície fosfatidilserina das plaquetas ativadas, gerando a "explosão de trombina" que cliva o fibrinogênio solúvel em fibrina insolúvel.`
          }
        ]
      }
    ]
  },
  {
    id: 'curso_neuroanatomia_funcional',
    title: 'Neuroanatomia Funcional & Vias Motoras',
    discipline: 'Neuroanatomia',
    coverImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    instructor: 'Profa. Dra. Camila Albuquerque, PhD (CRBM 5120)',
    modulesCount: 1,
    lessonsCount: 2,
    level: 'Iniciante',
    modules: [
      {
        id: 'mod_vias_descendentes',
        title: 'Módulo 1: Vias Piramidais e Controle Motor Voluntário',
        description: 'Trato corticoespinal lateral e anterior, decussação das pirâmides e síndromes motoras.',
        lessons: [
          {
            id: 'aula_trato_corticoespinal',
            title: 'Aula 1: Origem e Trajeto do Trato Corticoespinal',
            durationMinutes: 34,
            type: '3d_interactive',
            description: 'Origem no giro pré-central (área 4 de Brodmann), passagem pela cápsula interna, base do pedúnculo cerebral e decussação bulbar.',
            relatedStructureId: 'cerebro_telencefalo',
            completed: false,
            contentMarkdown: `### O Trato Corticoespinal Lateral

Cerca de 85 a 90% das fibras do trato corticoespinal sofrem decussação na transição bulbomedular (decussação das pirâmides), cruzando para o funículo lateral contralateral da medula espinal.

#### Repercussão Clínica
Uma lesão isquêmica aguda na perna posterior da cápsula interna esquerda provoca hemiplegia flácida e posterior espástica contralateral (no lado direito do corpo) associada a sinal de Babinski positivo (reflexo cutâneo-plantar em extensão).`
          },
          {
            id: 'aula_nervos_cranianos_pares',
            title: 'Aula 2: Topografia dos 12 Pares Cranianos no Tronco Encefálico',
            durationMinutes: 40,
            type: 'text',
            description: 'Origens aparentes no mesencéfalo, ponte e bulbo com correlação semiológica direta dos reflexos pupilares e corneopalpebrais.',
            relatedStructureId: 'nervo_vago_ncx',
            completed: false,
            contentMarkdown: `### Origem Aparente dos Nervos Cranianos

- **Mesencéfalo:** Nervo Oculomotor (NC III) na fossa interpeduncular e Nervo Troclear (NC IV) na face posterior (único par com emergência dorsal).
- **Ponte:** Nervo Trigêmeo (NC V) na face anterolateral; sulco bulbopontino dá origem ao Nervo Abducente (NC VI), Nervo Facial (NC VII) e Nervo Vestibulococlear (NC VIII).
- **Bulbo:** Nervo Glossofaríngeo (NC IX), Nervo Vago (NC X) e Nervo Acessório (NC XI) no sulco posterolateral; Nervo Hipoglosso (NC XII) no sulco pré-olivar.`
          }
        ]
      }
    ]
  }
];
