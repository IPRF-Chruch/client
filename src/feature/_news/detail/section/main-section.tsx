import { INewsType } from "@/shared/lib/types/NewsType";
import Image from "next/image";

export default function NewsSection(
  props: Readonly<{
    data: INewsType | undefined;
  }>
) {
  const { data } = props;

  return (
    <div className="flex justify-center">
      <div className="lg:w-3/4 min-h-[120vh] lg:min-h-[150vh] bg-white flex flex-col p-5 pt-10 gap-10">
        {data?.image_url && (
          <Image
            src={data?.image_url}
            alt="news"
            width={1200}
            height={1000}
            className="self-center"
          />
        )}
        <div className="space-y-2">
          <h3 className="text-gray-500 text-xl">{data?.upload_date}</h3>
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <div className="border-b border-gray-300 py-2"></div>
          <p className="text-justify">{data?.content}</p>
        </div>
        <button
          className="px-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-500 cursor-pointer"
          onClick={() => window.open(data?.pdf_url, "_blank")}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
