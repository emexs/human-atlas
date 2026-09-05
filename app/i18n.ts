// Switchable UI localization: English + Argentine Spanish (es-AR, voseo).
//
// Anatomical concept names stay in English because they come straight from the
// BodyParts3D dataset. Everything around them — chrome, system names,
// explanations, workout guides — is translated. Workouts live in workouts.ts
// (English) with the Spanish overlay in workouts-es.ts.

import {EXPLANATIONS,SYSTEMS,explanation as baseExplanation,type Locale,type SystemId,type View} from './anatomy';

const en = {
  eyebrow: 'INTERACTIVE ANATOMY',
  modeledPieces: 'modeled pieces',
  findStructure: 'Find a structure',
  aboutAtlas: 'About this atlas',
  explorerPanels: 'Explorer panels',
  systems: 'Systems',
  closeSystems: 'Close systems',
  all: 'All',
  skeleton: 'Skeleton',
  workout: 'Workout',
  workoutTip: 'Show only muscles, skeleton and connective tissue',
  organs: 'Organs',
  piecesVisible: 'pieces visible',
  hideAll: 'Hide all',
  floorPlatform: 'Floor platform',
  showFloor: 'Show floor platform',
  layersAria: 'Anatomical layers',
  findAnatomy: 'Find anatomy',
  searchAnatomy: 'Search anatomy',
  closeSearch: 'Close search',
  searchPlaceholder: 'Heart, femur, cranial nerve…',
  searchAria: 'Search named anatomical structures',
  noMatch: 'No structures match your search.',
  searchRefine: 'Showing up to 80 matches. Refine your search to find smaller structures.',
  searchStart: 'Start with a major organ, or search every named structure.',
  piece: 'piece',
  pieces: 'pieces',
  cameraControls: 'Camera controls',
  autoRotate: 'Auto rotate',
  pauseRotation: 'Pause rotation',
  rotateBody: 'Rotate body',
  resetViewLayers: 'Reset view and layers',
  reset: 'Reset',
  selectedStructure: 'SELECTED STRUCTURE',
  inventory: 'ANATOMICAL INVENTORY',
  separated: 'SEPARATED STRUCTURES',
  adultMale: 'ADULT HUMAN · MALE',
  openLayers: 'Open system layers',
  explodeLabel: 'Explode anatomy',
  assembled: 'Assembled',
  everyPiece: 'Every piece',
  assembleReset: 'Assemble and reset',
  dragPan: 'Drag to pan',
  dragOrbit: 'Drag to orbit',
  pinchZoom: 'Pinch to zoom',
  tapInspect: 'Tap to inspect',
  sourceCredits: 'Source & credits',
  preparing: 'Preparing the anatomy',
  loadingWord: 'Loading',
  catalogError: 'The anatomy catalogue could not be loaded.',
  reloadViewer: 'Reload viewer',
  contextNote: 'System overview · structure identified from source anatomy',
  atlasRef: 'Atlas reference',
  selectedPieces: 'Selected pieces',
  includedStructures: 'Included structures',
  viewSource: 'View anatomical source',
  isolate: 'Isolate structure',
  showSurrounding: 'Show surrounding anatomy',
  clearSelection: 'Clear selection',
  trainingNote: 'Training note',
  stretchIt: 'How to stretch this muscle',
  demo: 'demonstration',
  fullGuide: 'Full guide on wger.de',
  wgerCredit: 'Illustration: wger.de / Everkinetic (free licence, see source).',
  workoutSafetyStart: 'Start light, stay pain-free, stop if anything hurts.',
  workoutEdu: 'Educational only - not medical advice.',
  close: 'Close',
  aboutEyebrow: 'SOURCE & SCOPE',
  aboutTitle: 'A body, revealed.',
  aboutDesc: 'Explore the adult male reference anatomy from BodyParts3D.',
  aboutP1a: 'Male · BodyParts3D',
  aboutP1b: '2,234 individual meshes and 3,432 named concepts from an adult male reference anatomy.',
  aboutP2: 'This reference does not contain every human structure or variation. Named concepts can contain multiple pieces; each source mesh is rendered once.',
  aboutP3: 'Colors and system groupings are designed for exploration. The geometry is simplified for the web, and short explanations provide general educational context. This is an anatomical reference, not a diagnostic or surgical tool.',
  sourceH: 'Source',
  aboutSourceBody: 'BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.',
  licenseLink: 'Dataset license',
  geometryLink: 'Original geometry & metadata',
  pubLink: 'Read the source publication',
  forkOf: 'Fork of',
  forkBy: 'by',
  language: 'Language',
  switchTo: 'Switch to Spanish',
  darkMode: 'Dark mode',
  lightMode: 'Light mode',
  clickToExpand: 'Click to expand',
  canvasAria: 'Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.',
  webglFail: 'This browser could not start the 3D viewer. Please try a browser with WebGL enabled.',
  assembleFail: 'Could not assemble anatomy geometry.',
  contextLost: 'The 3D session was paused by your device. Reload to continue.',
  anatomyFallback: 'ANATOMY',
} as const;

export type StringKey = keyof typeof en;

const es: Record<StringKey, string> = {
  eyebrow: 'ANATOMÍA INTERACTIVA',
  modeledPieces: 'piezas modeladas',
  findStructure: 'Buscá una estructura',
  aboutAtlas: 'Acerca de este atlas',
  explorerPanels: 'Paneles del explorador',
  systems: 'Sistemas',
  closeSystems: 'Cerrar sistemas',
  all: 'Todo',
  skeleton: 'Esqueleto',
  workout: 'Entreno',
  workoutTip: 'Mostrar solo músculos, esqueleto y tejido conectivo',
  organs: 'Órganos',
  piecesVisible: 'piezas visibles',
  hideAll: 'Ocultar todo',
  floorPlatform: 'Plataforma',
  showFloor: 'Mostrar plataforma',
  layersAria: 'Capas anatómicas',
  findAnatomy: 'Buscar anatomía',
  searchAnatomy: 'Buscar anatomía',
  closeSearch: 'Cerrar búsqueda',
  searchPlaceholder: 'Corazón, fémur, nervio craneal…',
  searchAria: 'Buscá estructuras anatómicas por nombre',
  noMatch: 'Ninguna estructura coincide con tu búsqueda.',
  searchRefine: 'Mostrando hasta 80 resultados. Refiná tu búsqueda para encontrar estructuras más chicas.',
  searchStart: 'Empezá con un órgano principal o buscá entre todas las estructuras.',
  piece: 'pieza',
  pieces: 'piezas',
  cameraControls: 'Controles de cámara',
  autoRotate: 'Rotación automática',
  pauseRotation: 'Pausar rotación',
  rotateBody: 'Rotar el cuerpo',
  resetViewLayers: 'Restablecer vista y capas',
  reset: 'Restablecer',
  selectedStructure: 'ESTRUCTURA SELECCIONADA',
  inventory: 'INVENTARIO ANATÓMICO',
  separated: 'ESTRUCTURAS SEPARADAS',
  adultMale: 'ADULTO HUMANO · MASCULINO',
  openLayers: 'Abrir capas de sistemas',
  explodeLabel: 'Separar anatomía',
  assembled: 'Armado',
  everyPiece: 'Cada pieza',
  assembleReset: 'Armar y restablecer',
  dragPan: 'Arrastrá para mover',
  dragOrbit: 'Arrastrá para rotar',
  pinchZoom: 'Pellizcá para acercar',
  tapInspect: 'Tocá para inspeccionar',
  sourceCredits: 'Fuente y créditos',
  preparing: 'Preparando la anatomía',
  loadingWord: 'Cargando',
  catalogError: 'No se pudo cargar el catálogo de anatomía.',
  reloadViewer: 'Recargar visor',
  contextNote: 'Vista del sistema · estructura identificada de la anatomía fuente',
  atlasRef: 'Referencia del atlas',
  selectedPieces: 'Piezas seleccionadas',
  includedStructures: 'Estructuras incluidas',
  viewSource: 'Ver fuente anatómica',
  isolate: 'Aislar estructura',
  showSurrounding: 'Mostrar anatomía circundante',
  clearSelection: 'Limpiar selección',
  trainingNote: 'Nota de entrenamiento',
  stretchIt: 'Cómo elongar este músculo',
  demo: 'demostración',
  fullGuide: 'Guía completa en wger.de',
  wgerCredit: 'Ilustración: wger.de / Everkinetic (licencia libre, ver fuente).',
  workoutSafetyStart: 'Empezá liviano, sin dolor, y frená si algo duele.',
  workoutEdu: 'Solo con fines educativos, no es consejo médico.',
  close: 'Cerrar',
  aboutEyebrow: 'FUENTE Y ALCANCE',
  aboutTitle: 'Un cuerpo, al descubierto.',
  aboutDesc: 'Explorá la anatomía de referencia masculina adulta de BodyParts3D.',
  aboutP1a: 'Masculino · BodyParts3D',
  aboutP1b: '2234 mallas individuales y 3432 conceptos nombrados de una anatomía de referencia masculina adulta.',
  aboutP2: 'Esta referencia no contiene todas las estructuras ni variaciones humanas. Los conceptos nombrados pueden incluir varias piezas; cada malla fuente se renderiza una vez.',
  aboutP3: 'Los colores y las agrupaciones por sistema están diseñados para explorar. La geometría está simplificada para la web y las explicaciones breves dan contexto educativo general. Es una referencia anatómica, no una herramienta diagnóstica ni quirúrgica.',
  sourceH: 'Fuente',
  aboutSourceBody: 'BodyParts3D, © The Database Center for Life Science, bajo licencia CC Atribución 4.0 Internacional.',
  licenseLink: 'Licencia del dataset',
  geometryLink: 'Geometría y metadatos originales',
  pubLink: 'Leer la publicación fuente',
  forkOf: 'Fork de',
  forkBy: 'por',
  language: 'Idioma',
  switchTo: 'Cambiar a inglés',
  darkMode: 'Modo oscuro',
  lightMode: 'Modo claro',
  clickToExpand: 'Clic para expandir',
  canvasAria: 'Anatomía humana interactiva. Arrastrá para rotar, pellizcá o usá la rueda para acercar, y tocá una estructura para inspeccionarla.',
  webglFail: 'Este navegador no pudo iniciar el visor 3D. Probá con un navegador con WebGL activado.',
  assembleFail: 'No se pudo armar la geometría anatómica.',
  contextLost: 'Tu dispositivo pausó la sesión 3D. Recargá para continuar.',
  anatomyFallback: 'ANATOMÍA',
};

export function t(locale: Locale, key: StringKey): string {
  return locale === 'es' ? es[key] : en[key];
}

// --- Camera view labels ------------------------------------------------------

export const VIEW_META: Record<Locale, Record<View, {letter: string; label: string}>> = {
  en: {
    'three-quarter': {letter: '¾', label: 'three-quarter view'},
    front: {letter: 'F', label: 'front view'},
    side: {letter: 'S', label: 'side view'},
    back: {letter: 'B', label: 'back view'},
  },
  es: {
    'three-quarter': {letter: '¾', label: 'vista tres cuartos'},
    front: {letter: 'F', label: 'vista frontal'},
    side: {letter: 'L', label: 'vista lateral'},
    back: {letter: 'E', label: 'vista posterior'},
  },
};

// --- Template helpers ----------------------------------------------------------

export function showOnlySystem(locale: Locale, name: string): string {
  return locale === 'es' ? `Mostrar solo ${name}` : `Show only ${name}`;
}
export function showSystem(locale: Locale, name: string): string {
  return locale === 'es' ? `Mostrar ${name}` : `Show ${name}`;
}
export function morePieces(locale: Locale, n: number): string {
  return locale === 'es' ? `Y ${n} piezas modeladas más.` : `And ${n} more modeled pieces.`;
}
export function trainHeading(locale: Locale, trainable: boolean): string {
  if (!trainable) return t(locale, 'trainingNote');
  return locale === 'es' ? 'Cómo entrenar este músculo' : 'How to workout this muscle';
}
export function workoutAria(locale: Locale, name: string): string {
  return locale === 'es' ? `Cómo entrenar ${name}` : `How to train ${name}`;
}

// --- System names & descriptions -------------------------------------------------

export const SYSTEMS_ES: Record<SystemId, {name: string; description: string}> = {
  skeletal: {name: 'Esqueleto', description: 'Los huesos forman la estructura de sostén del cuerpo, protegen los órganos y dan puntos de inserción a los músculos. Su tejido interno además almacena minerales y produce células sanguíneas.'},
  muscular: {name: 'Músculos', description: 'Los músculos esqueléticos generan movimiento tirando de sus inserciones. Junto con los tendones, mueven las articulaciones, estabilizan la postura y producen calor.'},
  cardiac: {name: 'Corazón', description: 'El corazón es una bomba muscular de cuatro cámaras. Sus válvulas dirigen la sangre hacia adelante por los circuitos pulmonar y sistémico.'},
  sensory: {name: 'Órganos sensoriales', description: 'Estas estructuras participan en los sentidos especiales, como la vista, la audición y el equilibrio. Sus tejidos especializados detectan estímulos y trabajan con el sistema nervioso para transmitir la información.'},
  arterial: {name: 'Arterias', description: 'El corazón impulsa la sangre por la circulación. Las arterias llevan la sangre desde el corazón hacia los tejidos o, en el circuito pulmonar, hacia los pulmones.'},
  venous: {name: 'Venas', description: 'Las venas devuelven la sangre hacia el corazón. Las redes superficiales y profundas recogen la sangre de los tejidos; las venas pulmonares traen de vuelta la sangre oxigenada de los pulmones.'},
  nervous: {name: 'Sistema nervioso', description: 'El cerebro, la médula espinal y los nervios periféricos transportan y procesan señales. Sostienen la sensibilidad, el movimiento, la coordinación y la regulación automática de las funciones corporales.'},
  respiratory: {name: 'Respiratorio', description: 'Las vías aéreas conducen el aire a los pulmones, donde el oxígeno y el dióxido de carbono pasan entre el aire y la sangre. Respirar depende de cambios de presión producidos por los músculos respiratorios.'},
  digestive: {name: 'Digestivo', description: 'El tubo digestivo descompone los alimentos, absorbe nutrientes y agua, y avanza los desechos. Los órganos accesorios aportan bilis y enzimas digestivas.'},
  urinary: {name: 'Urinario', description: 'Los riñones filtran la sangre y regulan el equilibrio de líquidos, electrolitos y ácido-base. La orina viaja por los uréteres a la vejiga y sale por la uretra.'},
  lymphatic: {name: 'Linfático', description: 'Los vasos linfáticos devuelven el exceso de líquido tisular a la circulación. Los ganglios y otros órganos linfoides apoyan la vigilancia y las respuestas inmunitarias.'},
  endocrine: {name: 'Endócrino', description: 'Los órganos endócrinos liberan hormonas a la sangre para coordinar procesos como el metabolismo, el crecimiento, la respuesta al estrés y la reproducción.'},
  reproductive: {name: 'Reproductor', description: 'Las estructuras reproductoras masculinas representadas aquí participan en la producción, maduración y transporte de espermatozoides y en la producción de hormonas sexuales.'},
  integumentary: {name: 'Superficie corporal', description: 'La superficie del cuerpo da una referencia anatómica externa. El sistema tegumentario forma una barrera protectora y contribuye a la sensibilidad y a la regulación de la temperatura.'},
  connective: {name: 'Tejido conectivo', description: 'El cartílago, los ligamentos y otros tejidos conectivos sostienen, conectan y separan estructuras. Entre sus roles están estabilizar articulaciones y distribuir cargas mecánicas.'},
};

export function systemName(locale: Locale, id: SystemId): string {
  return locale === 'es' ? SYSTEMS_ES[id].name : (SYSTEMS.find(s => s.id === id)?.name ?? id);
}
export function systemDesc(locale: Locale, id: SystemId): string {
  return locale === 'es' ? SYSTEMS_ES[id].description : (SYSTEMS.find(s => s.id === id)?.description ?? '');
}

// --- Structure explanations ------------------------------------------------------

const EXPLANATIONS_ES: Record<string, string> = {
  heart: 'Una bomba muscular en el tórax. Su lado derecho envía sangre a los pulmones; el izquierdo la envía por la circulación sistémica.',
  liver: 'Un órgano grande debajo del lado derecho del diafragma. Procesa los nutrientes absorbidos, produce bilis y sintetiza muchas proteínas que viajan en la sangre.',
  brain: 'El órgano central del sistema nervioso. Sus regiones interconectadas sostienen la percepción, el movimiento, la memoria, el lenguaje y la regulación de las funciones corporales.',
  stomach: 'Una cámara muscular entre el esófago y el intestino delgado. Almacena y mezcla los alimentos con ácido y enzimas antes de liberarlos al duodeno.',
  spleen: 'Un órgano linfoide en la parte alta izquierda del abdomen. Filtra la sangre, elimina glóbulos envejecidos y participa en la respuesta inmunitaria.',
  pancreas: 'Un órgano abdominal con roles digestivos y endócrinos. Aporta enzimas al intestino delgado y libera hormonas como la insulina y el glucagón.',
  'urinary bladder': 'Un reservorio muscular en la pelvis que almacena la orina que llega de los riñones por los uréteres.',
  trachea: 'La vía aérea principal que conecta la laringe con los bronquios. Sus soportes de cartílago la mantienen abierta al respirar.',
  diaphragm: 'Un músculo ancho que separa el tórax del abdomen. Al contraerse aumenta el volumen torácico y ayuda a llevar aire a los pulmones.',
};

export function explain(locale: Locale, name: string, system: SystemId): string {
  if (locale === 'es') return EXPLANATIONS_ES[name.toLowerCase()] ?? SYSTEMS_ES[system]?.description ?? '';
  return baseExplanation(name, system);
}
export function hasExplanation(locale: Locale, name: string): boolean {
  return locale === 'es' ? name.toLowerCase() in EXPLANATIONS_ES : name.toLowerCase() in EXPLANATIONS;
}
