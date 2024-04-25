import Data from "../public/data/data.json";

export default function sitemap() {
  // change ID to name somehow
  const manga = Data.manga.map((item) => ({
    url: `${process.env.DEPLOY_URL}/manga/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  const game = Data.manga.map((item) => ({
    url: `${process.env.DEPLOY_URL}/game/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  const movie = Data.manga.map((item) => ({
    url: `${process.env.DEPLOY_URL}/movie/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: "https://portfolio-eight-nu-51.vercel.app/game",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://portfolio-eight-nu-51.vercel.app/manga",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://portfolio-eight-nu-51.vercel.app/movie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...manga,
    ...movie,
    ...game,
  ];
}
