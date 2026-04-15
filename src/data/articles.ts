export interface Article {
  title: string;
  subtitle?: string;
  tag: string;
  date: string;
  href: string;
  external?: boolean;
}

export const articles: Article[] = [
  {
    title: 'Iran and the Automation of Wars',
    subtitle: 'Originally written in Italian',
    tag: 'Il Fischio',
    date: 'April 2026',
    href: 'https://ilfischio.it/en/blog/iran-and-the-automation-of-wars/',
    external: true,
  },
  {
    title: 'Jeffrey Epstein, Peter Thiel, Ehud Barak, and the Architecture of Invisible Power',
    subtitle: 'Originally written in Italian',
    tag: 'Vega',
    date: 'Monthly issue March April 2026',
    href: 'https://vegalaredazione.it/i-mensili',
    external: true,
  },
  {
    title: "Bombing Iran Won't Free It",
    tag: 'Geopolitics',
    date: 'March 2026',
    href: 'https://jojo.news/posts/bombing-iran-won-t-free-it',
    external: true,
  },
];
