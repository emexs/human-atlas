// Argentine Spanish overlay for the workout guides in workouts.ts.
//
// Keyed by guide id; exercises and stretches merge by position, so keep the
// same order and length as the English lists. Sets/reps (e.g. "3 x 8-12")
// are universal and stay untouched.

import type {Locale} from './anatomy';
import type {WorkoutGuide} from './workouts';

export interface WorkoutEsExercise {
  name: string;
  how: string;
  equipment: string;
}
export interface WorkoutEsStretch {
  name: string;
  how: string;
  hold: string;
}
export interface WorkoutEs {
  title: string;
  blurb: string;
  exercises: WorkoutEsExercise[];
  stretches?: WorkoutEsStretch[];
  tips?: string[];
}

export const WORKOUTS_ES: Record<string, WorkoutEs> = {
  chest: {
    title: 'Pecho',
    blurb: 'Los pectorales empujan los brazos hacia adelante y hacia adentro. Entrenalos con un press pesado bilateral más una variante con mancuernas para mayor recorrido.',
    exercises: [
      {name: 'Press de banca con barra', how: 'Acomodate con los omóplatos juntos y los pies firmes. Bajá la barra al medio del pecho con los codos a ~45 grados y empujá sin rebotar.', equipment: 'Barra · Banco'},
      {name: 'Press de banca con mancuernas', how: 'Empujá ambas mancuernas desde el pecho hasta extender los brazos. Podés bajar un poco más que con la barra, manteniendo las costillas bajas.', equipment: 'Mancuernas · Banco'},
    ],
    stretches: [
      {name: 'Elongación de pecho en puerta', how: 'Apoyá el antebrazo en el marco de una puerta con el codo a la altura del hombro. Pasá el cuerpo hasta sentir un tirón suave en el pecho. Mantené las costillas bajas y frená si el hombro pellizca.', hold: '2 x 30 s por lado'},
      {name: 'Apertura de pecho atrás', how: 'Entrelazá los dedos atrás de la espalda, estirá los brazos y levantá apenas las manos mientras abrís el pecho. Respirá profundo y frená si los hombros pellizcan.', hold: '2 x 20-30 s'},
    ],
  },
  delts: {
    title: 'Hombros (deltoides)',
    blurb: 'El deltoides tiene porciones frontal, lateral y posterior. Empujá sobre la cabeza para masa general y sumá elevaciones laterales y frontales para dar forma.',
    exercises: [
      {name: 'Press militar sentado con barra', how: 'Sentate derecho con los glúteos apretados. Empujá desde el mentón hasta extender arriba, con los antebrazos verticales. No arquees la cintura.', equipment: 'Barra · Banco'},
      {name: 'Vuelos laterales con mancuernas', how: 'Levantá las mancuernas a los costados hasta la altura de los hombros con los codos apenas flexionados. Pausá un segundo y bajá lento. Sin balanceo.', equipment: 'Mancuernas livianas'},
      {name: 'Vuelos frontales con mancuernas', how: 'Levantá una o ambas mancuernas hasta la altura de los ojos con los codos extendidos pero suaves. Bajá controlado; mantené el torso quieto.', equipment: 'Mancuernas livianas'},
    ],
    stretches: [
      {name: 'Elongación cruzada de hombro', how: 'Tirá un brazo cruzado contra el pecho con la otra mano, manteniendo el hombro lejos de la oreja. Vas a sentir la parte posterior y lateral del hombro.', hold: '2 x 30 s por lado'},
      {name: 'Apertura de hombros atrás', how: 'Entrelazá las manos atrás de la espalda y levantá suave para elongar el frente de los hombros. Mantené el cuello largo y el pecho abierto.', hold: '2 x 20-30 s'},
    ],
  },
  biceps: {
    title: 'Bíceps',
    blurb: 'El bíceps flexiona el codo y ayuda a girar la palma hacia arriba. Hacé curl con los codos pegados al cuerpo; sumá agarre martillo para trabajar también el braquial que está debajo.',
    exercises: [
      {name: 'Curl de bíceps con barra', how: 'Parate derecho con los codos pegados. Subí la barra hasta los hombros sin balancear la cadera, apretá arriba y bajá en 2-3 segundos.', equipment: 'Barra o barra Z'},
      {name: 'Curl martillo con mancuernas', how: 'Hacé curl con las palmas enfrentadas, como agarrando martillos. Carga el braquial y los antebrazos sin dejar de trabajar el bíceps.', equipment: 'Mancuernas'},
      {name: 'Curl predicador', how: 'Apoyá la parte posterior de los brazos en el banco. Subí estricto hasta arriba y bajá hasta extender del todo para un buen estiramiento.', equipment: 'Banco predicador'},
    ],
    stretches: [
      {name: 'Elongación de bíceps en pared', how: 'Apoyá la palma en una pared detrás tuyo a la altura del hombro, con los dedos hacia atrás. Girá el cuerpo suave hasta sentir un tirón leve en el bíceps y el frente del hombro.', hold: '2 x 30 s por lado'},
      {name: 'Elongación en puerta con brazo extendido', how: 'Agarrá el marco de una puerta a la altura del hombro con el codo extendido y pasá el cuerpo. El codo extendido carga más el tendón del bíceps que el pecho.', hold: '2 x 20-30 s por lado'},
    ],
  },
  triceps: {
    title: 'Tríceps',
    blurb: 'El tríceps extiende el codo y forma la mayor parte de la masa del brazo. Combiná un press pesado con un movimiento de elongación por encima de la cabeza o fondos.',
    exercises: [
      {name: 'Press de banca con agarre cerrado', how: 'Agarrá apenas más cerrado que el ancho de hombros. Bajá al pecho bajo con los codos pegados y empujá. Un gran constructor de tríceps pesado.', equipment: 'Barra · Banco'},
      {name: 'Fondos entre bancos', how: 'Manos en un banco detrás tuyo, pies en el piso u otro banco. Bajá hasta que los brazos queden paralelos al piso y empujá.', equipment: 'Dos bancos · Peso corporal'},
      {name: 'Rompecráneos (extensión acostado)', how: 'Acostado, bajá la barra hacia la frente flexionando solo los codos y extendé. Mantené la parte alta de los brazos quieta.', equipment: 'Barra Z · Banco'},
    ],
    stretches: [
      {name: 'Elongación de tríceps sobre la cabeza', how: 'Llevá una mano entre los omóplatos con el codo apuntando arriba. Presioná suave el codo con la otra mano. Mantené las costillas bajas y no arquees.', hold: '2 x 30 s por lado'},
      {name: 'Elongación de tríceps con toalla', how: 'Sostené una toalla por encima de la cabeza, colgala por la espalda y agarrá la punta de abajo con la otra mano atrás. Tirá suave hacia abajo para profundizar.', hold: '2 x 20-30 s por lado'},
    ],
  },
  forearms: {
    title: 'Antebrazos y agarre',
    blurb: 'Los flexores, extensores y el braquiorradial dan control de agarre y muñeca. Entrenalos con curl martillo, remos y colgadas.',
    exercises: [
      {name: 'Curl martillo con mancuernas', how: 'El agarre neutro carga el braquiorradial en la parte superior del antebrazo. Mantené las muñecas firmes y las repeticiones estrictas.', equipment: 'Mancuernas'},
      {name: 'Curl con mancuernas (supino)', how: 'Hacé curl con las palmas hacia arriba y controlá la bajada. Los flexores del antebrazo trabajan fuerte para estabilizar la muñeca.', equipment: 'Mancuernas'},
      {name: 'Dominadas (trabajo de agarre)', how: 'Colgate de la barra y subí el pecho hasta ella. Hasta las repeticiones asistidas y las colgadas con tiempo fortalecen manos, muñecas y codos.', equipment: 'Barra de dominadas'},
    ],
    stretches: [
      {name: 'Rezo (flexores)', how: 'Juntá las palmas frente al pecho con los dedos hacia arriba. Bajá lento las manos hacia la cintura hasta que las muñecas y el antebrazo interno tiren. Mantené las palmas juntas.', hold: '2 x 20-30 s'},
      {name: 'Rezo invertido (extensores)', how: 'Juntá los dorsos de las manos con los dedos hacia abajo frente tuyo. Levantá suave hasta que el antebrazo externo elongue. Frená si hay hormigueo en los dedos.', hold: '2 x 20-30 s'},
    ],
  },
  lats: {
    title: 'Dorsales y espalda alta',
    blurb: 'Los dorsales bajan el brazo y lo llevan hacia atrás; el redondo mayor ayuda. Remá pesado con los codos pegados y sumá una tracción vertical como las dominadas.',
    exercises: [
      {name: 'Remo con barra inclinado', how: 'Inclinate a ~45 grados con la espalda plana. Llevá la barra al ombligo apretando los omóplatos y bajá controlado.', equipment: 'Barra'},
      {name: 'Remo con barra T', how: 'A horcajadas sobre la barra, inclinate y remá el agarre al pecho. Ideal para dar grosor a la espalda media y los dorsales.', equipment: 'Barra T / landmine'},
      {name: 'Dominadas supinas', how: 'Agarre con palmas hacia vos, pecho a la barra. Usá asistencia o negativas si hace falta; el recorrido completo le gana a las medias repeticiones.', equipment: 'Barra de dominadas'},
    ],
    stretches: [
      {name: 'Elongación de dorsal arrodillado', how: 'Arrodillate con ambas manos bien adelante en un banco o el piso, llevá la cadera atrás y dejá caer el pecho. Caminá con ambas manos hacia un lado para cargar cada dorsal.', hold: '2 x 30 s por lado'},
      {name: 'Colgada libre', how: 'Colgate de una barra con agarre relajado y dejá que el peso descomprima dorsales y columna. Apoyá los pies en un cajón para alivianar si hace falta.', hold: '3 x 20-30 s'},
    ],
  },
  traps: {
    title: 'Trapecio (espalda alta)',
    blurb: 'El trapecio eleva, retrae y estabiliza los omóplatos. Hacé encogimientos pesados y remá para las fibras medias e inferiores.',
    exercises: [
      {name: 'Encogimientos con mancuernas', how: 'Parate derecho, encogé los hombros hacia las orejas, pausá un segundo y bajá del todo. No hagas círculos con los hombros.', equipment: 'Mancuernas pesadas'},
      {name: 'Encogimientos con barra', how: 'Lo mismo con barra para más carga. Sostené arriba un instante y no flexiones los codos.', equipment: 'Barra'},
      {name: 'Remo con mancuerna inclinado', how: 'Una rodilla en el banco, remá la mancuerna a la cadera. Trabaja trapecio medio y romboides además de dorsales.', equipment: 'Mancuerna · Banco'},
    ],
    stretches: [
      {name: 'Oreja al hombro', how: 'Sentate derecho y llevá suave una oreja hacia el hombro hasta que el trapecio contrario tire. No tires de la cabeza; dejá que la gravedad trabaje.', hold: '2 x 30 s por lado'},
      {name: 'Liberación con mentón adentro', how: 'Meté el mentón para hacer doble mentón y asentí suave hacia adelante. Libera el trapecio superior y la base del cráneo.', hold: '2 x 10 repeticiones, 5 s'},
    ],
  },
  cuff: {
    title: 'Manguito rotador y hombro posterior',
    blurb: 'Infraespinoso, supraespinoso, redondo menor y el deltoides posterior estabilizan el hombro. Entrenalos liviano y estricto: esto es prevención, no ego.',
    exercises: [
      {name: 'Remo con mancuerna (énfasis posterior)', how: 'Inclinate, abrí los codos a ~70 grados y remá abierto. Pensá en "abrir el pecho" arriba.', equipment: 'Mancuernas livianas'},
      {name: 'Press con mancuernas (liviano, completo)', how: 'Empujá mancuernas livianas en un recorrido completo y sin dolor para fortalecer toda la cintura escapular, incluido el manguito.', equipment: 'Mancuernas livianas'},
    ],
    stretches: [
      {name: 'Cruzado posterior suave', how: 'Tirá el brazo liviano cruzado contra el pecho. Muy suave: el manguito responde a elongar liviano y seguido, no a la fuerza. Frená si pincha adelante del hombro.', hold: '2 x 20-30 s por lado'},
      {name: 'Apertura en puerta liviana', how: 'Los pectorales tensos llevan los hombros adelante e irritan el manguito. Una apertura suave en puerta con el codo bajo el hombro alivia esa tirantez.', hold: '2 x 20-30 s'},
    ],
  },
  core: {
    title: 'Zona media (abdominales y oblicuos)',
    blurb: 'Abdominales y oblicuos sostienen el tronco y lo flexionan o rotan. Construilos con un movimiento tipo crunch más un sostén anti-movimiento como la plancha.',
    exercises: [
      {name: 'Abdominales (crunch)', how: 'Acostado con rodillas flexionadas, enroscá las costillas hacia la pelvis exhalando arriba. Mantené la cintura pesada en el piso: recorrido corto, apretón fuerte.', equipment: 'Peso corporal · Colchoneta'},
      {name: 'Plancha', how: 'Antebrazos abajo, cuerpo en línea de pies a cabeza. Apretá glúteos y panza como esperando un golpe. Frená cuando la cadera se caiga.', equipment: 'Peso corporal'},
    ],
    stretches: [
      {name: 'Cobra', how: 'Boca abajo, empujá el pecho hacia arriba con los brazos extendidos y la cadera pesada en el piso. Subí solo hasta un estiramiento suave de abdominales, sin dolor lumbar.', hold: '2 x 20-30 s'},
      {name: 'Flexión lateral parado', how: 'Estirá un brazo por encima de la cabeza e inclinate al lado contrario para elongar los oblicuos. Mantené la cadera cuadrada y las rodillas suaves.', hold: '2 x 20-30 s por lado'},
    ],
  },
  backext: {
    title: 'Espalda baja y extensores',
    blurb: 'Los músculos espinales profundos (iliocostal, longísimo, espinoso) te mantienen erguido. Fortalecelos con extensiones controladas y bisagras de cadera.',
    exercises: [
      {name: 'Hiperextensiones', how: 'Cadera en el banco, brazos cruzados al pecho. Bajá con la espalda plana y extendé hasta alinear el cuerpo. No hiperextiendas.', equipment: 'Banco de hiperextensiones'},
      {name: 'Puente de glúteos', how: 'Pies firmes, empujá por los talones hasta alinear rodillas-cadera-hombros. Apretá fuerte los glúteos arriba.', equipment: 'Peso corporal · Colchoneta'},
    ],
    stretches: [
      {name: 'Postura del niño', how: 'Arrodillate, sentate sobre los talones con los brazos largos adelante y la frente abajo. Respirá hacia la espalda baja para un estiramiento suave.', hold: '1-2 min'},
      {name: 'Rodillas al pecho', how: 'Boca arriba, abrazá una o ambas rodillas al pecho hasta que la cintura se pegue al piso.', hold: '2 x 30 s'},
    ],
  },
  glutes: {
    title: 'Glúteos',
    blurb: 'Glúteo mayor, medio y menor extienden y estabilizan la cadera. Hacé puente o sentadillas profundas y sumá estocadas para fuerza unilateral.',
    exercises: [
      {name: 'Puente de glúteos', how: 'El constructor de glúteos más simple. Progresá a puentes a una pierna o hip thrust con los hombros en un banco.', equipment: 'Peso corporal · Colchoneta'},
      {name: 'Sentadilla goblet', how: 'Sostené una mancuerna al pecho, bajá profundo entre los talones con el pecho arriba y subí por todo el pie.', equipment: 'Mancuerna / pesa rusa'},
      {name: 'Estocadas caminando', how: 'Pasos largos, torso alto, rodilla delantera sobre el tobillo. Empujá por el talón de adelante. Trabaja glúteos, cuádriceps y equilibrio.', equipment: 'Peso corporal o mancuernas'},
    ],
    stretches: [
      {name: 'Figura 4 acostado', how: 'Boca arriba, cruzá un tobillo sobre la rodilla contraria y traé la pierna de abajo hacia vos hasta que la cadera externa elongue. Mantené la cabeza apoyada.', hold: '2 x 30-60 s por lado'},
      {name: 'Paloma asistida', how: 'En cuatro patas, pasá una tibia adelante y bajá la cadera hacia el piso sobre ella. Poné un almohadón bajo la cadera si queda en el aire.', hold: '2 x 30-60 s por lado'},
    ],
  },
  quads: {
    title: 'Cuádriceps (frente del muslo)',
    blurb: 'Recto femoral y vastos extienden la rodilla. Hacé sentadillas profundas, estocadas y terminá con extensiones para aislar.',
    exercises: [
      {name: 'Sentadilla frontal', how: 'Barra al frente de los hombros, codos altos. Bajá profundo con el torso vertical, rodillas sobre la punta de los pies.', equipment: 'Barra · Rack'},
      {name: 'Prensa de piernas', how: 'Pies al ancho de hombros en la plataforma. Bajá hasta ~90 grados de rodilla y empujá sin bloquear de golpe.', equipment: 'Prensa de piernas'},
      {name: 'Extensión de piernas', how: 'Sentate derecho, extendé las rodillas hasta estirar, apretá un segundo y bajá lento. Gran finalizador de aislamiento.', equipment: 'Máquina de extensión'},
    ],
    stretches: [
      {name: 'Elongación de cuádriceps parado', how: 'Agarrado de una pared, llevá un talón al glúteo con las rodillas juntas y la pelvis encajada. Tenés que sentir el frente del muslo, nunca la rodilla.', hold: '2 x 30 s por lado'},
      {name: 'Estiramiento medio arrodillado', how: 'Arrodillate en una rodilla con algo mullido debajo, encajá la pelvis y avanzá suave. Apretá el glúteo de atrás para profundizar en cuádriceps y flexores de cadera.', hold: '2 x 30 s por lado'},
    ],
  },
  hams: {
    title: 'Isquiotibiales (posterior del muslo)',
    blurb: 'Semitendinoso, semimembranoso y bíceps femoral flexionan la rodilla y hacen bisagra con la cadera. Enroscá la rodilla contra resistencia y hacé bisagra con la espalda plana.',
    exercises: [
      {name: 'Curl femoral acostado', how: 'Boca abajo, topes detrás de los tobillos. Enroscá a los glúteos sin levantar la cadera, apretá y bajá lento.', equipment: 'Máquina de curl femoral'},
      {name: 'Curl femoral sentado', how: 'Espalda firme contra el respaldo, enroscá los talones debajo tuyo. Un ángulo distinto que muchos sienten más en isquios.', equipment: 'Máquina de curl sentado'},
      {name: 'Puente de glúteos (apoyo de bisagra)', how: 'Usá puentes para aprender el apretón de bisagra que protege la cintura en peso muerto y swings.', equipment: 'Peso corporal'},
    ],
    stretches: [
      {name: 'Elongación acostado con toalla', how: 'Boca arriba, pasá una toalla por un pie y estirá la pierna al techo hasta que el posterior tire. Mantené la cintura pegada al piso.', hold: '2 x 30 s por lado'},
      {name: 'Bisagra parado', how: 'Apoyá un talón en un escalón bajo con la pierna extendida y flexioná la cadera con la espalda plana hasta que el isquio tire. Dedos hacia vos.', hold: '2 x 30 s por lado'},
    ],
  },
  calves: {
    title: 'Gemelos',
    blurb: 'Gastrocnemios (arriba, de dos cabezas) y sóleo (más profundo) apuntan el pie. Entrená elevaciones con rodilla extendida para gastrocnemios y trabajo sentado o con rodilla flexionada para el sóleo.',
    exercises: [
      {name: 'Elevación de talones parado', how: 'Subí lo más alto posible sobre las puntas, pausá un segundo y bajá a un estiramiento profundo. Sin rebotes.', equipment: 'Peso corporal · Escalón'},
      {name: 'Prensa de gemelos en prensa', how: 'Puntas bajas en la plataforma, rodillas casi extendidas. Empujá por los dedos en un recorrido completo de estiramiento y apretón.', equipment: 'Prensa de piernas'},
    ],
    stretches: [
      {name: 'Pared con rodilla extendida (gemelos)', how: 'Manos en la pared, una pierna atrás con el talón abajo y la rodilla extendida. Inclinate hasta que el gemelo alto tire.', hold: '2 x 30 s por lado'},
      {name: 'Pared con rodilla flexionada (sóleo)', how: 'Igual pero flexionando la rodilla de atrás sin levantar el talón. El tirón baja hacia el Aquiles.', hold: '2 x 30 s por lado'},
    ],
  },
  adductors: {
    title: 'Aductores (cara interna del muslo)',
    blurb: 'Aductor largo, corto, mayor y grácil juntan las piernas y estabilizan la pelvis en sentadillas y estocadas.',
    exercises: [
      {name: 'Sentadilla goblet (abierta)', how: 'Postura amplia con puntas apenas abiertas y bajá profundo. La cara interna trabaja fuerte para controlar las rodillas.', equipment: 'Mancuerna / pesa rusa'},
      {name: 'Estocadas caminando', how: 'Pasos largos y controlados con el torso alto. Mantené la rodilla delantera sobre el tobillo para trabajo de aductores y glúteos.', equipment: 'Peso corporal o mancuernas'},
      {name: 'Plancha (apoyo de aductores)', how: 'Las planchas laterales en particular obligan a la cara interna de la pierna de abajo a estabilizar la pelvis.', equipment: 'Peso corporal'},
    ],
    stretches: [
      {name: 'Mariposa sentado', how: 'Sentate con las plantas juntas y las rodillas cayendo a los costados. Sentate alto e inclinate suave desde la cadera para la cara interna.', hold: '2 x 30-60 s'},
      {name: 'Estocada lateral asistida', how: 'Postura amplia, pasá la cadera a un lado flexionando esa rodilla mientras la otra pierna queda extendida. Pecho arriba y agarrate si hace falta.', hold: '2 x 30 s por lado'},
    ],
  },
  hipflex: {
    title: 'Flexores de cadera (ilíaco y psoas)',
    blurb: 'Ilíaco y psoas levantan la rodilla al pecho. Fortalecelos con elevaciones controladas; elóngalos si estar sentado todo el día los deja tensos.',
    exercises: [
      {name: 'Abdominales inversos', how: 'Boca arriba, enroscá la pelvis trayendo las rodillas al pecho. Controlá la bajada, sin balanceo.', equipment: 'Peso corporal · Colchoneta'},
      {name: 'Sentadilla goblet (profunda y vertical)', how: 'Sentadillas profundas y verticales llevan a los flexores por un gran recorrido bajo carga mientras los glúteos hacen el trabajo.', equipment: 'Mancuerna / pesa rusa'},
    ],
    stretches: [
      {name: 'Flexores medio arrodillado', how: 'Arrodillate en una rodilla, encajá la pelvis y avanzá hasta que el frente de la cadera de atrás tire. Levantá el brazo del mismo lado para más.', hold: '2 x 30 s por lado'},
      {name: 'Couch stretch (suave)', how: 'Rodilla de atrás contra una pared o sillón, pie de adelante firme, torso alto. Bajá solo hasta un tirón suave: este es intenso.', hold: '2 x 20-30 s por lado'},
    ],
  },
  neck: {
    title: 'Cuello',
    blurb: 'Esternocleidomastoideo, escalenos y músculos profundos posicionan la cabeza. Entrená muy liviano solo con peso corporal, en recorridos chicos y sin dolor.',
    exercises: [],
    stretches: [
      {name: 'Lateral de ECM', how: 'Incliná una oreja al hombro y girá apenas el mentón hacia arriba para sentir el frente-lateral del cuello. Solo el peso de la cabeza, sin tirar.', hold: '2 x 20 s por lado'},
      {name: 'Rotaciones con mentón adentro', how: 'Meté el mentón y girá lento la cabeza de lado a lado en un recorrido cómodo. Mové despacio y frená con mareos o dolor agudo.', hold: '2 x 8 por lado'},
    ],
    tips: [
      'Mentón adentro: sentate derecho, llevá el mentón atrás como haciendo "papada", sostené 5 s. 2 x 10.',
      'Isométricos suaves: presioná la palma contra la frente y luego contra cada lateral de la cabeza, sosteniendo 10 s sin mover el cuello. 3 vueltas por dirección.',
      'Consultá a un profesional por hormigueos, dolor que baja al brazo, mareos o un latigazo reciente.',
    ],
  },
  foot: {
    title: 'Pies y tobillos',
    blurb: 'Los músculos chicos del pie sostienen el arco y los dedos. Fortalecelos descalzo con elevaciones de talones, talón corto y arrugas con toalla.',
    exercises: [
      {name: 'Elevación de talones', how: 'Descalzo en un escalón, subí alto y bajá a un estiramiento profundo. También fortalece los estabilizadores chicos del pie y el tobillo.', equipment: 'Peso corporal · Escalón'},
      {name: 'Prensa de gemelos', how: 'Prensas livianas y controladas por las puntas. Mantené los tobillos alineados sobre los dedos.', equipment: 'Prensa de piernas'},
    ],
    stretches: [
      {name: 'Elongación de planta en escalón', how: 'Parate con la punta en un escalón y dejá caer el talón. Para la planta, sentado tirá suave los dedos hacia atrás con la mano.', hold: '2 x 30 s por lado'},
      {name: 'Pelotita en el arco', how: 'Rodá una pelota de tenis bajo el arco, frenando en puntos sensibles. Presión liviana: intenso pero nunca doloroso.', hold: '1-2 min por pie'},
    ],
  },
  breathing: {
    title: 'Músculos respiratorios',
    blurb: 'El diafragma e intercostales mueven la respiración. No se entrenan con pesas: se entrenan con cardio, postura y ejercicios de respiración.',
    exercises: [],
    tips: [
      'Respiración diafragmática: 5 minutos por día, inhalá por la nariz expandiendo las costillas, exhalá largo y lento.',
      'Cardio zona 2, 2-3 veces por semana (caminata rápida, bici, natación): entrena el diafragma mejor que cualquier pesa.',
      'Apertura torácica: extensiones sobre un foam roller en la espalda alta, 2 x 8 lento.',
    ],
  },
  pelvic: {
    title: 'Piso pélvico',
    blurb: 'Estos músculos en hamaca sostienen la pelvis y la continencia. Se entrenan con Kegels suaves y trabajo de zona media profunda, no con pesas de gimnasio. Ante la duda consultá a un kinesiólogo.',
    exercises: [],
    tips: [
      'Kegels: apretá suave como frenando el pis, sostené 5 s, relajá del todo 5 s. 2 x 10, dos veces al día.',
      'Combiná con la respiración: exhalá al apretar, nunca aguantes el aire ni aprietes fuerte los glúteos.',
      'Consultá a un kinesiólogo de piso pélvico por pérdidas, síntomas de prolapso o recuperación posparto.',
    ],
  },
  serratus: {
    title: 'Serrato anterior',
    blurb: 'El serrato separa el omóplato ("músculo del golpe") y apoya el press sobre la cabeza. Entrenalo con flexiones plus, presses y planchas.',
    exercises: [
      {name: 'Press con mancuernas', how: 'Empujá sobre la cabeza con alcance completo arriba, dejando que los omóplatos roten. Liviano y controlado.', equipment: 'Mancuernas'},
      {name: 'Plancha (flexión plus)', how: 'Desde la plancha o arriba de una flexión, empujá el piso para redondear apenas la espalda alta y relajá. Movimiento chico pero potente.', equipment: 'Peso corporal'},
    ],
    stretches: [
      {name: 'Enhebrar la aguja', how: 'En cuatro patas, pasá un brazo por debajo del cuerpo y apoyá ese hombro en el piso. Sentí cómo el omóplato envuelve las costillas.', hold: '2 x 30 s por lado'},
      {name: 'Extensión torácica con roller', how: 'Acostado con un roller cruzado en los omóplatos, manos atrás de la cabeza, arqueá suave sobre él. Movelo por la espalda alta.', hold: '2 x 8 lento'},
    ],
  },
  general: {
    title: 'Fuerza integral',
    blurb: 'Este músculo profundo o poco aislado se entrena mejor como parte de movimientos integrales que con un ejercicio de aislamiento.',
    exercises: [
      {name: 'Sentadilla goblet', how: 'Un empuje dominante de rodilla que cubre cuádriceps, glúteos y tronco en un movimiento. Bajá profundo y subí por todo el pie.', equipment: 'Mancuerna / pesa rusa'},
      {name: 'Remo con mancuerna', how: 'Una tracción con bisagra para toda la espalda, brazos y agarre. Bisagra, panza firme, remá a la cadera.', equipment: 'Mancuerna · Banco'},
      {name: 'Press con mancuernas', how: 'Un empuje horizontal para pecho, hombros y tríceps. Tocá liviano el pecho en cada repetición.', equipment: 'Mancuernas · Banco'},
    ],
    stretches: [
      {name: 'El mejor estiramiento del mundo', how: 'Zancada profunda con la rodilla de atrás abajo, codo adentro del pie delantero y rotá ese brazo al cielo. Cadera, isquios y columna en un movimiento.', hold: '2 x 30 s por lado'},
      {name: 'Niño + puerta', how: 'Terminá con un minuto del niño y una apertura suave de pecho en puerta para resetear la postura.', hold: '1 min cada uno'},
    ],
  },
};

export function localizeGuide(guide: WorkoutGuide, locale: Locale): WorkoutGuide {
  if (locale !== 'es') return guide;
  const o = WORKOUTS_ES[guide.id];
  if (!o) return guide;
  return {
    ...guide,
    title: o.title,
    blurb: o.blurb,
    exercises: guide.exercises.map((ex, i) => ({
      ...ex,
      name: o.exercises[i]?.name ?? ex.name,
      how: o.exercises[i]?.how ?? ex.how,
      equipment: o.exercises[i]?.equipment ?? ex.equipment,
    })),
    stretches: (guide.stretches ?? []).map((s, i) => ({
      ...s,
      name: o.stretches?.[i]?.name ?? s.name,
      how: o.stretches?.[i]?.how ?? s.how,
      hold: o.stretches?.[i]?.hold ?? s.hold,
    })),
    tips: o.tips ?? guide.tips,
  };
}
