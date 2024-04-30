export const ATTRIBUTES = {
  admins: [
    "name",
    "email",
    "affiliation",
    "discord",
    "major",
    "grade",
    "gender",
    "shirt",
  ],
  committees: [
    "name",
    "email",
    "affiliation",
    "discord",
    "major",
    "grade",
    "gender",
    "shirt",
  ],
  judges: [
    "name",
    "email",
    "phone",
    "gender",
    "title",
    "affiliation",
    "shirt",
    "photo",
  ],
  mentors: ["name", "email", "discord", "availability", "response"],
  volunteers: ["name", "email", "discord", "availability", "response"],
  interests: ["name", "email"],
  participants: [
    "phone",
    "major",
    "age",
    "school",
    "grade",
    "gender",
    "shirt",
    "diet",
    "resume",
    "name",
    "email",
    "roles",
    "discord",
  ],
  sponsors: [
    "name",
    "email",
    "phone",
    "company",
    "position",
    "tier",
    "comments",
  ],
  panels: [
    "name",
    "email",
    "title",
    "gender",
    "title",
    "panelist",
    "shirt",
    "photo",
  ],
  feedback: [
    "rating",
    "additionalComments",
    "eventSource",
    "improvements",
    "notBeneficial",
    "helpful",
    "status",
  ],
  leads: [
    "name",
    "email",
    "grade",
    "gender",
    "major",
    "discord",
    "response",
    "eventSource",
    "school",
    "priorExperience",
    "priorHackathons",
    "interested",
  ],
};

export const AUTH = {
  POST: {},
  GET: {
    admins: [1],
  },
  PUT: {
    admins: [1],
  },
  DELETE: {
    admins: [1],
  },
};
