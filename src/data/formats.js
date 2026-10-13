// DRAFT: verify with organisers before publishing

export const PRESENTATION_FORMATS_DATA = [
  {
    id: "paper",
    title: "Paper Presentation",
    tagline: "Oral Track Session",
    desc: "Original, unpublished research presented before the conference audience.",
    accent: "from-royal to-banner",
    bullets: [
      { text: "Original and unpublished work not under consideration elsewhere", official: true },
      { text: "Similarity / plagiarism level must be strictly below 15%", official: true },
      { text: "Must follow the prescribed conference paper template", official: true },
      { text: "Rigorous peer-review process with email notification", official: true },
      { text: "Selected papers will be published in relevant ISSN Journal", official: true },
    ],
  },
  {
    id: "poster",
    title: "Poster Presentation",
    tagline: "Visual Display Session",
    desc: "A visual presentation of research findings and project outcomes.",
    accent: "from-plum to-indigoDeep",
    bullets: [
      {
        text: "Visual presentation of research findings and prototype demonstrations",
        official: false,
      }, // DRAFT
      { text: "Recommended poster size: 3 feet by 4 feet (36 x 48 inches)", official: false }, // DRAFT: confirm dimensions
      { text: "Acceptance status is communicated by email after peer review", official: true },
      {
        text: "At least one author of each accepted paper or poster must register on or before 20 November 2026",
        official: true,
      },
    ],
  },
];
