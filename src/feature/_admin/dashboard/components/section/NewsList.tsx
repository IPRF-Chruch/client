import NewsCard from "../card/NewsCard";

export default function NewsList() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Daftar Berita</h1>
      <div className="space-y-2">
        <NewsCard />
      </div>
    </div>
  );
}
