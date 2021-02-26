export type ProjectProps = {
  project: {
    id: String;
    title: String;
    githubUrl?: string;
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
};
