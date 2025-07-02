import { useEffect, useState } from "react";
import NewsSection from "../section/main-section";
import { INewsType } from "@/shared/lib/types/NewsType";

interface INewsContainerProps {
  id: string;
}

export default function NewsContainer(props: INewsContainerProps) {
  const { id } = props;
  const [data, setData] = useState<INewsType>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/news/${id}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [id]);

  return <NewsSection data={data} />;
}
