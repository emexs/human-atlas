// Workout and stretching guidance for the muscular system.
//
// Maps BodyParts3D concept names (e.g. "Long head of left biceps brachii")
// to a small set of curated strength-training and stretching guides. Exercise illustrations
// come from the wger exercise database (https://wger.de), which serves its
// media under free licences (contributor: Everkinetic). Image URLs below were
// verified against the wger API (HEAD 200) and each exercise links back to its
// wger exercise page for full instructions and licence details.
//
// This is educational content, not medical advice. Start light, use pain-free
// range of motion, and stop if anything hurts.

export interface WorkoutExercise {
  name: string;
  /** One or two sentences on how to perform it. */
  how: string;
  /** Suggested volume, e.g. "3 x 8-12". */
  sets: string;
  equipment: string;
  /** Free-licensed illustration from wger.de. Empty string = text only. */
  image: string;
  /** wger exercise id, used for the "full guide" link. */
  wgerId: number;
}

export interface MuscleStretch {
  name: string;
  /** One or two sentences on how to perform it. */
  how: string;
  /** Suggested hold, e.g. "2 x 30 s each side". */
  hold: string;
}

export interface WorkoutGuide {
  id: string;
  /** Short label, e.g. "Chest". */
  title: string;
  /** false for muscles you cannot (or should not) train with weights. */
  trainable: boolean;
  blurb: string;
  exercises: WorkoutExercise[];
  /** Stretches for this muscle group. Empty when stretching makes no sense (eyes, tongue, pelvic floor). */
  stretches?: MuscleStretch[];
  /** Bodyweight-only steps for guides without photos (neck, breathing, pelvic floor). */
  tips?: string[];
}

const WGER = 'https://wger.de/media/exercise-images';
const CREDIT = 'Illustration: wger.de / Everkinetic (free licence, see source)';

export const WGER_CREDIT = CREDIT;
export function wgerUrl(id: number): string {
  return `https://wger.de/en/exercise/${id}`;
}

// ---------------------------------------------------------------------------
// Guides
// ---------------------------------------------------------------------------

const CHEST: WorkoutGuide = {
  id: 'chest',
  title: 'Chest',
  trainable: true,
  blurb:
    'The pectorals push the arms forward and together. Train them with a heavy bilateral press plus a dumbbell variation for range of motion.',
  exercises: [
    {
      name: 'Barbell Bench Press',
      how: 'Set up with shoulder blades pinched, feet planted. Lower the bar to mid-chest with elbows at ~45 degrees, then press up without bouncing.',
      sets: '3-4 x 6-10',
      equipment: 'Barbell · Bench',
      image: `${WGER}/192/Bench-press-1.png`,
      wgerId: 73,
    },
    {
      name: 'Dumbbell Bench Press',
      how: 'Press both dumbbells from chest level to full extension. Go a little deeper than a barbell allows, keeping the ribs down.',
      sets: '3 x 8-12',
      equipment: 'Dumbbells · Bench',
      image: `${WGER}/97/Dumbbell-bench-press-1.png`,
      wgerId: 75,
    },
  ],
  stretches: [
    {
      name: 'Doorway chest stretch',
      how: 'Place the forearm flat on a door frame with the elbow at shoulder height. Step through until you feel a gentle pull across the chest. Keep the ribs down and stop with any shoulder pinching.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Behind-back chest opener',
      how: 'Interlace the fingers behind your back, straighten the arms and lift the hands slightly while opening the chest. Breathe deeply and stop if the shoulders pinch.',
      hold: '2 x 20-30 s',
    },
  ],
};

const DELTS: WorkoutGuide = {
  id: 'delts',
  title: 'Shoulders (deltoids)',
  trainable: true,
  blurb:
    'The deltoid has front, side and rear heads. Press overhead for overall mass, then raise to the side and front for width and shape.',
  exercises: [
    {
      name: 'Seated Barbell Shoulder Press',
      how: 'Sit tall with glutes squeezed. Press from chin level to lockout overhead, keeping forearms vertical. Do not over-arch the lower back.',
      sets: '3-4 x 6-10',
      equipment: 'Barbell · Bench',
      image: `${WGER}/119/seated-barbell-shoulder-press-large-1.png`,
      wgerId: 566,
    },
    {
      name: 'Dumbbell Lateral Raise',
      how: 'Raise the dumbbells out to the sides to shoulder height with a soft elbow bend. Pause briefly, then lower slowly. No swinging.',
      sets: '3 x 12-15',
      equipment: 'Light dumbbells',
      image: `${WGER}/148/lateral-dumbbell-raises-large-2.png`,
      wgerId: 348,
    },
    {
      name: 'Dumbbell Front Raise',
      how: 'Lift one or both dumbbells to eye level with straight-but-soft elbows. Lower under control; keep the torso still.',
      sets: '2-3 x 10-15',
      equipment: 'Light dumbbells',
      image: `${WGER}/256/b7def5bc-2352-499b-b9e5-fff741003831.png`,
      wgerId: 256,
    },
  ],
  stretches: [
    {
      name: 'Cross-body shoulder stretch',
      how: 'Pull one arm across the chest with the other hand, keeping the shoulder down away from the ear. You should feel the back and side of the shoulder.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Behind-back shoulder opener',
      how: 'Clasp the hands behind your back and lift gently to stretch the front of the shoulders. Keep the neck long and the chest open.',
      hold: '2 x 20-30 s',
    },
  ],
};

const BICEPS: WorkoutGuide = {
  id: 'biceps',
  title: 'Biceps',
  trainable: true,
  blurb:
    'The biceps bend the elbow and help turn the palm up. Curl with the elbows pinned at your sides; add a hammer grip to also hit the brachialis underneath.',
  exercises: [
    {
      name: 'Barbell Biceps Curl',
      how: 'Stand tall, elbows tucked. Curl the bar to shoulder level without swinging the hips, squeeze, then lower over 2-3 seconds.',
      sets: '3 x 8-12',
      equipment: 'Barbell or EZ-bar',
      image: `${WGER}/74/Bicep-curls-1.png`,
      wgerId: 91,
    },
    {
      name: 'Dumbbell Hammer Curl',
      how: 'Curl with palms facing each other like holding hammers. This biases the brachialis and forearms while still working the biceps.',
      sets: '3 x 10-12',
      equipment: 'Dumbbells',
      image: `${WGER}/86/Bicep-hammer-curl-1.png`,
      wgerId: 272,
    },
    {
      name: 'Preacher Curl',
      how: 'Brace the backs of the arms on the pad. Curl strictly to the top, then lower to full extension for a deep stretch.',
      sets: '2-3 x 10-12',
      equipment: 'Preacher bench',
      image: `${WGER}/193/Preacher-curl-3-1.png`,
      wgerId: 465,
    },
  ],
  stretches: [
    {
      name: 'Wall biceps stretch',
      how: 'Place the palm flat on a wall behind you at shoulder height, fingers pointing back. Turn the body gently away until the biceps and front of the shoulder pull lightly.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Straight-arm doorway stretch',
      how: 'Grip a door frame at shoulder height with a straight elbow and step through. The straight elbow biases the biceps tendon rather than the chest.',
      hold: '2 x 20-30 s each side',
    },
  ],
};

const TRICEPS: WorkoutGuide = {
  id: 'triceps',
  title: 'Triceps',
  trainable: true,
  blurb:
    'The triceps straighten the elbow and make up most of the upper-arm mass. Combine a heavy press with an overhead or dip stretch movement.',
  exercises: [
    {
      name: 'Narrow-Grip Bench Press',
      how: 'Grip just inside shoulder width. Lower to the lower chest with elbows tucked, then press up. A great heavy triceps builder.',
      sets: '3-4 x 6-10',
      equipment: 'Barbell · Bench',
      image: `${WGER}/88/Narrow-grip-bench-press-1.png`,
      wgerId: 76,
    },
    {
      name: 'Bench Dips',
      how: 'Hands on a bench behind you, feet on the floor or another bench. Lower until the upper arms are parallel, then press up.',
      sets: '3 x 8-15',
      equipment: 'Two benches · Bodyweight',
      image: `${WGER}/83/Bench-dips-1.png`,
      wgerId: 197,
    },
    {
      name: 'Skullcrusher (lying triceps extension)',
      how: 'Lie back, lower the bar toward the forehead by bending only the elbows, then extend. Keep the upper arms still.',
      sets: '3 x 10-12',
      equipment: 'EZ-bar · Bench',
      image: `${WGER}/84/Lying-close-grip-triceps-press-to-chin-1.png`,
      wgerId: 246,
    },
  ],
  stretches: [
    {
      name: 'Overhead triceps stretch',
      how: 'Reach one hand down between the shoulder blades with the elbow pointing up. Gently press the elbow with the other hand. Keep the ribs down and do not arch the back.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Towel triceps stretch',
      how: 'Hold a towel overhead, drape it down the back and catch the bottom end with the other hand behind the back. Gently pull down for a deeper stretch.',
      hold: '2 x 20-30 s each side',
    },
  ],
};

const FOREARMS: WorkoutGuide = {
  id: 'forearms',
  title: 'Forearms & grip',
  trainable: true,
  blurb:
    'Forearm flexors, extensors and the brachioradialis drive grip and wrist control. Train them with hammer curls, rows and dead-hang holds.',
  exercises: [
    {
      name: 'Dumbbell Hammer Curl',
      how: 'Neutral-grip curls load the brachioradialis along the top of the forearm. Keep the wrists straight and the reps strict.',
      sets: '3 x 10-12',
      equipment: 'Dumbbells',
      image: `${WGER}/86/Bicep-hammer-curl-1.png`,
      wgerId: 272,
    },
    {
      name: 'Dumbbell Biceps Curl (supinated)',
      how: 'Curl with palms up and control the lowering phase. The forearm flexors work hard to stabilise the wrist.',
      sets: '2-3 x 10-12',
      equipment: 'Dumbbells',
      image: `${WGER}/81/Biceps-curl-1.png`,
      wgerId: 92,
    },
    {
      name: 'Chin-Up (dead-hang grip work)',
      how: 'Hang from the bar and pull the chest to it. Even assisted reps and timed hangs build the hands, wrists and elbows.',
      sets: '3 x max reps or 20-30 s hangs',
      equipment: 'Pull-up bar',
      image: `${WGER}/152/6c1a7459-266d-491a-bd50-7cbaea2bc771.png`,
      wgerId: 152,
    },
  ],
  stretches: [
    {
      name: 'Prayer stretch (flexors)',
      how: 'Press the palms together in front of the chest, fingers up. Slowly lower the hands toward the waist until the wrists and inner forearms pull. Keep the palms together.',
      hold: '2 x 20-30 s',
    },
    {
      name: 'Reverse prayer (extensors)',
      how: 'Press the backs of the hands together, fingers pointing down. Lift gently until the outer forearms stretch. Stop with any tingling in the fingers.',
      hold: '2 x 20-30 s',
    },
  ],
};

const LATS: WorkoutGuide = {
  id: 'lats',
  title: 'Lats & upper back',
  trainable: true,
  blurb:
    'The lats pull the arm down and back; the teres major assists. Row heavy with the elbows tucked, and add a vertical pull such as a chin-up.',
  exercises: [
    {
      name: 'Bent-Over Barbell Row',
      how: 'Hinge to ~45 degrees with a flat back. Pull the bar to the navel, squeezing the shoulder blades, then lower with control.',
      sets: '3-4 x 8-12',
      equipment: 'Barbell',
      image: `${WGER}/109/Barbell-rear-delt-row-1.png`,
      wgerId: 83,
    },
    {
      name: 'T-Bar Row',
      how: 'Straddle the bar, hinge, and row the handle to the chest. Great for thickening the mid-back and lats.',
      sets: '3 x 8-12',
      equipment: 'T-bar / landmine',
      image: `${WGER}/106/T-bar-row-1.png`,
      wgerId: 513,
    },
    {
      name: 'Chin-Up',
      how: 'Underhand grip, chest to bar. Use assistance or negatives if needed; full range beats half reps.',
      sets: '3 x max reps',
      equipment: 'Pull-up bar',
      image: `${WGER}/152/6c1a7459-266d-491a-bd50-7cbaea2bc771.png`,
      wgerId: 152,
    },
  ],
  stretches: [
    {
      name: 'Kneeling lat stretch',
      how: 'Kneel with both hands far ahead on a bench or the floor, sit the hips back and let the chest sink. Walk both hands to one side to bias each lat.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Dead hang',
      how: 'Hang from a bar with a relaxed grip and let body weight decompress the lats and spine. Rest the feet on a box to offload weight if needed.',
      hold: '3 x 20-30 s',
    },
  ],
};

const TRAPS: WorkoutGuide = {
  id: 'traps',
  title: 'Trapezius (upper back)',
  trainable: true,
  blurb:
    'The trapezius shrugs, retracts and stabilises the shoulder blades. Shrug heavy, then row to train the middle and lower fibres.',
  exercises: [
    {
      name: 'Dumbbell Shrug',
      how: 'Stand tall, shrug straight up toward the ears, pause one second, then lower fully. Do not roll the shoulders.',
      sets: '3-4 x 10-15',
      equipment: 'Heavy dumbbells',
      image: `${WGER}/151/Dumbbell-shrugs-2.png`,
      wgerId: 572,
    },
    {
      name: 'Barbell Shrug',
      how: 'Same motion with a barbell for heavier loading. Hold the top briefly and avoid bending the elbows.',
      sets: '3 x 10-12',
      equipment: 'Barbell',
      image: `${WGER}/150/Barbell-shrugs-1.png`,
      wgerId: 571,
    },
    {
      name: 'Bent-Over Dumbbell Row',
      how: 'One knee on a bench, row the dumbbell to the hip. This hits the mid-traps and rhomboids as well as the lats.',
      sets: '3 x 10-12 each side',
      equipment: 'Dumbbell · Bench',
      image: `${WGER}/81/a751a438-ae2d-4751-8d61-cef0e9292174.png`,
      wgerId: 81,
    },
  ],
  stretches: [
    {
      name: 'Ear-to-shoulder stretch',
      how: 'Sit tall and bring one ear gently toward the shoulder until the opposite trap pulls. Do not yank the head; let gravity do the work.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Chin-tuck release',
      how: 'Tuck the chin to make a double chin, then nod the head gently forward. Releases the upper traps and the base of the skull.',
      hold: '2 x 10 reps, 5 s holds',
    },
  ],
};

const CUFF: WorkoutGuide = {
  id: 'cuff',
  title: 'Rotator cuff & rear shoulder',
  trainable: true,
  blurb:
    'Infraspinatus, supraspinatus, teres minor and the rear deltoid stabilise the shoulder. Train them light and strict - this is prehab, not ego lifting.',
  exercises: [
    {
      name: 'Bent-Over Dumbbell Row (rear-delt bias)',
      how: 'Hinge over, flare the elbows to ~70 degrees and row wide. Think "open the chest" at the top.',
      sets: '3 x 12-15 (light)',
      equipment: 'Light dumbbells',
      image: `${WGER}/81/a751a438-ae2d-4751-8d61-cef0e9292174.png`,
      wgerId: 81,
    },
    {
      name: 'Dumbbell Shoulder Press (light, full range)',
      how: 'Press light dumbbells through a full, pain-free range to strengthen the whole shoulder girdle including the cuff.',
      sets: '2-3 x 12-15 (light)',
      equipment: 'Light dumbbells',
      image: `${WGER}/123/dumbbell-shoulder-press-large-1.png`,
      wgerId: 567,
    },
  ],
  stretches: [
    {
      name: 'Cross-body rear-shoulder stretch',
      how: 'Pull the arm lightly across the chest. Keep it very gentle - the cuff responds to light, frequent stretching, not force. Stop with any pinching at the front of the shoulder.',
      hold: '2 x 20-30 s each side',
    },
    {
      name: 'Light doorway opener',
      how: 'Tight pecs pull the shoulders forward and irritate the cuff. A light doorway stretch with the elbow below shoulder height relieves that pull.',
      hold: '2 x 20-30 s',
    },
  ],
};

const CORE: WorkoutGuide = {
  id: 'core',
  title: 'Core (abs & obliques)',
  trainable: true,
  blurb:
    'The abdominals and obliques brace the trunk and bend or twist it. Build them with a crunch-type move plus an anti-movement hold like the plank.',
  exercises: [
    {
      name: 'Crunch',
      how: 'Lie with knees bent, curl the ribs toward the pelvis, exhaling at the top. Keep the lower back heavy on the floor - small range, hard squeeze.',
      sets: '3 x 12-20',
      equipment: 'Bodyweight · Mat',
      image: `${WGER}/91/Crunches-1.png`,
      wgerId: 167,
    },
    {
      name: 'Plank',
      how: 'Forearms down, body in one line from head to heels. Squeeze glutes and brace as if expecting a punch. Stop when the hips sag.',
      sets: '3 x 20-60 s',
      equipment: 'Bodyweight',
      image: `${WGER}/458/b7bd9c28-9f1d-4647-bd17-ab6a3adf5770.png`,
      wgerId: 458,
    },
  ],
  stretches: [
    {
      name: 'Cobra (prone press-up)',
      how: 'Lie face down and press the chest up on straight arms with the hips heavy on the floor. Rise only to a gentle stretch in the abs - no back pain.',
      hold: '2 x 20-30 s',
    },
    {
      name: 'Standing side bend',
      how: 'Reach one arm overhead and lean to the opposite side to stretch the obliques. Keep the hips square and the knees soft.',
      hold: '2 x 20-30 s each side',
    },
  ],
};

const BACK_EXT: WorkoutGuide = {
  id: 'backext',
  title: 'Lower back & spinal extensors',
  trainable: true,
  blurb:
    'The deep spinal muscles (iliocostalis, longissimus, spinalis) hold you upright. Strengthen them with controlled extensions and hip-hinge patterns.',
  exercises: [
    {
      name: 'Hyperextension (back extension)',
      how: 'Hips on the pad, cross arms on chest. Lower with a flat back, then extend until the body is straight. Do not hyperextend.',
      sets: '3 x 12-15',
      equipment: 'Hyperextension bench',
      image: `${WGER}/128/Hyperextensions-1.png`,
      wgerId: 301,
    },
    {
      name: 'Glute Bridge',
      how: 'Feet flat, drive through the heels to lift the hips until knees-hips-shoulders align. Squeeze the glutes hard at the top.',
      sets: '3 x 12-15',
      equipment: 'Bodyweight · Mat',
      image: `${WGER}/265/7528acb4-b2cc-4b75-b6ae-d514cbd4f78b.png`,
      wgerId: 265,
    },
  ],
  stretches: [
    {
      name: "Child's pose",
      how: 'Kneel, sit back on the heels with arms long ahead and forehead down. Breathe into the lower back for a gentle spinal stretch.',
      hold: '1-2 min',
    },
    {
      name: 'Lying knee-to-chest',
      how: 'Lie on your back and hug one or both knees to the chest until the lower back flattens into the floor.',
      hold: '2 x 30 s',
    },
  ],
};

const GLUTES: WorkoutGuide = {
  id: 'glutes',
  title: 'Glutes',
  trainable: true,
  blurb:
    'Gluteus maximus, medius and minimus extend and stabilise the hip. Bridge or squat deep, and add lunges for single-leg strength.',
  exercises: [
    {
      name: 'Glute Bridge',
      how: 'The simplest glute builder. Progress to single-leg bridges or hip thrusts with the shoulders on a bench.',
      sets: '3 x 12-20',
      equipment: 'Bodyweight · Mat',
      image: `${WGER}/265/7528acb4-b2cc-4b75-b6ae-d514cbd4f78b.png`,
      wgerId: 265,
    },
    {
      name: 'Goblet Squat',
      how: 'Hold a dumbbell at the chest, sit deep between the heels with the chest up, then drive up through the whole foot.',
      sets: '3 x 8-12',
      equipment: 'Dumbbell / kettlebell',
      image: `${WGER}/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg`,
      wgerId: 203,
    },
    {
      name: 'Walking Lunge',
      how: 'Long steps, torso tall, front knee over the ankle. Push through the front heel. Hits glutes, quads and balance.',
      sets: '2-3 x 10-12 each leg',
      equipment: 'Bodyweight or dumbbells',
      image: `${WGER}/113/Walking-lunges-1.png`,
      wgerId: 206,
    },
  ],
  stretches: [
    {
      name: 'Supine figure-4',
      how: 'Lie on your back, cross one ankle over the opposite knee and pull the bottom leg toward you until the outer hip stretches. Keep the head down.',
      hold: '2 x 30-60 s each side',
    },
    {
      name: 'Supported pigeon',
      how: 'From hands and knees, bring one shin forward and settle the hips toward the floor over it. Place a cushion under the hip if it hangs in the air.',
      hold: '2 x 30-60 s each side',
    },
  ],
};

const QUADS: WorkoutGuide = {
  id: 'quads',
  title: 'Quadriceps (front of thigh)',
  trainable: true,
  blurb:
    'Rectus femoris and the vasti straighten the knee. Squat deep, lunge, and finish with leg extensions for isolation.',
  exercises: [
    {
      name: 'Front Squat',
      how: 'Bar on the front of the shoulders, elbows high. Sit deep with an upright torso, knees tracking over the toes.',
      sets: '3-4 x 6-10',
      equipment: 'Barbell · Rack',
      image: `${WGER}/191/Front-squat-1-857x1024.png`,
      wgerId: 257,
    },
    {
      name: 'Leg Press',
      how: 'Feet shoulder-width on the platform. Lower until knees are ~90 degrees, then press without locking out hard.',
      sets: '3 x 10-12',
      equipment: 'Leg-press machine',
      image: `${WGER}/371/d2136f96-3a43-4d4c-9944-1919c4ca1ce1.webp`,
      wgerId: 371,
    },
    {
      name: 'Leg Extension',
      how: 'Sit tall, extend the knees to straight, squeeze one second, then lower slowly. Great isolation finisher.',
      sets: '3 x 12-15',
      equipment: 'Leg-extension machine',
      image: `${WGER}/369/78c915d1-e46d-4d30-8124-65d68664c3ef.png`,
      wgerId: 369,
    },
  ],
  stretches: [
    {
      name: 'Standing quad stretch',
      how: 'Holding a wall, pull one heel to the glute with the knees together and the pelvis tucked. You should feel the front of the thigh, never the knee.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Half-kneeling stretch',
      how: 'Kneel on one knee with a pad under it, tuck the pelvis and shift gently forward. Squeeze the back glute to deepen the quad and hip-flexor stretch.',
      hold: '2 x 30 s each side',
    },
  ],
};

const HAMS: WorkoutGuide = {
  id: 'hams',
  title: 'Hamstrings (back of thigh)',
  trainable: true,
  blurb:
    'Semitendinosus, semimembranosus and biceps femoris bend the knee and hinge the hip. Curl the knee against resistance and hinge with a flat back.',
  exercises: [
    {
      name: 'Lying Leg Curl',
      how: 'Face down, pads behind the ankles. Curl to the glutes without lifting the hips, squeeze, then lower slowly.',
      sets: '3 x 10-12',
      equipment: 'Leg-curl machine',
      image: `${WGER}/154/lying-leg-curl-machine-large-1.png`,
      wgerId: 365,
    },
    {
      name: 'Seated Leg Curl',
      how: 'Back flat against the pad, curl the heels underneath you. A slightly different angle that many feel more in the hamstrings.',
      sets: '3 x 10-12',
      equipment: 'Seated leg-curl machine',
      image: `${WGER}/117/seated-leg-curl-large-1.png`,
      wgerId: 366,
    },
    {
      name: 'Glute Bridge (hip-hinge support)',
      how: 'Use bridges to learn the hip-hinge squeeze that protects the lower back in deadlifts and swings.',
      sets: '2-3 x 12-15',
      equipment: 'Bodyweight',
      image: `${WGER}/265/7528acb4-b2cc-4b75-b6ae-d514cbd4f78b.png`,
      wgerId: 265,
    },
  ],
  stretches: [
    {
      name: 'Supine strap stretch',
      how: 'Lie back, loop a towel around one foot and straighten the leg toward the ceiling until the back of the thigh pulls. Keep the lower back flat on the floor.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Standing hinge stretch',
      how: 'Rest one heel on a low step with a straight leg and hinge forward at the hips with a flat back until the hamstring pulls. Point the toes toward you.',
      hold: '2 x 30 s each side',
    },
  ],
};

const CALVES: WorkoutGuide = {
  id: 'calves',
  title: 'Calves',
  trainable: true,
  blurb:
    'Gastrocnemius (upper, two-headed) and soleus (deeper) point the foot. Train straight-knee raises for the gastrocs and seated/bent-knee work for the soleus.',
  exercises: [
    {
      name: 'Standing Calf Raise',
      how: 'Rise as high as possible on the balls of the feet, pause one second, then stretch deep at the bottom. No bouncing.',
      sets: '4 x 12-20',
      equipment: 'Bodyweight · Step',
      image: `${WGER}/1243/53d4fabe-c994-4907-873f-8d82813a9832.png`,
      wgerId: 1243,
    },
    {
      name: 'Calf Press on Leg Press',
      how: 'Balls of the feet low on the platform, knees almost straight. Press through the toes through a full stretch and squeeze.',
      sets: '3 x 12-15',
      equipment: 'Leg-press machine',
      image: `${WGER}/146/8b284904-d072-4381-a256-4c81d8fd9c1f.png`,
      wgerId: 146,
    },
  ],
  stretches: [
    {
      name: 'Straight-knee wall stretch (gastrocnemius)',
      how: 'Hands on a wall, one leg back with the heel down and the knee straight. Lean in until the upper calf pulls.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Bent-knee wall stretch (soleus)',
      how: 'Same position, but bend the back knee while keeping the heel down. The pull moves lower, toward the Achilles.',
      hold: '2 x 30 s each side',
    },
  ],
};

const ADDUCTORS: WorkoutGuide = {
  id: 'adductors',
  title: 'Inner thigh (adductors)',
  trainable: true,
  blurb:
    'Adductor longus, brevis, magnus and gracilis pull the legs together and stabilise the pelvis in squats and lunges.',
  exercises: [
    {
      name: 'Goblet Squat (wide stance)',
      how: 'Take a wider stance with toes slightly out and sit deep. The inner thighs work hard to control the knees.',
      sets: '3 x 8-12',
      equipment: 'Dumbbell / kettlebell',
      image: `${WGER}/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg`,
      wgerId: 203,
    },
    {
      name: 'Walking Lunge',
      how: 'Long, controlled steps with the torso tall. Keep the front knee tracking over the ankle for adductor and glute work.',
      sets: '2-3 x 10 each leg',
      equipment: 'Bodyweight or dumbbells',
      image: `${WGER}/113/Walking-lunges-1.png`,
      wgerId: 206,
    },
    {
      name: 'Plank (adductor support)',
      how: 'Side planks in particular force the inner thigh of the bottom leg to stabilise the pelvis.',
      sets: '3 x 20-40 s each side',
      equipment: 'Bodyweight',
      image: `${WGER}/458/b7bd9c28-9f1d-4647-bd17-ab6a3adf5770.png`,
      wgerId: 458,
    },
  ],
  stretches: [
    {
      name: 'Seated butterfly',
      how: 'Sit with the soles of the feet together and the knees falling out. Sit tall and lean gently forward from the hips for an inner-thigh stretch.',
      hold: '2 x 30-60 s',
    },
    {
      name: 'Supported side lunge',
      how: 'Take a wide stance and shift the hips to one side, bending that knee while the other leg stays straight. Keep the chest up and hold a support if needed.',
      hold: '2 x 30 s each side',
    },
  ],
};

const HIPFLEX: WorkoutGuide = {
  id: 'hipflex',
  title: 'Hip flexors (iliacus & psoas)',
  trainable: true,
  blurb:
    'Iliacus and psoas lift the knee toward the chest. Strengthen them with controlled knee raises; stretch them if sitting all day makes them feel tight.',
  exercises: [
    {
      name: 'Crunch (reverse / knee-raise style)',
      how: 'Lie back and curl the pelvis up, bringing the knees toward the chest. Control the lowering - do not swing.',
      sets: '3 x 10-15',
      equipment: 'Bodyweight · Mat',
      image: `${WGER}/91/Crunches-1.png`,
      wgerId: 167,
    },
    {
      name: 'Goblet Squat (deep, upright)',
      how: 'Deep, upright squats take the hip flexors through a long range under load while the glutes do the lifting.',
      sets: '3 x 8-12',
      equipment: 'Dumbbell / kettlebell',
      image: `${WGER}/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg`,
      wgerId: 203,
    },
  ],
  stretches: [
    {
      name: 'Half-kneeling hip-flexor stretch',
      how: 'Kneel on one knee, tuck the pelvis under and shift forward until the front of the back hip pulls. Reach the same-side arm overhead for more.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Couch stretch (gentle)',
      how: 'Back knee against a wall or couch, front foot flat, torso tall. Only go as deep as a gentle pull allows - this one is intense.',
      hold: '2 x 20-30 s each side',
    },
  ],
};

const NECK: WorkoutGuide = {
  id: 'neck',
  title: 'Neck',
  trainable: true,
  blurb:
    'Sternocleidomastoid, scalenes and deep neck muscles position the head. Train very lightly with bodyweight only, through small pain-free ranges.',
  exercises: [],
  tips: [
    'Chin tucks: sit tall, glide the chin straight back to make a "double chin", hold 5 s. 2 x 10.',
    'Gentle isometrics: press the palm into the forehead, then each side of the head, holding 10 s without moving the neck. 3 rounds each direction.',
    'Stop and see a clinician for numbness, radiating arm pain, dizziness, or any recent whiplash injury.',
  ],
  stretches: [
    {
      name: 'SCM side-bend stretch',
      how: 'Tilt one ear toward the shoulder, then turn the chin slightly upward to feel the front-side of the neck. Use only the weight of the head - no pulling.',
      hold: '2 x 20 s each side',
    },
    {
      name: 'Chin-tuck rotations',
      how: 'Tuck the chin, then slowly turn the head side to side through a comfortable range. Move slowly and stop with any dizziness or sharp pain.',
      hold: '2 x 8 each side',
    },
  ],
};

const FOOT: WorkoutGuide = {
  id: 'foot',
  title: 'Feet & ankles',
  trainable: true,
  blurb:
    'Small foot muscles support the arch and toes. Strengthen them barefoot with calf raises, short-foot drills and towel scrunches.',
  exercises: [
    {
      name: 'Standing Calf Raise',
      how: 'Barefoot on a step, rise tall and lower into a deep stretch. Also strengthens the small stabilisers of the foot and ankle.',
      sets: '3 x 15-20',
      equipment: 'Bodyweight · Step',
      image: `${WGER}/1243/53d4fabe-c994-4907-873f-8d82813a9832.png`,
      wgerId: 1243,
    },
    {
      name: 'Calf Press on Leg Press',
      how: 'Light, controlled presses through the balls of the feet. Keep the ankles tracking straight over the toes.',
      sets: '2-3 x 15',
      equipment: 'Leg-press machine',
      image: `${WGER}/146/8b284904-d072-4381-a256-4c81d8fd9c1f.png`,
      wgerId: 146,
    },
  ],
  stretches: [
    {
      name: 'Step sole stretch',
      how: 'Stand with the ball of the foot on a step and let the heel drop below it. For the sole itself, sit and gently pull the toes back by hand.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Ball roll for the arch',
      how: 'Roll a tennis or lacrosse ball under the arch, pausing on tender spots. Keep pressure light - intense but never painful.',
      hold: '1-2 min each foot',
    },
  ],
};

const BREATHING: WorkoutGuide = {
  id: 'breathing',
  title: 'Breathing muscles',
  trainable: true,
  blurb:
    'The diaphragm and intercostals power breathing. You do not lift weights with them - you train them with cardio, posture work and breathing drills.',
  exercises: [],
  tips: [
    'Diaphragmatic breathing: 5 minutes daily, inhale through the nose feeling the ribs expand, long slow exhale.',
    'Zone-2 cardio 2-3 x per week (brisk walk, bike, swim) trains the diaphragm better than any weight.',
    'Thoracic opener: foam-roller extensions over the upper back, 2 x 8 slow reps.',
  ],
};

const PELVIC: WorkoutGuide = {
  id: 'pelvic',
  title: 'Pelvic floor',
  trainable: true,
  blurb:
    'These sling muscles support the pelvis and continence. They are trained with gentle Kegels and deep-core work, not gym weights. Ask a physiotherapist if unsure.',
  exercises: [],
  tips: [
    'Kegels: gently squeeze as if stopping urine flow, hold 5 s, fully relax 5 s. 2 x 10, twice daily.',
    'Pair with breathing: exhale on the squeeze, never hold your breath or clench the glutes hard.',
    'See a pelvic-health physiotherapist for leakage, prolapse symptoms, or post-natal recovery.',
  ],
};

const SERRATUS: WorkoutGuide = {
  id: 'serratus',
  title: 'Serratus anterior',
  trainable: true,
  blurb:
    'The serratus protracts the shoulder blade ("punch" muscle) and supports overhead pressing. Train it with push-ups plus, presses and planks.',
  exercises: [
    {
      name: 'Dumbbell Shoulder Press',
      how: 'Press overhead with a full reach at the top, letting the shoulder blades rotate upward. Light and controlled.',
      sets: '3 x 10-12',
      equipment: 'Dumbbells',
      image: `${WGER}/123/dumbbell-shoulder-press-large-1.png`,
      wgerId: 567,
    },
    {
      name: 'Plank (serratus push-up plus)',
      how: 'From a plank or push-up top position, push the floor away to round the upper back slightly, then relax. Small but potent motion.',
      sets: '3 x 10-12 reps or 30 s holds',
      equipment: 'Bodyweight',
      image: `${WGER}/458/b7bd9c28-9f1d-4647-bd17-ab6a3adf5770.png`,
      wgerId: 458,
    },
  ],
  stretches: [
    {
      name: 'Thread the needle',
      how: 'On all fours, slide one arm under the body and rest that shoulder on the floor. Feel the shoulder blade wrap around the ribs.',
      hold: '2 x 30 s each side',
    },
    {
      name: 'Foam-roller thoracic extension',
      how: 'Lie with a roller across the shoulder blades, hands behind the head, and arch gently over it. Move the roller up and down the upper back.',
      hold: '2 x 8 slow reps',
    },
  ],
};

const GENERAL: WorkoutGuide = {
  id: 'general',
  title: 'Whole-body strength',
  trainable: true,
  blurb:
    'This deep or rarely isolated muscle is best trained as part of whole-body compound movements rather than with an isolation exercise.',
  exercises: [
    {
      name: 'Goblet Squat',
      how: 'A knee-dominant compound lift covering quads, glutes and trunk in one move. Sit deep and drive through the whole foot.',
      sets: '3 x 8-12',
      equipment: 'Dumbbell / kettlebell',
      image: `${WGER}/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg`,
      wgerId: 203,
    },
    {
      name: 'Bent-Over Dumbbell Row',
      how: 'A hip-hinge pull for the entire back, arms and grip. Hinge, brace, row to the hip.',
      sets: '3 x 8-12 each side',
      equipment: 'Dumbbell · Bench',
      image: `${WGER}/81/a751a438-ae2d-4751-8d61-cef0e9292174.png`,
      wgerId: 81,
    },
    {
      name: 'Dumbbell Bench Press',
      how: 'A horizontal push for chest, shoulders and triceps. Touch the chest lightly each rep.',
      sets: '3 x 8-12',
      equipment: 'Dumbbells · Bench',
      image: `${WGER}/97/Dumbbell-bench-press-1.png`,
      wgerId: 75,
    },
  ],
  stretches: [
    {
      name: "World's greatest stretch",
      how: 'Step into a deep lunge, place the elbow inside the front foot, then rotate that arm to the sky. Hits hips, hamstrings and spine in one move.',
      hold: '2 x 30 s each side',
    },
    {
      name: "Child's pose + doorway reset",
      how: 'Finish with a minute of child’s pose and a light doorway chest stretch to reset posture after training.',
      hold: '1 min each',
    },
  ],
};

const UNSTRAINABLE: WorkoutGuide = {
  id: 'notrain',
  title: 'Not a gym muscle',
  trainable: false,
  blurb:
    'This structure moves the eyes, tongue, larynx or internal organs - it is controlled automatically or with tiny precise motions, not with resistance training. No workout is shown on purpose.',
  exercises: [],
};

// ---------------------------------------------------------------------------
// Matcher: ordered rules, first match wins. Names are lowercased and stripped
// of leading left/right.
// ---------------------------------------------------------------------------

type Rule = { re: RegExp; guide: WorkoutGuide };
function r(re: string): RegExp {
  return new RegExp(re, 'i');
}

const RULES: Rule[] = [
  // --- Not trainable with weights -----------------------------------------
  { re: r('extra-ocular|levator palpebrae|levator veli|tensor veli|uvular? muscle|uvula'), guide: UNSTRAINABLE },
  { re: r('^(inferior rectus|superior rectus|medial rectus|lateral rectus|inferior oblique|superior oblique)$'), guide: UNSTRAINABLE },
  { re: r('genioglossus|hyoglossus|geniohyoid|mylohyoid|stylohyoid|digastric|tongue|palate|faucial'), guide: UNSTRAINABLE },
  { re: r('arytenoid|cricothyroid|thyro-arytenoid|vocalis|larynx|glottis|epiglott'), guide: UNSTRAINABLE },
  { re: r('myocardium|myocardial|papillary muscle|wall of (left|right) ventricle|ventricle|atrium|heart'), guide: UNSTRAINABLE },
  { re: r('^(eye|face|mouth|upper eyelid)$'), guide: UNSTRAINABLE },
  { re: r('anal sphincter|anal part of perineum'), guide: PELVIC },

  // --- Breathing ------------------------------------------------------------
  { re: r('^diaphragm$|intercostal|transversus thoracis|serratus posterior'), guide: BREATHING },

  // --- Pelvic floor ----------------------------------------------------------
  { re: r('coccygeus|iliococcygeus|pubococcygeus|puborectalis|levator ani|perineal muscle|perineum|superficial perineal'), guide: PELVIC },

  // --- Chest ------------------------------------------------------------------
  { re: r('pectoralis major|pectoralis minor|pectoral muscle|zone of pectoralis'), guide: CHEST },

  // --- Shoulders ---------------------------------------------------------------
  { re: r('deltoid|zone of deltoid'), guide: DELTS },

  // --- Arms ---------------------------------------------------------------------
  { re: r('biceps brachii|coracobrachialis'), guide: BICEPS },
  { re: r('triceps brachii|anconeus'), guide: TRICEPS },
  { re: r('brachialis|brachioradialis|pronator|supinator|palmaris|flexor carpi|extensor carpi|flexor digitorum (profundus|superficialis)|extensor digitorum$|extensor digitorum communis|flexor pollicis longus|extensor pollicis|abductor pollicis|flexor digiti minimi brevis of (left |right )?hand|abductor digiti minimi of (left |right )?hand|opponens (digiti minimi of (left |right )?hand|pollicis)|thenar|hypothenar|lumbrical.{0,12}hand|interossei.{0,12}hand|palmar interosse'), guide: FOREARMS },

  // --- Trunk ----------------------------------------------------------------------
  { re: r('rectus abdominis|external oblique|internal oblique|abdomen|abdominal wall|pyramidalis'), guide: CORE },
  { re: r('serratus anterior'), guide: SERRATUS },
  { re: r('trapezius|zone of trapezius'), guide: TRAPS },
  { re: r('rhomboid'), guide: TRAPS },
  { re: r('infraspinatus|supraspinatus|teres minor|subscapularis'), guide: CUFF },
  { re: r('latissimus|teres major'), guide: LATS },
  { re: r('sternocleidomastoid|scalenus|splenius|semispinalis capitis|longus colli|longus capitis|rectus capitis|obliquus capitis|infrahyoid|suprahyoid|omohyoid|sternohyoid|sternothyroid|thyrohyoid|platysma'), guide: NECK },
  { re: r('iliocostalis|longissimus|semispinalis (cervicis|thoracis)|spinalis|erector|multifidus|interspinalis|intertransversarius|(lumbar|thoracic|cervical) rotator|postvertebral|prevertebral|paraspinal|quadratus lumborum|transversospinal'), guide: BACK_EXT },

  // --- Hips & legs ------------------------------------------------------------------
  { re: r('gluteus|gluteal|piriformis|obturator|gemellus|quadratus femoris'), guide: GLUTES },
  { re: r('rectus femoris|vastus|quadriceps|sartorius'), guide: QUADS },
  { re: r('biceps femoris|semitendinosus|semimembranosus'), guide: HAMS },
  { re: r('gastrocnemius|soleus|plantaris|popliteus'), guide: CALVES },
  { re: r('tibialis|peroneus|fibularis|extensor hallucis|flexor hallucis|extensor digitorum longus|flexor digitorum longus|extensor indicis|abductor hallucis|flexor digitorum brevis|abductor digiti minimi of (left |right )?foot|lumbrical.{0,12}foot|interosseous of foot|plantar interosseous|dorsum of foot|plantar part of foot'), guide: FOOT },
  { re: r('adductor (brevis|longus|magnus|minimus)|gracilis|pectineus'), guide: ADDUCTORS },
  { re: r('iliacus|psoas'), guide: HIPFLEX },

  // --- Generic region fallbacks -------------------------------------------------------------
  { re: r('muscle of head|muscle of face'), guide: UNSTRAINABLE },
  { re: r('muscle of (anterior|posterior|medial) compartment of thigh|muscle of thigh|thigh'), guide: QUADS },
  { re: r('muscle of (anterior|posterior) compartment of leg|muscle of leg|shank|calf'), guide: CALVES },
  { re: r('muscle of (anterior|posterior) compartment of forearm|muscle of forearm|muscle of hand|forearm|hand|wrist'), guide: FOREARMS },
  { re: r('muscle of (anterior|posterior) compartment of arm|muscle of arm|muscle of upper limb|muscle of free upper limb|upper limb'), guide: GENERAL },
  { re: r('muscle of shoulder|shoulder|pectoral girdle'), guide: DELTS },
  { re: r('muscle of (thorax|chest)|chest'), guide: CHEST },
  { re: r('muscle of (abdomen|trunk)|trunk|abdominal'), guide: CORE },
  { re: r('muscle of neck|neck'), guide: NECK },
  { re: r('muscle of vertebral column|back muscle'), guide: BACK_EXT },
  { re: r('muscle of (pelvis|pelvic)|pelvis|hip muscle|pelvic girdle'), guide: GLUTES },
  { re: r('muscle of foot|foot|ankle'), guide: FOOT },
  { re: r('muscle of tongue|tongue'), guide: UNSTRAINABLE },
];

const BASE_STRIP = /^(left|right)\s+/i;

export function workoutForMuscle(conceptName: string): WorkoutGuide {
  const base = conceptName.trim().replace(BASE_STRIP, '').trim();
  for (const rule of RULES) {
    rule.re.lastIndex = 0;
    if (rule.re.test(conceptName) || rule.re.test(base)) return rule.guide;
  }
  // Tiny facial / eye / throat leftovers default to "not a gym muscle".
  if (r('ocular|palpebrae|rectus$|oblique$|arytenoid|glossus|hyoid|pharyn|oral|nasal|auric').test(base)) return UNSTRAINABLE;
  return GENERAL;
}

export const WORKOUT_GUIDES: Record<string, WorkoutGuide> = {
  chest: CHEST,
  delts: DELTS,
  biceps: BICEPS,
  triceps: TRICEPS,
  forearms: FOREARMS,
  lats: LATS,
  traps: TRAPS,
  cuff: CUFF,
  core: CORE,
  backext: BACK_EXT,
  glutes: GLUTES,
  quads: QUADS,
  hams: HAMS,
  calves: CALVES,
  adductors: ADDUCTORS,
  hipflex: HIPFLEX,
  neck: NECK,
  foot: FOOT,
  breathing: BREATHING,
  pelvic: PELVIC,
  serratus: SERRATUS,
  general: GENERAL,
  notrain: UNSTRAINABLE,
};
