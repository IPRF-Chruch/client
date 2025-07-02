interface INewsCardProps {
  id: number;
  title: string;
  content: string;
  upload_date: string;
  image_url: string;
}

export default function NewsCard(props: INewsCardProps) {
  return (
    <div className="border p-2 px-4 rounded-lg">
      <h3 className="text-sm font-thin">{props.upload_date}</h3>
      <h1 className="font-semibold line-clamp-1">{props.title}</h1>
    </div>
  );
}
