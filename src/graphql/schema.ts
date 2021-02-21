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
  title: string;
  githubUrl: string;
  liveUrl?: string;
  image: Asset;
  description: string;
  language: string;
  stack: Stack;
  frontendStackDetails: string;
  backendStackDetails: string;
  mobileStackDetails: string;
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
