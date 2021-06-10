export type Asset = {
  id: string;
  url: string;
};

export type Stack = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  title: String;
  githubUrl: string;
  liveUrl?: string;
  image?: {
    id: string;
    imageAlt: string;
    thumbnailUrl?: string;
    imagePreviewUrl?: string;
  };
  description?: String;
  language: String;
  frontendStackDetails: String;
  backendStackDetails: String;
  mobileStackDetails: String;
  publishedDate: Date;
  stacks?: {
    id: string;
    name: String;
  }[];
};

export type Skills = {
  languageSkills: Skill;
  frontendDevelopmentSkills: Skill;
  backendDevelopmentSkills: Skill;
  mobileDevelopmentSkills: Skill;
  othersSkills: Skill;
};

export type Skill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};
