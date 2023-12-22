const LIVE_END = new Date("April 29, 2024 9:00:00");
const DEV = {
  STATIC: {
    LIVE: {
      START: new Date("10/01/2000"),
      END: LIVE_END,
    },
    POSTLIVE: {
      START: LIVE_END,
      END: new Date("10/10/2100"),
    },
  },
  DYNAMIC: {
    "/admin/participants": new Date("10/01/2023"),
    "/admin/teams": new Date("10/01/2023"),
    "/admin/judges": new Date("10/01/2023"),
    "/admin/volunteers": new Date("10/01/2023"),
    "/admin/mentors": new Date("10/01/2023"),
    "/admin/admins": new Date("10/01/2023"),
    "/admin/committees": new Date("10/01/2023"),
    "/admin/sponsors": new Date("10/01/2023"),
    "/admin/feedback": new Date("10/01/2023"),
    "/admin/calendar": new Date("10/01/2023"),
    "/admin/messenger": new Date("10/01/2023"),
    "/admin/checkin": new Date("10/01/2023"),
    "/admin/judging": new Date("10/01/2023"),
    "/admin/prizes": new Date("10/01/2023"),
    "/admin/statistics": new Date("10/01/2023"),

    "/form/particpant": new Date("10/01/2023"),
    "/form/judge": new Date("10/01/2023"),
    "/form/volunteer": new Date("10/01/2023"),
    "/form/mentor": new Date("10/01/2023"),
    "/form/admin": new Date("10/01/2023"),
    "/form/committee": new Date("10/01/2023"),
    "/form/sponsor": new Date("10/01/2023"),
    "/form/feedback": new Date("10/01/2023"),
    "/form/interest": new Date("10/01/2023"),

    "/user/checkin": new Date("10/01/2023"),
    "/user/dashboard": new Date("10/01/2023"),
    "/user/join": new Date("10/01/2023"),
  },
};

const PRODUCTION = {
  STATIC: {
    LIVE: {
      START: new Date("10/01/2023"),
      END: new Date("10/10/2024"),
    },
    POSTLIVE: {
      START: new Date("10/01/2023"),
      END: new Date("10/10/2024"),
    },
  },
  DYNAMIC: {
    "/admin/participants": new Date("10/01/2023"),
    "/admin/teams": new Date("10/01/2023"),
    "/admin/judges": new Date("10/01/2023"),
    "/admin/volunteers": new Date("10/01/2023"),
    "/admin/mentors": new Date("10/01/2023"),
    "/admin/admins": new Date("10/01/2023"),
    "/admin/committees": new Date("10/01/2023"),
    "/admin/sponsors": new Date("10/01/2023"),
    "/admin/feedback": new Date("10/01/2023"),
    "/admin/calendar": new Date("10/01/2023"),
    "/admin/messenger": new Date("10/01/2023"),
    "/admin/checkin": new Date("10/01/2023"),
    "/admin/judging": new Date("10/01/2023"),
    "/admin/prizes": new Date("10/01/2023"),
    "/admin/statistics": new Date("10/01/2023"),

    "/form/particpant": new Date("10/01/2023"),
    "/form/judge": new Date("10/01/2023"),
    "/form/volunteer": new Date("10/01/2023"),
    "/form/mentor": new Date("10/01/2023"),
    "/form/admin": new Date("10/01/2023"),
    "/form/committee": new Date("10/01/2023"),
    "/form/sponsor": new Date("10/01/2023"),
    "/form/feedback": new Date("10/01/2023"),
    "/form/interest": new Date("10/01/2023"),

    "/user/checkin": new Date("10/01/2023"),
    "/user/dashboard": new Date("10/01/2023"),
    "/user/join": new Date("10/01/2023"),
  },
};

export default process.env.NODE_ENV === "production" ? PRODUCTION : DEV;
