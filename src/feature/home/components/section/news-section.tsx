import NewsCard from "../card/news-card";

export default function WartaJemaatSection() {
  return (
    <div className="px-24 py-14 flex items-center flex-col">
      <h1 className="text-4xl font-bold text-center">Warta Jemaat</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[...Array(3)].map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
      <button className="px-10 py-2 bg-blue-600 text-white rounded hover:scale-110 transition duration-500 cursor-pointer">
        Read More
      </button>
    </div>
  );
}
