export type Blog = {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  category: 'Development' | 'MusicTech' | 'Creative';
  featured?: boolean;
  image?: string;
  timeToRead?: number;
  tags?: string[];
  content: string;
};
