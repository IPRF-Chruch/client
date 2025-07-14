import { ScheduleList } from "@/shared/data/static/ScheduleList";

export default function HeroSection() {
  return (
    <section className="px-8 lg:px-24 py-5">
      <div className="text-xl font-thin space-y-2">
        <p>{`Worship Schedule`.toUpperCase()}</p>
        <h1 className="text-4xl font-bold pb-10">Misa Gereja</h1>
      </div>
      <div className="space-y-5">
        {ScheduleList.map((item, index) => (
          <p key={index} className="">
            <p className="font-bold">{item.cat}</p>
            <p>
              {item.day}, {item.time}
            </p>
          </p>
        ))}
      </div>
    </section>
  );
}
