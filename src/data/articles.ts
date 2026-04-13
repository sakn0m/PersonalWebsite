export interface Article {
  title: string;
  tag: string;
  date: string;
  href: string;
  external?: boolean;
}

export const articles: Article[] = [
  {
    title: "Bombing Iran Won't Free It",
    tag: 'Geopolitics',
    date: 'March 2026',
    href: 'https://jojo.news/posts/bombing-iran-won-t-free-it',
    external: true,
  },
];
