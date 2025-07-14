import { PastorBiodata } from "@/shared/data/static/PastorBiodata";
import PastorCard from "../card/pastor-card";

export default function PastorSection() {
  return (
    <section className="px-8 lg:px-24 py-5 flex flex-col items-center">
      <div className="text-center text-xl font-thin space-y-2 pb-10">
        <p>BIODATA</p>
        <h1 className="text-4xl font-bold">Church Pastor</h1>
      </div>
      <div className="items-center">
        {PastorBiodata.map((item, index) => (
          <PastorCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
