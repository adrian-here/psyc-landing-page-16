
export type VideoData = {
  url: string;
  title: string;
  available?: boolean;
};

export const problemVideos = {
  india: {
    karnataka: [
      { url: 'https://youtu.be/t5E7Kii98uo', title: 'Human-Elephant Conflicts in Karnataka - Case 1' },
      { url: 'https://youtu.be/QEpckTci8eg', title: 'Human-Elephant Conflicts in Karnataka - Case 2' },
      { url: 'https://youtu.be/0BWcYxKE_FQ', title: 'Human-Elephant Conflicts in Karnataka - Case 3' }
    ],
    kerala: [
      { url: 'https://youtu.be/Nu330qWqDvY', title: 'Human-Elephant Conflicts in Kerala - Case 1' },
      { url: 'https://youtu.be/fSqDGqeInoc', title: 'Human-Elephant Conflicts in Kerala - Case 2' },
      { url: 'https://youtu.be/D8QRcrdNoQk', title: 'Human-Elephant Conflicts in Kerala - Case 3' }
    ],
    assam: [
      { url: 'https://youtu.be/2vKKqoolyJ8', title: 'Human-Elephant Conflicts in Assam - Case 1' },
      { url: 'https://youtu.be/ILKhR5GDn8U', title: 'Human-Elephant Conflicts in Assam - Case 2' },
      { url: 'https://youtu.be/ILKhR5GDn8U', title: 'Human-Elephant Conflicts in Assam - Case 3' }
    ],
    maharashtra: [
      { url: 'https://youtu.be/fJh4gFke84M', title: 'Human-Elephant Conflicts in Maharashtra - Case 1' },
      { url: 'https://youtu.be/FJC0rLl1eek', title: 'Human-Elephant Conflicts in Maharashtra - Case 2' },
      { url: 'https://youtu.be/bKRjEp0DCWo', title: 'Human-Elephant Conflicts in Maharashtra - Case 3' }
    ],
    madhyaPradesh: [
      { url: 'https://youtu.be/CgCgnp2epq0', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 1' },
      { url: 'https://youtu.be/6cHJrfqzczc', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 2' },
      { url: '', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 3', available: false }
    ],
    odisha: [
      { url: 'https://youtu.be/zzqYRdo_SNY', title: 'Human-Elephant Conflicts in Odisha - Case 1' },
      { url: '', title: 'Human-Elephant Conflicts in Odisha - Case 2', available: false },
      { url: '', title: 'Human-Elephant Conflicts in Odisha - Case 3', available: false }
    ]
  },
  china: [
    { url: 'https://youtu.be/HE69a4j1deo', title: 'Human-Elephant Conflicts in China' },
    { url: '', title: 'Human-Elephant Conflicts in China - Case 2', available: false },
    { url: '', title: 'Human-Elephant Conflicts in China - Case 3', available: false }
  ]
};

export const africaVideos: VideoData[] = [
  { url: 'https://youtu.be/6GmTSgxhnq0', title: 'Human-Elephant Conflicts in Africa' },
  { url: 'https://youtu.be/O4iKbZ5o88A', title: 'Human-Elephant Conflicts in Zimbabwe' }
];

export const solutionsVideos: VideoData[] = [
  { url: 'https://youtu.be/Wm0KnZDzM_g', title: 'Elephant-Wildlife Conflicts Management in India' },
  { url: 'https://youtu.be/KVgMLFPC_dA', title: 'Wildlife Conflict Solutions - India' },
  { url: 'https://youtu.be/LFisjTl-Qnc', title: 'Elephant-Wildlife Conflicts in Africa - Solutions' },
  { url: 'https://youtu.be/okYUGy0NmGY', title: 'African Wildlife Management Approaches' }
];

export const conferencesVideos: VideoData[] = [
  { url: 'https://youtu.be/p9fLq5jQFZY', title: 'Human-Elephant Conference - India' },
  { url: 'https://youtu.be/C6I5Q8qhHFo', title: 'Wildlife Conservation Conference' },
  { url: 'https://www.youtube.com/live/lvy_WBIYucg', title: 'Live Conference on Human-Elephant Conflicts' }
];
