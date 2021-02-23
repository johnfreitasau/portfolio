export type ProjectProps = {
  project: {
    id: String;
    title: String;
    githubUrl: String;
    liveUrl?: String;
    image?: {
      id: any;
      imageAlt: any;
      thumbnailUrl?: any;
      imagePreviewUrl?: any;
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
