import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  RotateCcw,
  Camera,
  Maximize2,
  Minimize2,
  Scissors,
  Layers,
  Search,
  Eye,
  EyeOff,
  Sparkles,
  Info,
  HelpCircle,
  Bookmark,
  FileText,
  MessageSquare,
  Share2,
  ChevronRight,
  ChevronLeft,
  X,
  Sliders,
  CheckCircle2,
  Compass,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ANATOMICAL_STRUCTURES, ANATOMICAL_SYSTEMS } from '../../data';
import { AnatomicalStructure } from '../../types';

interface MeshItem {
  id: string;
  name: string;
  category: 'bone' | 'organ' | 'muscle' | 'vessel' | 'nerve';
  mesh: THREE.Mesh;
  basePosition: THREE.Vector3;
  baseColor: number;
  explodeDirection?: THREE.Vector3;
}

type AnatomyAsset = {
  id: string;
  name: string;
  category: MeshItem['category'];
  color: number;
  files: string[];
  opacity?: number;
};

const BODY_PARTS_PATH = '/models/bodyparts3d/';
const ANATOMY_ASSETS: AnatomyAsset[] = [
  { id: 'coracao_miocardio', name: 'Miocárdio', category: 'organ', color: 0xb91c1c, files: ['FMA7274.stl'] },
  { id: 'pulmao_direito', name: 'Pulmão direito', category: 'organ', color: 0xe7a3a3, opacity: 0.92, files: ['FMA7333.stl', 'FMA7337.stl'] },
  { id: 'pulmao_esquerdo', name: 'Pulmão esquerdo', category: 'organ', color: 0xe7a3a3, opacity: 0.92, files: ['FMA7370.stl', 'FMA7371.stl'] },
  { id: 'traqueia', name: 'Traqueia', category: 'organ', color: 0xb8c2cc, files: ['FMA7394.stl'] },
  { id: 'figado_lobos', name: 'Fígado', category: 'organ', color: 0x7f1d1d, files: ['FMA7197.stl'] },
  { id: 'vesicula_biliar', name: 'Vesícula biliar', category: 'organ', color: 0x15803d, files: ['FMA7202.stl'] },
  { id: 'estomago', name: 'Estômago', category: 'organ', color: 0xc77d66, files: ['FMA7148.stl'] },
  { id: 'pancreas', name: 'Pâncreas', category: 'organ', color: 0xeab308, files: ['FMA7198nsn.stl'] },
  { id: 'baco', name: 'Baço', category: 'organ', color: 0x701a75, files: ['FMA7196.stl'] },
  { id: 'rim_esquerdo', name: 'Rins', category: 'organ', color: 0x991b1b, files: ['FMA7205.stl', 'FMA7204.stl'] },
  { id: 'bexiga_urinaria', name: 'Bexiga urinária', category: 'organ', color: 0xd6a43b, opacity: 0.85, files: ['FMA15900.stl'] },
  { id: 'prostata', name: 'Próstata', category: 'organ', color: 0xd97706, files: ['FMA9600.stl'] },
  { id: 'musculo_diafragma', name: 'Diafragma', category: 'muscle', color: 0xbe123c, opacity: 0.88, files: ['FMA13295.stl'] },
  { id: 'cerebro_telencefalo', name: 'Telencéfalo', category: 'nerve', color: 0xc084fc, files: ['FMA61822.stl'] },
  { id: 'olho_globo_ocular', name: 'Globo ocular', category: 'organ', color: 0xdbeafe, files: ['FMA12513.stl'] },
  { id: 'musculo_biceps_braquial', name: 'Bíceps braquial', category: 'muscle', color: 0xe11d48, files: ['FMA37685.stl', 'FMA37687.stl'] },
  {
    id: 'osso_femur', name: 'Esqueleto axial e apendicular', category: 'bone', color: 0xeee9dc,
    files: [
      'FMA52735.stl', 'FMA52734.stl', 'FMA52736.stl', 'FMA52740.stl', 'FMA52748.stl',
      'FMA12519.stl', 'FMA12520.stl', 'FMA12521.stl', 'FMA12522.stl', 'FMA12523.stl', 'FMA12524.stl', 'FMA12525.stl',
      'FMA9165.stl', 'FMA9187.stl', 'FMA9209.stl', 'FMA9248.stl', 'FMA9922.stl', 'FMA9945.stl', 'FMA9968.stl', 'FMA9991.stl', 'FMA10014.stl', 'FMA10037.stl', 'FMA10059.stl', 'FMA10081.stl',
      'FMA13072.stl', 'FMA13073.stl', 'FMA13074.stl', 'FMA13075.stl', 'FMA13076.stl', 'FMA16202.stl',
      'FMA7857.stl', 'FMA7882.stl', 'FMA7909.stl', 'FMA7957.stl', 'FMA7987.stl', 'FMA8012.stl', 'FMA8039.stl', 'FMA8066.stl', 'FMA8093.stl', 'FMA8148.stl', 'FMA8175.stl', 'FMA8202.stl', 'FMA8229.stl', 'FMA8256.stl', 'FMA8283.stl', 'FMA8310.stl', 'FMA8364.stl', 'FMA8391.stl', 'FMA8445.stl', 'FMA8472.stl', 'FMA8531.stl', 'FMA8532.stl', 'FMA8533.stl', 'FMA8534.stl',
      'FMA13322.stl', 'FMA13323.stl', 'FMA13395.stl', 'FMA13396.stl', 'FMA16586.stl', 'FMA16587.stl',
      'FMA23130.stl', 'FMA23131.stl', 'FMA23464.stl', 'FMA23465.stl', 'FMA23467.stl', 'FMA23468.stl',
      'FMA24474.stl', 'FMA24475.stl', 'FMA24477.stl', 'FMA24478.stl', 'FMA24480.stl', 'FMA24481.stl'
    ]
  }
];

export const AtlasViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    selectedStructureId,
    setSelectedStructureId,
    selectedStructure,
    favorites,
    toggleFavorite,
    setActiveTab,
    showToast,
    addNote
  } = useApp();

  // 3D Engine State
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRegistryRef = useRef<Map<string, MeshItem>>(new Map());
  const animationFrameId = useRef<number | null>(null);
  const clippingPlaneRef = useRef<THREE.Plane | null>(null);

  // Interaction controls
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const cameraDistance = useRef(4.8);
  const sphericalCoords = useRef({ radius: 4.8, theta: 0.1, phi: Math.PI / 2.2 });
  const cameraTarget = useRef(new THREE.Vector3(0, 1.2, 0));

  // Visualizer UI State
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activeSystemFilter, setActiveSystemFilter] = useState<string>('all');
  const [explodedView, setExplodedView] = useState(0); // 0 to 100%
  const [globalOpacity, setGlobalOpacity] = useState(100);
  const [isClippingActive, setIsClippingActive] = useState(false);
  const [clippingAxis, setClippingAxis] = useState<'sagittal' | 'coronal' | 'transverse'>('sagittal');
  const [clippingDepth, setClippingDepth] = useState(0); // -1.5 to 1.5
  const [hiddenMeshes, setHiddenMeshes] = useState<Set<string>>(new Set());
  const [isolatedMeshId, setIsolatedMeshId] = useState<string | null>(null);
  const [transparentMeshIds, setTransparentMeshIds] = useState<Set<string>>(new Set());
  const [showLabels, setShowLabels] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTabPanel, setActiveTabPanel] = useState<'info' | 'clinical' | 'vessels' | 'actions'>('info');
  const [activeComparisonId, setActiveComparisonId] = useState<string | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const [quickNoteText, setQuickNoteText] = useState('');
  const [showQuickNoteModal, setShowQuickNoteModal] = useState(false);
  const [modelProgress, setModelProgress] = useState(0);
  const [modelError, setModelError] = useState<string | null>(null);

  // Systems visibility toggles
  const [visibleCategories, setVisibleCategories] = useState({
    bone: true,
    organ: true,
    muscle: true,
    vessel: true,
    nerve: true
  });

  // Filtered structures for the search dropdown
  const filteredStructures = useMemo(() => {
    return ANATOMICAL_STRUCTURES.filter((s) => {
      const matchQuery =
        s.ptName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.latinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.englishName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSystem = activeSystemFilter === 'all' || s.systemId === activeSystemFilter;
      return matchQuery && matchSystem;
    });
  }, [searchTerm, activeSystemFilter]);

  // Initializing Three.js Scene
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc); // Clean neutral off-white
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer setup with clipping enabled
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.localClippingEnabled = true;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.8);
    fillLight.position.set(-5, 4, -5);
    scene.add(fillLight);

    const bottomLight = new THREE.DirectionalLight(0xffffff, 0.5);
    bottomLight.position.set(0, -5, 0);
    scene.add(bottomLight);

    // Grid Floor
    const grid = new THREE.GridHelper(6, 12, 0xcbd5e1, 0xe2e8f0);
    grid.position.y = -1.8;
    scene.add(grid);

    // Clipping plane setup
    const initialPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
    clippingPlaneRef.current = initialPlane;

    // Build demonstrative anatomical geometries
    buildAnatomicalModel(scene, initialPlane);

    // Mouse & Touch Orbit Event Handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      sphericalCoords.current.theta -= deltaX * 0.008;
      sphericalCoords.current.phi = Math.max(0.1, Math.min(Math.PI - 0.1, sphericalCoords.current.phi - deltaY * 0.008));

      updateCameraPosition();
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY * 0.003;
      sphericalCoords.current.radius = Math.max(1.2, Math.min(8.5, sphericalCoords.current.radius + zoomFactor));
      updateCameraPosition();
    };

    // Raycasting for structure selection on click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes: THREE.Mesh[] = [];
      meshRegistryRef.current.forEach((item) => {
        if (item.mesh.visible) meshes.push(item.mesh);
      });

      const intersects = raycaster.intersectObjects(meshes, true);
      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        // Find corresponding structure ID
        let foundId = '';
        meshRegistryRef.current.forEach((item, id) => {
          if (item.mesh === hit || item.mesh.children.includes(hit)) {
            foundId = id;
          }
        });

        if (foundId) {
          setSelectedStructureId(foundId);
          setIsSidebarOpen(true);
        }
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('click', handleClick);

    // Render loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Highlight the selected structure without deforming anatomical coordinates.
      const currentSelected = meshRegistryRef.current.get(selectedStructureId);
      if (currentSelected && currentSelected.mesh.material) {
        const mat = currentSelected.mesh.material as THREE.MeshStandardMaterial;
        mat.emissive.setHex(0x102a43);
        mat.emissiveIntensity = 0.28 + Math.sin(Date.now() * 0.003) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const { width: newW, height: newH } = entries[0].contentRect;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });
    resizeObserver.observe(container);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('click', handleClick);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { radius, theta, phi } = sphericalCoords.current;
    const x = cameraTarget.current.x + radius * Math.sin(phi) * Math.sin(theta);
    const y = cameraTarget.current.y + radius * Math.cos(phi);
    const z = cameraTarget.current.z + radius * Math.sin(phi) * Math.cos(theta);

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(cameraTarget.current);
  };

  // Build the high-fidelity demonstrative anatomical models
  const buildAnatomicalModel = (scene: THREE.Scene, clipPlane: THREE.Plane) => {
    meshRegistryRef.current.clear();

    const loader = new STLLoader();
    const atlasRoot = new THREE.Group();
    atlasRoot.name = 'BodyParts3D scientific atlas';
    scene.add(atlasRoot);

    const loadGeometry = (file: string) =>
      new Promise<THREE.BufferGeometry>((resolve, reject) => {
        loader.load(`${BODY_PARTS_PATH}${file}`, resolve, undefined, reject);
      });

    let completed = 0;
    setModelProgress(1);
    setModelError(null);

    Promise.all(
      ANATOMY_ASSETS.map(async (asset) => {
        const geometries = await Promise.all(asset.files.map(loadGeometry));
        geometries.forEach((geometry) => {
          geometry.computeVertexNormals();
          geometry.deleteAttribute('uv');
        });
        const geometry = geometries.length === 1 ? geometries[0] : mergeGeometries(geometries, false);
        if (!geometry) throw new Error(`Não foi possível combinar ${asset.name}.`);
        geometry.computeBoundingBox();

        const material = new THREE.MeshStandardMaterial({
          color: asset.color,
          roughness: asset.category === 'bone' ? 0.48 : 0.66,
          metalness: 0,
          transparent: (asset.opacity ?? 1) < 1,
          opacity: asset.opacity ?? 1,
          clippingPlanes: isClippingActive ? [clipPlane] : [],
          clipShadows: true,
          side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = asset.name;
        mesh.userData.structureId = asset.id;
        atlasRoot.add(mesh);

        const center = geometry.boundingBox!.getCenter(new THREE.Vector3());
        const bodyCenter = new THREE.Vector3(0, -100, 900);
        const explodeDirection = center.sub(bodyCenter).normalize();
        meshRegistryRef.current.set(asset.id, {
          id: asset.id,
          name: asset.name,
          category: asset.category,
          mesh,
          basePosition: new THREE.Vector3(),
          baseColor: asset.color,
          explodeDirection
        });
        completed += 1;
        setModelProgress(Math.round((completed / ANATOMY_ASSETS.length) * 100));
      })
    )
      .then(() => {
        // BodyParts3D uses Z as the cranio-caudal axis and millimetres.
        atlasRoot.rotation.x = -Math.PI / 2;
        atlasRoot.scale.setScalar(0.00315);
        atlasRoot.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(atlasRoot);
        const center = box.getCenter(new THREE.Vector3());
        atlasRoot.position.sub(center);
        atlasRoot.position.y += 0.25;
        atlasRoot.updateMatrixWorld(true);
        cameraTarget.current.set(0, 0.25, 0);
        updateCameraPosition();
        setModelProgress(100);
      })
      .catch((error: Error) => {
        console.error('Falha ao carregar o atlas BodyParts3D:', error);
        setModelError('Não foi possível carregar os modelos anatômicos. Verifique a pasta public/models/bodyparts3d.');
        setModelProgress(0);
      });

    // The legacy primitive geometry below remains only as source history and is intentionally bypassed.
    return;

    const createMaterial = (color: number, category: string, opacity: number = 1) => {
      return new THREE.MeshStandardMaterial({
        color,
        roughness: category === 'bone' ? 0.35 : 0.6,
        metalness: category === 'bone' ? 0.1 : 0.05,
        transparent: opacity < 1,
        opacity,
        clippingPlanes: isClippingActive ? [clipPlane] : [],
        clipShadows: true,
        side: THREE.DoubleSide
      });
    };

    // 1. Spine / Column & Ribcage (Skeletal Backbone)
    const spineGroup = new THREE.Group();
    for (let i = 0; i < 18; i++) {
      const vertGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.08, 16);
      const vertMesh = new THREE.Mesh(vertGeo, createMaterial(0xf1f5f9, 'bone'));
      vertMesh.position.y = 0.2 + i * 0.11;
      spineGroup.add(vertMesh);
    }
    // Pelvic girdle
    const pelvisGeo = new THREE.TorusGeometry(0.55, 0.18, 12, 24, Math.PI);
    const pelvisMesh = new THREE.Mesh(pelvisGeo, createMaterial(0xf1f5f9, 'bone'));
    pelvisMesh.rotation.x = Math.PI / 2;
    pelvisMesh.position.set(0, 0.2, 0);
    spineGroup.add(pelvisMesh);

    scene.add(spineGroup);

    // 2. Heart (Miocárdio)
    const heartGeo = new THREE.DodecahedronGeometry(0.35, 2);
    const heartMat = createMaterial(0xd90429, 'organ');
    const heartMesh = new THREE.Mesh(heartGeo, heartMat);
    heartMesh.position.set(0.08, 1.38, 0.22);
    heartMesh.scale.set(1, 1.2, 0.9);
    scene.add(heartMesh);
    meshRegistryRef.current.set('coracao_miocardio', {
      id: 'coracao_miocardio',
      name: 'Miocárdio',
      category: 'organ',
      mesh: heartMesh,
      basePosition: heartMesh.position.clone(),
      baseColor: 0xd90429
    });

    // 3. Right Lung
    const rLungGeo = new THREE.CapsuleGeometry(0.32, 0.65, 8, 16);
    const lungMatR = createMaterial(0xfca5a5, 'organ', 0.85);
    const rLungMesh = new THREE.Mesh(rLungGeo, lungMatR);
    rLungMesh.position.set(0.55, 1.45, 0.1);
    rLungMesh.scale.set(1.1, 1, 0.9);
    scene.add(rLungMesh);
    meshRegistryRef.current.set('pulmao_direito', {
      id: 'pulmao_direito',
      name: 'Pulmão Direito',
      category: 'organ',
      mesh: rLungMesh,
      basePosition: rLungMesh.position.clone(),
      baseColor: 0xfca5a5
    });

    // 4. Left Lung
    const lLungGeo = new THREE.CapsuleGeometry(0.28, 0.62, 8, 16);
    const lungMatL = createMaterial(0xfca5a5, 'organ', 0.85);
    const lLungMesh = new THREE.Mesh(lLungGeo, lungMatL);
    lLungMesh.position.set(-0.55, 1.45, 0.1);
    scene.add(lLungMesh);

    // 5. Trachea
    const tracheaGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.65, 16);
    const tracheaMat = createMaterial(0x94a3b8, 'organ');
    const tracheaMesh = new THREE.Mesh(tracheaGeo, tracheaMat);
    tracheaMesh.position.set(0, 1.9, 0.12);
    scene.add(tracheaMesh);
    meshRegistryRef.current.set('traqueia', {
      id: 'traqueia',
      name: 'Traqueia',
      category: 'organ',
      mesh: tracheaMesh,
      basePosition: tracheaMesh.position.clone(),
      baseColor: 0x94a3b8
    });

    // 6. Thyroid Gland
    const thyroidGeo = new THREE.TorusGeometry(0.12, 0.05, 8, 16, Math.PI);
    const thyroidMat = createMaterial(0xf472b6, 'organ');
    const thyroidMesh = new THREE.Mesh(thyroidGeo, thyroidMat);
    thyroidMesh.rotation.z = Math.PI;
    thyroidMesh.position.set(0, 2.05, 0.22);
    scene.add(thyroidMesh);
    meshRegistryRef.current.set('glandula_tireoide', {
      id: 'glandula_tireoide',
      name: 'Glândula Tireoide',
      category: 'organ',
      mesh: thyroidMesh,
      basePosition: thyroidMesh.position.clone(),
      baseColor: 0xf472b6
    });

    // 7. Liver (Fígado)
    const liverGeo = new THREE.ConeGeometry(0.55, 0.5, 16);
    const liverMat = createMaterial(0x8b3a3a, 'organ');
    const liverMesh = new THREE.Mesh(liverGeo, liverMat);
    liverMesh.rotation.z = -Math.PI / 3;
    liverMesh.position.set(0.38, 0.95, 0.18);
    scene.add(liverMesh);
    meshRegistryRef.current.set('figado_lobos', {
      id: 'figado_lobos',
      name: 'Fígado',
      category: 'organ',
      mesh: liverMesh,
      basePosition: liverMesh.position.clone(),
      baseColor: 0x8b3a3a
    });

    // 8. Gallbladder (Vesícula Biliar)
    const gallGeo = new THREE.SphereGeometry(0.1, 12, 12);
    const gallMat = createMaterial(0x15803d, 'organ');
    const gallMesh = new THREE.Mesh(gallGeo, gallMat);
    gallMesh.position.set(0.3, 0.82, 0.32);
    scene.add(gallMesh);
    meshRegistryRef.current.set('vesicula_biliar', {
      id: 'vesicula_biliar',
      name: 'Vesícula Biliar',
      category: 'organ',
      mesh: gallMesh,
      basePosition: gallMesh.position.clone(),
      baseColor: 0x15803d
    });

    // 9. Stomach (Estômago)
    const stomachGeo = new THREE.TorusGeometry(0.28, 0.15, 12, 18, Math.PI * 1.1);
    const stomachMat = createMaterial(0xca8a04, 'organ');
    const stomachMesh = new THREE.Mesh(stomachGeo, stomachMat);
    stomachMesh.rotation.z = Math.PI / 1.5;
    stomachMesh.position.set(-0.25, 0.95, 0.15);
    scene.add(stomachMesh);
    meshRegistryRef.current.set('estomago', {
      id: 'estomago',
      name: 'Estômago',
      category: 'organ',
      mesh: stomachMesh,
      basePosition: stomachMesh.position.clone(),
      baseColor: 0xca8a04
    });

    // 10. Pancreas
    const pancGeo = new THREE.CapsuleGeometry(0.08, 0.38, 6, 12);
    const pancMat = createMaterial(0xeab308, 'organ');
    const pancMesh = new THREE.Mesh(pancGeo, pancMat);
    pancMesh.rotation.z = Math.PI / 2.3;
    pancMesh.position.set(-0.05, 0.85, 0.05);
    scene.add(pancMesh);
    meshRegistryRef.current.set('pancreas', {
      id: 'pancreas',
      name: 'Pâncreas',
      category: 'organ',
      mesh: pancMesh,
      basePosition: pancMesh.position.clone(),
      baseColor: 0xeab308
    });

    // 11. Spleen (Baço)
    const spleenGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const spleenMat = createMaterial(0x701a75, 'organ');
    const spleenMesh = new THREE.Mesh(spleenGeo, spleenMat);
    spleenMesh.position.set(-0.62, 0.98, -0.05);
    scene.add(spleenMesh);
    meshRegistryRef.current.set('baco', {
      id: 'baco',
      name: 'Baço',
      category: 'organ',
      mesh: spleenMesh,
      basePosition: spleenMesh.position.clone(),
      baseColor: 0x701a75
    });

    // 12. Kidneys (Rins Esquerdo e Direito)
    const kidneyGeo = new THREE.SphereGeometry(0.18, 12, 12);
    kidneyGeo.scale(0.8, 1.4, 0.7);
    const kidneyMat = createMaterial(0x991b1b, 'organ');

    const lKidneyMesh = new THREE.Mesh(kidneyGeo, kidneyMat);
    lKidneyMesh.position.set(-0.42, 0.8, -0.15);
    scene.add(lKidneyMesh);
    meshRegistryRef.current.set('rim_esquerdo', {
      id: 'rim_esquerdo',
      name: 'Rim Esquerdo',
      category: 'organ',
      mesh: lKidneyMesh,
      basePosition: lKidneyMesh.position.clone(),
      baseColor: 0x991b1b
    });

    const rKidneyMesh = new THREE.Mesh(kidneyGeo.clone(), kidneyMat);
    rKidneyMesh.position.set(0.42, 0.72, -0.15);
    scene.add(rKidneyMesh);

    // 13. Urinary Bladder (Bexiga Urinária)
    const bladderGeo = new THREE.SphereGeometry(0.22, 14, 14);
    const bladderMat = createMaterial(0xf59e0b, 'organ');
    const bladderMesh = new THREE.Mesh(bladderGeo, bladderMat);
    bladderMesh.position.set(0, 0.28, 0.15);
    scene.add(bladderMesh);
    meshRegistryRef.current.set('bexiga_urinaria', {
      id: 'bexiga_urinaria',
      name: 'Bexiga Urinária',
      category: 'organ',
      mesh: bladderMesh,
      basePosition: bladderMesh.position.clone(),
      baseColor: 0xf59e0b
    });

    // 14. Prostate (Próstata)
    const prostateGeo = new THREE.ConeGeometry(0.12, 0.15, 12);
    const prostateMat = createMaterial(0xd97706, 'organ');
    const prostateMesh = new THREE.Mesh(prostateGeo, prostateMat);
    prostateMesh.rotation.x = Math.PI;
    prostateMesh.position.set(0, 0.12, 0.1);
    scene.add(prostateMesh);
    meshRegistryRef.current.set('prostata', {
      id: 'prostata',
      name: 'Próstata',
      category: 'organ',
      mesh: prostateMesh,
      basePosition: prostateMesh.position.clone(),
      baseColor: 0xd97706
    });

    // 15. Diaphragm Muscle
    const diaphGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.08, 24);
    const diaphMat = createMaterial(0xbe123c, 'muscle', 0.9);
    const diaphMesh = new THREE.Mesh(diaphGeo, diaphMat);
    diaphMesh.position.set(0, 1.15, 0.05);
    scene.add(diaphMesh);
    meshRegistryRef.current.set('musculo_diafragma', {
      id: 'musculo_diafragma',
      name: 'Músculo Diafragma',
      category: 'muscle',
      mesh: diaphMesh,
      basePosition: diaphMesh.position.clone(),
      baseColor: 0xbe123c
    });

    // 16. Aorta (Arteria Aorta Torácica)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.05, 1.45, 0.2),
      new THREE.Vector3(0.05, 1.7, 0.1),
      new THREE.Vector3(-0.08, 1.65, 0),
      new THREE.Vector3(-0.08, 0.7, -0.05),
      new THREE.Vector3(0, 0.25, 0)
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 24, 0.07, 12, false);
    const aortaMat = createMaterial(0xef4444, 'vessel');
    const aortaMesh = new THREE.Mesh(aortaGeo, aortaMat);
    scene.add(aortaMesh);
    meshRegistryRef.current.set('arteria_aorta_toracica', {
      id: 'arteria_aorta_toracica',
      name: 'Artéria Aorta Torácica',
      category: 'vessel',
      mesh: aortaMesh,
      basePosition: aortaMesh.position.clone(),
      baseColor: 0xef4444
    });

    // 17. Brain (Telencéfalo)
    const brainGroup = new THREE.Group();
    const hemisphereGeo = new THREE.SphereGeometry(0.38, 16, 16);
    hemisphereGeo.scale(0.8, 1, 1.1);
    const brainMat = createMaterial(0xc084fc, 'organ');

    const leftHemi = new THREE.Mesh(hemisphereGeo, brainMat);
    leftHemi.position.set(-0.2, 0, 0);
    const rightHemi = new THREE.Mesh(hemisphereGeo, brainMat);
    rightHemi.position.set(0.2, 0, 0);
    brainGroup.add(leftHemi);
    brainGroup.add(rightHemi);
    brainGroup.position.set(0, 2.65, 0.05);

    scene.add(brainGroup);
    meshRegistryRef.current.set('cerebro_telencefalo', {
      id: 'cerebro_telencefalo',
      name: 'Hemisférios Cerebrais',
      category: 'organ',
      mesh: leftHemi,
      basePosition: brainGroup.position.clone(),
      baseColor: 0xc084fc
    });

    // 18. Eye (Bulbo do Olho)
    const eyeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const eyeMat = createMaterial(0xf8fafc, 'organ');
    const eyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    eyeMesh.position.set(-0.22, 2.58, 0.35);

    // Iris detail
    const irisGeo = new THREE.CircleGeometry(0.05, 16);
    const irisMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const irisMesh = new THREE.Mesh(irisGeo, irisMat);
    irisMesh.position.set(0, 0, 0.121);
    eyeMesh.add(irisMesh);

    scene.add(eyeMesh);
    meshRegistryRef.current.set('globo_ocular', {
      id: 'globo_ocular',
      name: 'Bulbo do Olho Esquerdo',
      category: 'organ',
      mesh: eyeMesh,
      basePosition: eyeMesh.position.clone(),
      baseColor: 0x0284c7
    });

    // 19. Left Femur (Fêmur)
    const femurGroup = new THREE.Group();
    const shaftGeo = new THREE.CylinderGeometry(0.08, 0.09, 1.2, 16);
    const boneMat = createMaterial(0xf1f5f9, 'bone');
    const shaftMesh = new THREE.Mesh(shaftGeo, boneMat);
    femurGroup.add(shaftMesh);

    // Head
    const headGeo = new THREE.SphereGeometry(0.15, 14, 14);
    const headMesh = new THREE.Mesh(headGeo, boneMat);
    headMesh.position.set(0.18, 0.55, 0);
    femurGroup.add(headMesh);

    femurGroup.position.set(-0.38, -0.6, 0);
    femurGroup.rotation.z = 0.05;
    scene.add(femurGroup);
    meshRegistryRef.current.set('osso_femur', {
      id: 'osso_femur',
      name: 'Fêmur Esquerdo',
      category: 'bone',
      mesh: shaftMesh,
      basePosition: femurGroup.position.clone(),
      baseColor: 0xf1f5f9
    });

    // 20. Knee Joint (Articulação do Joelho)
    const kneeGeo = new THREE.SphereGeometry(0.16, 12, 12);
    const kneeMat = createMaterial(0x94a3b8, 'bone');
    const kneeMesh = new THREE.Mesh(kneeGeo, kneeMat);
    kneeMesh.position.set(-0.4, -1.25, 0.05);
    scene.add(kneeMesh);
    meshRegistryRef.current.set('articulacao_joelho', {
      id: 'articulacao_joelho',
      name: 'Articulação do Joelho',
      category: 'bone',
      mesh: kneeMesh,
      basePosition: kneeMesh.position.clone(),
      baseColor: 0x94a3b8
    });

    // 21. Biceps Brachii Muscle (Bíceps)
    const bicepsGeo = new THREE.CapsuleGeometry(0.12, 0.55, 8, 16);
    const bicepsMat = createMaterial(0xe11d48, 'muscle');
    const bicepsMesh = new THREE.Mesh(bicepsGeo, bicepsMat);
    bicepsMesh.position.set(-0.85, 1.35, 0.1);
    bicepsMesh.rotation.z = -0.15;
    scene.add(bicepsMesh);
    meshRegistryRef.current.set('musculo_biceps_braquial', {
      id: 'musculo_biceps_braquial',
      name: 'Músculo Bíceps Braquial',
      category: 'muscle',
      mesh: bicepsMesh,
      basePosition: bicepsMesh.position.clone(),
      baseColor: 0xe11d48
    });

    // 22. Vagus Nerve (NC X)
    const vagusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.12, 2.3, 0.08),
      new THREE.Vector3(0.15, 1.85, 0.12),
      new THREE.Vector3(0.12, 1.4, 0.05),
      new THREE.Vector3(0.08, 0.9, 0.08)
    ]);
    const vagusGeo = new THREE.TubeGeometry(vagusCurve, 20, 0.025, 8, false);
    const vagusMat = createMaterial(0xa855f7, 'nerve');
    const vagusMesh = new THREE.Mesh(vagusGeo, vagusMat);
    scene.add(vagusMesh);
    meshRegistryRef.current.set('nervo_vago_ncx', {
      id: 'nervo_vago_ncx',
      name: 'Nervo Vago (NC X)',
      category: 'nerve',
      mesh: vagusMesh,
      basePosition: vagusMesh.position.clone(),
      baseColor: 0xa855f7
    });
  };

  // Update clipping plane whenever axis, depth, or toggle changes
  useEffect(() => {
    if (!rendererRef.current) return;
    rendererRef.current.localClippingEnabled = isClippingActive;

    let normal = new THREE.Vector3(1, 0, 0); // Sagittal (X)
    if (clippingAxis === 'coronal') {
      normal = new THREE.Vector3(0, 0, 1); // Coronal (Z)
    } else if (clippingAxis === 'transverse') {
      normal = new THREE.Vector3(0, 1, 0); // Transverse (Y)
    }

    const plane = new THREE.Plane(normal, -clippingDepth);
    clippingPlaneRef.current = plane;

    meshRegistryRef.current.forEach((item) => {
      if (item.mesh.material) {
        const mat = item.mesh.material as THREE.MeshStandardMaterial;
        mat.clippingPlanes = isClippingActive ? [plane] : [];
        mat.needsUpdate = true;
      }
    });
  }, [isClippingActive, clippingAxis, clippingDepth]);

  // Update exploded view separation
  useEffect(() => {
    const factor = explodedView / 100;
    meshRegistryRef.current.forEach((item) => {
      const dir = item.explodeDirection || item.basePosition.clone().normalize();
      item.mesh.position.copy(item.basePosition).addScaledVector(dir, factor * 170);
    });
  }, [explodedView]);

  useEffect(() => {
    meshRegistryRef.current.forEach((item, id) => {
      const mat = item.mesh.material as THREE.MeshStandardMaterial;
      if (!mat?.emissive || id === selectedStructureId) return;
      mat.emissive.setHex(0x000000);
      mat.emissiveIntensity = 0;
    });
  }, [selectedStructureId]);

  // Update Category Visibility & Isolation
  useEffect(() => {
    meshRegistryRef.current.forEach((item, id) => {
      // If isolated, only show the isolated item
      if (isolatedMeshId) {
        item.mesh.visible = id === isolatedMeshId;
        return;
      }

      // Check category toggles
      const catVisible = visibleCategories[item.category];
      const isIndividuallyHidden = hiddenMeshes.has(id);
      item.mesh.visible = catVisible && !isIndividuallyHidden;

      // Update Opacity & Transparency
      if (item.mesh.material) {
        const mat = item.mesh.material as THREE.MeshStandardMaterial;
        const isSemiTransparent = transparentMeshIds.has(id);
        mat.transparent = isSemiTransparent || globalOpacity < 100;
        mat.opacity = isSemiTransparent ? 0.25 : globalOpacity / 100;
        mat.needsUpdate = true;
      }
    });
  }, [visibleCategories, hiddenMeshes, isolatedMeshId, transparentMeshIds, globalOpacity]);

  // Camera presets
  const setViewPreset = (preset: 'anterior' | 'posterior' | 'left' | 'right' | 'superior' | 'inferior' | 'reset') => {
    switch (preset) {
      case 'anterior':
        sphericalCoords.current = { radius: 4.8, theta: 0, phi: Math.PI / 2 };
        break;
      case 'posterior':
        sphericalCoords.current = { radius: 4.8, theta: Math.PI, phi: Math.PI / 2 };
        break;
      case 'left':
        sphericalCoords.current = { radius: 4.8, theta: -Math.PI / 2, phi: Math.PI / 2 };
        break;
      case 'right':
        sphericalCoords.current = { radius: 4.8, theta: Math.PI / 2, phi: Math.PI / 2 };
        break;
      case 'superior':
        sphericalCoords.current = { radius: 4.5, theta: 0, phi: 0.1 };
        break;
      case 'inferior':
        sphericalCoords.current = { radius: 4.5, theta: 0, phi: Math.PI - 0.1 };
        break;
      case 'reset':
        sphericalCoords.current = { radius: 4.8, theta: 0.1, phi: Math.PI / 2.2 };
        cameraTarget.current.set(0, 0.25, 0);
        setExplodedView(0);
        setGlobalOpacity(100);
        setIsClippingActive(false);
        setIsolatedMeshId(null);
        setHiddenMeshes(new Set());
        setTransparentMeshIds(new Set());
        break;
    }
    updateCameraPosition();
    showToast(`Visualização ajustada: ${preset.toUpperCase()}`, 'info');
  };

  // Center camera onto the selected structure
  const focusOnSelectedStructure = () => {
    const item = meshRegistryRef.current.get(selectedStructureId);
    if (!item) return;
    new THREE.Box3().setFromObject(item.mesh).getCenter(cameraTarget.current);
    sphericalCoords.current.radius = 2.4;
    updateCameraPosition();
    showToast(`Câmera focada em: ${item.name}`, 'info');
  };

  // Capture snapshot image
  const captureSnapshot = () => {
    if (!rendererRef.current) return;
    const dataUrl = rendererRef.current.domElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `anatomia360_${selectedStructureId}_${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
    showToast('Captura em alta resolução baixada com sucesso!', 'success');
  };

  // Toggle Isolation
  const toggleIsolate = (id: string) => {
    if (isolatedMeshId === id) {
      setIsolatedMeshId(null);
      showToast('Modo de isolamento desativado.', 'info');
    } else {
      setIsolatedMeshId(id);
      showToast(`Estrutura isolada: ${selectedStructure?.ptName}`, 'success');
    }
  };

  // Toggle Hide / Show
  const toggleHide = (id: string) => {
    setHiddenMeshes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Estrutura tornada visível.', 'info');
      } else {
        next.add(id);
        showToast('Estrutura ocultada.', 'info');
      }
      return next;
    });
  };

  // Toggle Transparency
  const toggleTransparent = (id: string) => {
    setTransparentMeshIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Opacidade restaurada.', 'info');
      } else {
        next.add(id);
        showToast('Estrutura configurada como semitransparente.', 'info');
      }
      return next;
    });
  };

  const handleSaveQuickNote = () => {
    if (!quickNoteText.trim()) return;
    addNote({
      structureId: selectedStructureId,
      title: `Nota: ${selectedStructure?.ptName || 'Estrutura Anatômica'}`,
      content: quickNoteText,
      tags: [selectedStructure?.systemId || 'Geral', 'Atlas3D']
    });
    setQuickNoteText('');
    setShowQuickNoteModal(false);
  };

  const currentStructure = selectedStructure || ANATOMICAL_STRUCTURES[0];
  const isFav = favorites.includes(selectedStructureId);
  const comparisonStructure = ANATOMICAL_STRUCTURES.find((s) => s.id === activeComparisonId);

  return (
    <div className="relative w-full h-[calc(100vh-4.5rem)] flex overflow-hidden bg-slate-900 text-slate-100">
      {/* 3D Canvas Viewport */}
      <div className="relative flex-1 h-full select-none" ref={containerRef}>
        {/* Scientific dataset attribution */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-cyan-500/30 text-xs shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wide text-cyan-300">ATLAS 3D VIRTUAL</span>
          <span className="text-slate-400">|</span>
          <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">
            BodyParts3D · CC BY-SA 2.1 JP
          </span>
        </div>

        {modelProgress < 100 && !modelError && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm pointer-events-none">
            <div className="w-80 rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 shadow-2xl">
              <div className="text-sm font-semibold text-cyan-200">Carregando anatomia científica 3D</div>
              <div className="mt-1 text-xs text-slate-400">Órgãos, músculos e ossos em coordenadas anatômicas reais</div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-cyan-400 transition-all" style={{ width: `${modelProgress}%` }} />
              </div>
              <div className="mt-2 text-right text-xs font-mono text-cyan-300">{modelProgress}%</div>
            </div>
          </div>
        )}

        {modelError && (
          <div className="absolute left-1/2 top-24 z-30 -translate-x-1/2 rounded-xl border border-rose-500/40 bg-rose-950/90 px-4 py-3 text-sm text-rose-100 shadow-xl">
            {modelError}
          </div>
        )}

        {/* Top Floating Control Bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-xl">
          <button
            onClick={() => setViewPreset('anterior')}
            className="px-2.5 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300 hover:text-white"
            title="Vista Anterior"
          >
            Anterior
          </button>
          <button
            onClick={() => setViewPreset('posterior')}
            className="px-2.5 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300 hover:text-white"
            title="Vista Posterior"
          >
            Posterior
          </button>
          <button
            onClick={() => setViewPreset('left')}
            className="px-2.5 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300 hover:text-white"
            title="Lateral Esquerda"
          >
            Lateral E.
          </button>
          <button
            onClick={() => setViewPreset('right')}
            className="px-2.5 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300 hover:text-white"
            title="Lateral Direita"
          >
            Lateral D.
          </button>
          <button
            onClick={() => setViewPreset('superior')}
            className="px-2.5 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300 hover:text-white"
            title="Vista Superior"
          >
            Superior
          </button>
          <button
            onClick={() => setViewPreset('inferior')}
            className="px-2.5 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300 hover:text-white"
            title="Vista Inferior"
          >
            Inferior
          </button>

          <div className="w-px h-4 bg-slate-700 mx-1" />

          {/* Gender Switch */}
          <button
            onClick={() => setGender(gender === 'male' ? 'female' : 'male')}
            className="px-2 py-1 text-xs font-semibold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 hover:bg-cyan-900 transition"
          >
            {gender === 'male' ? '♂ Masculino' : '♀ Feminino'}
          </button>

          <div className="w-px h-4 bg-slate-700 mx-1" />

          {/* Action Icons */}
          <button
            onClick={focusOnSelectedStructure}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition"
            title="Centralizar Estrutura Selecionada"
          >
            <Compass className="w-4 h-4" />
          </button>
          <button
            onClick={captureSnapshot}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition"
            title="Capturar Foto 3D em PNG"
          >
            <Camera className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewPreset('reset')}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-rose-400 transition"
            title="Restaurar Visão Padrão"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Left Floating Tools (Explode, Clipping, Layers) */}
        <div className="absolute left-4 top-20 z-10 flex flex-col gap-2.5">
          {/* Quick Search Structure */}
          <div className="relative w-64 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 p-2 shadow-xl">
            <div className="flex items-center gap-2 px-2 py-1 bg-slate-900 rounded-lg border border-slate-700/60">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar estrutura (ex: Rim, Aorta)..."
                className="w-full bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-500"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Search Dropdown */}
            {searchTerm && (
              <div className="mt-2 max-h-56 overflow-y-auto space-y-1 pr-1 text-xs">
                {filteredStructures.length === 0 ? (
                  <div className="py-2 text-center text-slate-500 text-[11px]">Nenhuma estrutura encontrada</div>
                ) : (
                  filteredStructures.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedStructureId(s.id);
                        setSearchTerm('');
                        setIsSidebarOpen(true);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition ${
                        selectedStructureId === s.id
                          ? 'bg-cyan-900/60 text-cyan-200 font-semibold'
                          : 'hover:bg-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div>
                        <div>{s.ptName}</div>
                        <div className="text-[10px] text-slate-500 italic">{s.latinName}</div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Explode & Opacity Controls */}
          <div className="w-64 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 p-3 shadow-xl space-y-3">
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" /> Separar Camadas (Explodir)
                </span>
                <span className="text-[11px] text-cyan-400 font-mono">{explodedView}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={explodedView}
                onChange={(e) => setExplodedView(Number(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Eye className="w-3.5 h-3.5 text-indigo-400" /> Transparência Global
                </span>
                <span className="text-[11px] text-indigo-400 font-mono">{globalOpacity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={globalOpacity}
                onChange={(e) => setGlobalOpacity(Number(e.target.value))}
                className="w-full accent-indigo-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Anatomical Cutting / Clipping Planes */}
          <div className="w-64 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 p-3 shadow-xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                <Scissors className="w-3.5 h-3.5 text-rose-400" /> Corte Anatômico (Clipping)
              </span>
              <button
                onClick={() => setIsClippingActive(!isClippingActive)}
                className={`px-2 py-0.5 text-[11px] rounded font-bold transition ${
                  isClippingActive ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {isClippingActive ? 'ATIVO' : 'INATIVO'}
              </button>
            </div>

            {isClippingActive && (
              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-3 gap-1">
                  <button
                    onClick={() => setClippingAxis('sagittal')}
                    className={`py-1 text-[11px] rounded font-medium border transition ${
                      clippingAxis === 'sagittal'
                        ? 'bg-rose-950/70 border-rose-500 text-rose-200'
                        : 'border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Sagital
                  </button>
                  <button
                    onClick={() => setClippingAxis('coronal')}
                    className={`py-1 text-[11px] rounded font-medium border transition ${
                      clippingAxis === 'coronal'
                        ? 'bg-rose-950/70 border-rose-500 text-rose-200'
                        : 'border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Coronal
                  </button>
                  <button
                    onClick={() => setClippingAxis('transverse')}
                    className={`py-1 text-[11px] rounded font-medium border transition ${
                      clippingAxis === 'transverse'
                        ? 'bg-rose-950/70 border-rose-500 text-rose-200'
                        : 'border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Transversal
                  </button>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Profundidade do Plano</span>
                    <span className="font-mono text-rose-300">{clippingDepth.toFixed(2)} m</span>
                  </div>
                  <input
                    type="range"
                    min="-1.2"
                    max="1.2"
                    step="0.05"
                    value={clippingDepth}
                    onChange={(e) => setClippingDepth(Number(e.target.value))}
                    className="w-full accent-rose-500 h-1.5 bg-slate-800 rounded cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* System Category Toggles */}
          <div className="w-64 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 p-2.5 shadow-xl">
            <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
              <span>Camadas do Organismo</span>
              <button
                onClick={() =>
                  setVisibleCategories({
                    bone: true,
                    organ: true,
                    muscle: true,
                    vessel: true,
                    nerve: true
                  })
                }
                className="text-[10px] text-cyan-400 hover:underline"
              >
                Todas
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => setVisibleCategories((p) => ({ ...p, bone: !p.bone }))}
                className={`px-2 py-1.5 rounded flex items-center justify-between border ${
                  visibleCategories.bone
                    ? 'bg-slate-800 border-slate-600 text-slate-200 font-medium'
                    : 'border-slate-900 bg-slate-950 text-slate-600'
                }`}
              >
                <span>Esqueleto</span>
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </button>
              <button
                onClick={() => setVisibleCategories((p) => ({ ...p, organ: !p.organ }))}
                className={`px-2 py-1.5 rounded flex items-center justify-between border ${
                  visibleCategories.organ
                    ? 'bg-red-950/50 border-red-800/80 text-red-200 font-medium'
                    : 'border-slate-900 bg-slate-950 text-slate-600'
                }`}
              >
                <span>Vísceras</span>
                <span className="w-2 h-2 rounded-full bg-red-400" />
              </button>
              <button
                onClick={() => setVisibleCategories((p) => ({ ...p, muscle: !p.muscle }))}
                className={`px-2 py-1.5 rounded flex items-center justify-between border ${
                  visibleCategories.muscle
                    ? 'bg-rose-950/50 border-rose-800/80 text-rose-200 font-medium'
                    : 'border-slate-900 bg-slate-950 text-slate-600'
                }`}
              >
                <span>Músculos</span>
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </button>
              <button
                onClick={() => setVisibleCategories((p) => ({ ...p, vessel: !p.vessel }))}
                className={`px-2 py-1.5 rounded flex items-center justify-between border ${
                  visibleCategories.vessel
                    ? 'bg-amber-950/50 border-amber-800/80 text-amber-200 font-medium'
                    : 'border-slate-900 bg-slate-950 text-slate-600'
                }`}
              >
                <span>Vasos</span>
                <span className="w-2 h-2 rounded-full bg-red-500" />
              </button>
              <button
                onClick={() => setVisibleCategories((p) => ({ ...p, nerve: !p.nerve }))}
                className={`px-2 py-1.5 rounded flex items-center justify-between border col-span-2 ${
                  visibleCategories.nerve
                    ? 'bg-purple-950/50 border-purple-800/80 text-purple-200 font-medium'
                    : 'border-slate-900 bg-slate-950 text-slate-600'
                }`}
              >
                <span>Nervos & Encéfalo</span>
                <span className="w-2 h-2 rounded-full bg-purple-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Hints */}
        <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-400">
          <span>🖱️ Clique e arraste para girar em 360°</span>
          <span>•</span>
          <span>📜 Rolagem do mouse para aproximar</span>
          <span>•</span>
          <span>🎯 Clique em uma estrutura para abrir sua ficha científica</span>
        </div>
      </div>

      {/* Right Structure Information Panel / Drawer */}
      <div
        className={`relative z-20 h-full bg-slate-950 border-l border-slate-800 transition-all duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? 'w-full md:w-[460px]' : 'w-0 overflow-hidden border-none'
        }`}
      >
        {/* Panel Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                {currentStructure.region.replace('_', ' ').toUpperCase()}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                ID: {currentStructure.model3DMapping.meshId}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">{currentStructure.ptName}</h2>
            <p className="text-xs text-slate-400 italic">
              {currentStructure.latinName} • {currentStructure.englishName}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => toggleFavorite(currentStructure.id)}
              className={`p-2 rounded-lg transition ${
                isFav ? 'text-amber-400 bg-amber-950/40' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
              title={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
              title="Fechar painel lateral"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Action Tools Toolbar for Structure */}
        <div className="px-4 py-2 border-b border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => toggleIsolate(currentStructure.id)}
              className={`px-2.5 py-1 rounded font-medium transition ${
                isolatedMeshId === currentStructure.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isolatedMeshId === currentStructure.id ? 'Restaurar' : 'Isolar'}
            </button>

            <button
              onClick={() => toggleHide(currentStructure.id)}
              className={`px-2.5 py-1 rounded font-medium transition ${
                hiddenMeshes.has(currentStructure.id)
                  ? 'bg-rose-900 text-rose-200'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {hiddenMeshes.has(currentStructure.id) ? 'Exibir' : 'Ocultar'}
            </button>

            <button
              onClick={() => toggleTransparent(currentStructure.id)}
              className={`px-2.5 py-1 rounded font-medium transition ${
                transparentMeshIds.has(currentStructure.id)
                  ? 'bg-indigo-900 text-indigo-200'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Transparência
            </button>
          </div>

          <button
            onClick={focusOnSelectedStructure}
            className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px]"
          >
            <Compass className="w-3.5 h-3.5" /> Focar Câmera
          </button>
        </div>

        {/* Navigation Tabs in Panel */}
        <div className="flex border-b border-slate-800 bg-slate-900/40 text-xs">
          <button
            onClick={() => setActiveTabPanel('info')}
            className={`flex-1 py-2.5 font-medium border-b-2 transition ${
              activeTabPanel === 'info'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTabPanel('vessels')}
            className={`flex-1 py-2.5 font-medium border-b-2 transition ${
              activeTabPanel === 'vessels'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Vascular & Nervoso
          </button>
          <button
            onClick={() => setActiveTabPanel('clinical')}
            className={`flex-1 py-2.5 font-medium border-b-2 transition ${
              activeTabPanel === 'clinical'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Clínica & Exames
          </button>
          <button
            onClick={() => setActiveTabPanel('actions')}
            className={`flex-1 py-2.5 font-medium border-b-2 transition ${
              activeTabPanel === 'actions'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Estudo
          </button>
        </div>

        {/* Panel Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs leading-relaxed text-slate-300">
          {activeTabPanel === 'info' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">Descrição Morfológica</h4>
                <p className="text-slate-200 leading-normal">{currentStructure.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 text-[10px] block">Localização Topográfica</span>
                  <span className="text-slate-200 font-medium">{currentStructure.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Lateralidade</span>
                  <span className="text-slate-200 font-medium capitalize">{currentStructure.laterality}</span>
                </div>
                {currentStructure.dimensions && (
                  <div className="col-span-2 pt-2 border-t border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Dimensões Médias</span>
                    <span className="text-slate-200 font-medium">{currentStructure.dimensions}</span>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">Função Fisiológica</h4>
                <p className="text-slate-200 leading-normal">{currentStructure.function}</p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">Relações Anatômicas e Vizinhança</h4>
                <p className="text-slate-300">{currentStructure.relations}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {currentStructure.neighboringStructures.map((neigh, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                      {neigh}
                    </span>
                  ))}
                </div>
              </div>

              {currentStructure.variations && (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                  <span className="font-semibold text-amber-300 block mb-0.5">Variações Anatômicas Conhecidas:</span>
                  <span className="text-slate-400">{currentStructure.variations}</span>
                </div>
              )}
            </div>
          )}

          {activeTabPanel === 'vessels' && (
            <div className="space-y-4">
              {currentStructure.vascularization && (
                <div className="space-y-2.5">
                  <div className="bg-red-950/20 border border-red-900/40 p-3 rounded-xl">
                    <h5 className="font-bold text-red-400 text-xs mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" /> Irrigação Arterial
                    </h5>
                    <p className="text-slate-300">{currentStructure.vascularization.arterial}</p>
                  </div>

                  <div className="bg-blue-950/20 border border-blue-900/40 p-3 rounded-xl">
                    <h5 className="font-bold text-blue-400 text-xs mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" /> Drenagem Venosa
                    </h5>
                    <p className="text-slate-300">{currentStructure.vascularization.venous}</p>
                  </div>

                  <div className="bg-emerald-950/20 border border-emerald-900/40 p-3 rounded-xl">
                    <h5 className="font-bold text-emerald-400 text-xs mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Drenagem Linfática
                    </h5>
                    <p className="text-slate-300">{currentStructure.vascularization.lymphatic}</p>
                  </div>
                </div>
              )}

              {currentStructure.innervation && (
                <div className="bg-purple-950/20 border border-purple-900/40 p-3 rounded-xl">
                  <h5 className="font-bold text-purple-400 text-xs mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500" /> Inervação (Somática / Autonômica)
                  </h5>
                  <p className="text-slate-300">{currentStructure.innervation}</p>
                </div>
              )}

              {currentStructure.muscularOriginInsertion && (
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <h5 className="font-bold text-slate-200 text-xs mb-1">Origem & Inserção Muscular</h5>
                  <p className="text-slate-300">{currentStructure.muscularOriginInsertion}</p>
                  {currentStructure.muscularAction && (
                    <div className="mt-2 pt-2 border-t border-slate-800">
                      <span className="font-semibold text-cyan-400">Ação Mecânica: </span>
                      <span>{currentStructure.muscularAction}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTabPanel === 'clinical' && (
            <div className="space-y-4">
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">Aplicações Clínicas & Semiologia</h4>
                <p className="text-slate-200 leading-relaxed">{currentStructure.clinicalApplications}</p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-2">Principais Patologias Relacionadas</h4>
                <div className="space-y-1.5">
                  {currentStructure.relatedPathologies.map((pat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-rose-950/20 border border-rose-900/30 text-rose-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>{pat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">Exames Utilizados para Avaliação</h4>
                <div className="space-y-1.5">
                  {currentStructure.evaluationExams.map((exam, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-amber-950/20 border border-amber-900/30 text-amber-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{exam}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Curation Info */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Conteúdo Cientificamente Revisado
                </div>
                <div className="text-slate-400">{currentStructure.curation.reviewerName}</div>
                <div className="text-slate-500 text-[10px]">Data da revisão: {currentStructure.curation.revisionDate}</div>
              </div>
            </div>
          )}

          {activeTabPanel === 'actions' && (
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-800/40 rounded-xl space-y-2">
                <div className="font-semibold text-cyan-300 text-xs flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" /> Tutor IA Especializado
                </div>
                <p className="text-slate-300 text-[11px]">
                  Converse com o Gemini sobre a vascularização, relações anatômicas ou correlação clínica de {currentStructure.ptName}.
                </p>
                <button
                  onClick={() => setActiveTab('tutor')}
                  className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Perguntar ao Tutor IA
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setShowQuickNoteModal(true)}
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="font-medium text-slate-200">Criar Anotação</span>
                </button>

                <button
                  onClick={() => setActiveTab('flashcards')}
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition"
                >
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span className="font-medium text-slate-200">Ver Flashcards</span>
                </button>

                <button
                  onClick={() => setActiveTab('questoes')}
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center col-span-2 transition"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium text-slate-200">Responder Questões sobre esta Estrutura</span>
                </button>
              </div>

              {/* Compare with another structure */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-slate-400 text-[11px] block mb-1">Comparar com outra estrutura:</span>
                <select
                  value={activeComparisonId || ''}
                  onChange={(e) => setActiveComparisonId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-slate-200 outline-none"
                >
                  <option value="">Selecione para comparar...</option>
                  {ANATOMICAL_STRUCTURES.filter((s) => s.id !== currentStructure.id).map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.ptName} ({s.systemId})
                    </option>
                  ))}
                </select>

                {comparisonStructure && (
                  <div className="mt-2 p-2.5 rounded-lg bg-slate-900/80 border border-cyan-800/40 text-xs space-y-1">
                    <span className="font-bold text-cyan-300 block">{comparisonStructure.ptName}</span>
                    <p className="text-slate-300 text-[11px]">{comparisonStructure.description}</p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                      Relações: {comparisonStructure.relations}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Toggle Button when Drawer is closed */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute right-4 top-4 z-20 p-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl shadow-2xl transition flex items-center gap-2 text-xs font-semibold"
        >
          <Info className="w-4 h-4" /> Detalhes da Peça
        </button>
      )}

      {/* Quick Note Modal */}
      {showQuickNoteModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" /> Nova Anotação Científica
              </h3>
              <button onClick={() => setShowQuickNoteModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-slate-400">
              Vinculada à estrutura: <span className="font-semibold text-cyan-300">{currentStructure.ptName}</span>
            </div>

            <textarea
              rows={4}
              value={quickNoteText}
              onChange={(e) => setQuickNoteText(e.target.value)}
              placeholder="Digite suas observações anatômicas, mnemônicos ou lembretes de prova..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-cyan-400"
            />

            <div className="flex justify-end gap-2 text-xs font-medium">
              <button
                onClick={() => setShowQuickNoteModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveQuickNote}
                className="px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 font-semibold"
              >
                Salvar Anotação
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
