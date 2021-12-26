export enum Role {
  Frontend = "Frontend",
  Fullstack = "Fullstack",
  Backend = "Backend",
}

export enum Level {
  Junior = "Junior",
  Intermediate = "Intermediate",
  Senior = "Senior",
}

export enum Contract {
  FullTime = "Full Time",
  PartTime = "Part Time",
  Contract = "Contract",
}

export enum Location {
  Remote = "Remote",
  Worldwide = "Worldwide",
  Switzerland = "Switzerland Only",
}

export enum Language {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  Python = "Python",
  Ruby = "Ruby",
}

export enum Tool {
  React = "React",
  Vue = "Vue",
  Sass = "Sass",
  Rails = "Rails",
  Django = "Django",
}

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: Role;
  level: Level;
  postedAt: string;
  contract: Contract;
  location: Location;
  languages: Language[];
  tools: Tool[];
}

export type Jobs = Job[];

export enum Status {
  new = "new!",
  featured = "featured",
}
