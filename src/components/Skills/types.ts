export type SkillsProps = {
  skills: {
    detailedSkills?: Array<DetailedSkill>;
    languageSkills?: Array<LanguageSkill>;
    otherSkills?: Array<OtherSkill>;
  };
};

export type DetailedSkill = {
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
