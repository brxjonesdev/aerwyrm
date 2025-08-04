export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  show: boolean;
  project?: string;
  order?: number;
};
