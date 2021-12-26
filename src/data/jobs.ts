import {
  Contract,
  Jobs,
  Language,
  Level,
  Location,
  Role,
  Tool,
} from "../types/jobs.types";

export const jobList: Jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: Role.Frontend,
    level: Level.Senior,
    postedAt: "1d ago",
    contract: Contract.FullTime,
    location: Location.Switzerland,
    languages: [Language.HTML, Language.CSS, Language.JavaScript],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: Role.Fullstack,
    level: Level.Intermediate,
    postedAt: "1d ago",
    contract: Contract.PartTime,
    location: Location.Remote,
    languages: [Language.Python],
    tools: [Tool.React],
  },
  {
    id: 3,
    company: "Account",
    logo: "account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: Role.Frontend,
    level: Level.Junior,
    postedAt: "2d ago",
    contract: Contract.PartTime,
    location: Location.Switzerland,
    languages: [Language.JavaScript],
    tools: [Tool.React, Tool.Sass],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: Role.Frontend,
    level: Level.Junior,
    postedAt: "5d ago",
    contract: Contract.Contract,
    location: Location.Switzerland,
    languages: [Language.CSS, Language.JavaScript],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: Role.Fullstack,
    level: Level.Intermediate,
    postedAt: "1w ago",
    contract: Contract.FullTime,
    location: Location.Worldwide,
    languages: [Language.JavaScript, Language.Ruby],
    tools: [Tool.Rails, Tool.Sass],
  },
  {
    company: "FaceIt",
    id: 6,
    logo: "faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: Role.Backend,
    level: Level.Junior,
    postedAt: "2w ago",
    contract: Contract.FullTime,
    location: Location.Switzerland,
    languages: [Language.Ruby],
    tools: [Tool.Rails],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: Role.Frontend,
    level: Level.Junior,
    postedAt: "2w ago",
    contract: Contract.FullTime,
    location: Location.Worldwide,
    languages: [Language.HTML, Language.JavaScript],
    tools: [Tool.Sass],
  },
  {
    id: 8,
    company: "Insure",
    logo: "insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: Role.Frontend,
    level: Level.Junior,
    postedAt: "2w ago",
    contract: Contract.FullTime,
    location: Location.Remote,
    languages: [Language.JavaScript],
    tools: [Tool.Vue, Tool.Sass],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: Role.Fullstack,
    level: Level.Intermediate,
    postedAt: "3w ago",
    contract: Contract.FullTime,
    location: Location.Worldwide,
    languages: [Language.JavaScript, Language.Python],
    tools: [Tool.Django],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: Role.Frontend,
    level: Level.Junior,
    postedAt: "1mo ago",
    contract: Contract.PartTime,
    location: Location.Worldwide,
    languages: [Language.JavaScript],
    tools: [Tool.React, Tool.Sass],
  },
];
