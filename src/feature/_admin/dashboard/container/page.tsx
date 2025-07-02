import NewsForm from "../components/section/NewsForm";
import NewsList from "../components/section/NewsList";

export default function DashboardContainer() {
  return (
    <div className="px-8 lg:px-24 py-5 grid grid-cols-2 w-full gap-10">
      <NewsForm />
      <NewsList />
    </div>
  );
}
