# Atlas anatômico 3D — implementação

O visualizador em `src/components/atlas/AtlasViewer.tsx` carrega modelos STL científicos do BodyParts3D. As estruturas compartilham o mesmo sistema de coordenadas, preservando posição, proporção e relações topográficas.

## Conteúdo integrado

- coração, pulmões e traqueia;
- fígado, vesícula biliar, estômago, pâncreas, baço e rins;
- bexiga e próstata;
- cérebro, globo ocular, diafragma e bíceps;
- crânio, coluna cervical/torácica/lombar, costelas, sacro, pelve e ossos longos principais dos membros.

## Recursos do visualizador

- rotação orbital e zoom;
- seleção por clique e foco da câmera;
- isolamento, ocultação e transparência;
- filtros por camada anatômica;
- planos de corte sagital, coronal e transversal;
- vista explodida e captura em PNG;
- indicador de carregamento e mensagem de erro de assets.

Os arquivos ficam em `public/models/bodyparts3d/`. A atribuição e a licença do conjunto científico estão documentadas no README dessa pasta.

## Execução

```bash
npm install
npm run dev
```

O atlas é educacional e não se destina a diagnóstico nem planejamento cirúrgico.
