// DRAFT items marked below: verify with organisers before publishing

export const IMPORTANT_DATES = [
  {
    id: "submission",
    title: "Submission Deadline",
    dateDisplay: "2nd November, 2026",
    isoDate: "2026-11-02T23:59:59+05:30",
    description: "Final date for full research paper submissions through the online portal.",
    visible: true,
  },
  {
    id: "notification",
    title: "Notification of Acceptance",
    dateDisplay: "10th November, 2026",
    isoDate: "2026-11-10T23:59:59+05:30",
    description: "Peer-review results and acceptance letters sent via email.",
    visible: true,
  },
  {
    id: "camera-ready",
    title: "Camera Ready Paper",
    dateDisplay: "15th November, 2026",
    isoDate: "2026-11-15T23:59:59+05:30",
    description: "Final revised paper submission incorporating reviewer feedback.",
    isDraft: true, // DRAFT: verify with organisers before publishing
    badgeOverride: "TBC",
    visible: true,
  },
  {
    id: "registration",
    title: "Registration Deadline",
    dateDisplay: "20th November, 2026",
    isoDate: "2026-11-20T23:59:59+05:30",
    description: "Mandatory fee payment and registration completion for accepted papers.",
    visible: true,
  },
  {
    id: "conference",
    title: "Conference Date",
    dateDisplay: "4th December, 2026",
    isoDate: "2026-12-04T00:00:00+05:30",
    description: "Inauguration, keynote sessions, and oral track presentations at RVITM.",
    highlight: true,
    visible: true,
  },
];

export const CONTACT_DETAILS = {
  phones: [
    { label: "Coordinator 1", number: "9655523276" },
    { label: "Coordinator 2", number: "9902028279" },
    { label: "Coordinator 3", number: "7200575617" },
    { label: "Coordinator 4", number: "9739981676" },
  ],
  email: "conference.rvitm@rvei.edu.in",
  address: "Sy. No. 171/5, Kothanur, 8th Phase, JP Nagar, Bengaluru - 560076, Karnataka, India",
};
