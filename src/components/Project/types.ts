export type ProjectProps = {
  id: string;
  title?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: Object;
  description?: string;
  language?: string;
  frontendStackDetails?: string;
  backendStackDetails?: string;
  mobileStackDetails?: string;
  publishedDate?: string;
  stacks?: {
    id: String;
    name: String;
  };
};
