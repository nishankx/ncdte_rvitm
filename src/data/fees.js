// DRAFT items marked below: verify with organisers before publishing

export const FEES_DATA = {
  main: {
    category: "UG Student / PG Student / Academicians",
    amount: "Rs. 1300",
    kitIncluded: true,
    description:
      "Includes access to all technical sessions, presentation slots, conference kit, and certificate.",
  },
  secondary: {
    category: "Extra Team Members",
    amount: "Rs. 200",
    kitIncluded: false,
    description:
      "Applicable for co-authors or additional team members attending the presentation sessions.",
  },
  note: "Registration Kit will be provided for participants who register by paying the full fee of Rs. 1300.",
  deadlineNotice:
    "At least one author of each accepted paper or poster must complete registration on or before 20 November 2026.",
  extraMembersNote: "Extra team members: Rs. 200 each.",
  inclusions: [
    { text: "Full conference access", official: true },
    {
      text: "Registration kit (for participants who pay the full fee of Rs. 1300)",
      official: true,
    },
    {
      text: "Eligibility for publication of selected papers in a relevant ISSN Journal",
      official: true,
    },
    { text: "Certificate of participation / presentation", official: false }, // DRAFT
  ],
};
