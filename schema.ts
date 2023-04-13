export type WorkExperience = {
  title: string;
  location: string;
  period: string;
  details: string[];
};

export type Experience = {
  title: string;
  subtitle: string;
  details: string[];
};

export type ProjectExperience = {
  role: string;
  title: string;
  period: string;
  details: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type AboutAPIData = {
  intro: string[];
  programmingSkill: string[];
  framework: string[];
  knowledge: string[];
  workExperience: Experience[];
  projectExperience: Experience[];
  education: Education[];
};

export type ProjectMeta = {
  id: number;
  route: string;
  previewImageUrl: string;
  title: string;
  tools: string[];
};

export type HomeAPIData = {
  professionalProjects: ProjectMeta[];
  sideProjects: ProjectMeta[];
};

export type ProjectArticle = {
  id: number;
  title: string;
  description: string;
  keywords: string;
  type: string;
  size: string;
  language: string;
  role: string;
};
