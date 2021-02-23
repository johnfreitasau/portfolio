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
  githubUrl: String;
  liveUrl?: String;
  image?: {
    id: string;
    imageAlt: String;
    thumbnailUrl?: String;
    imagePreviewUrl?: String;
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

export type Skill = {
  ItemSkill: ItemSkill;
  languageSkill: LanguageSkill;
  otherSkill: OtherSkill;
};

export type ItemSkill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export type LanguageSkill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export type OtherSkill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};
