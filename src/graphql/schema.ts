
export type Asset = {
  id: string;
  url: string;
}

export type Project = {
    id: string;
    title: string;
    stack: string;
    githubUrl: string;
    liveUrl?: string;
    image: Asset;
    description: string;
}
