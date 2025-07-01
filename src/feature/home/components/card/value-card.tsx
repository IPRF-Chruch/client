import { Icon } from "@iconify/react/dist/iconify.js";

interface IValueCard {
  title: string;
  description: string;
  icon: string;
}

export default function ValueCard({ title, description, icon }: IValueCard) {
  return (
    <div className="relative w-full lg:w-60 lg:h-60 rounded-xl p-3 border-1 space-y-3">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 p-5 border rounded-full bg-white">
        <Icon icon={icon} className="w-full h-full" />
      </div>
      <h1 className="mt-8 text-center font-bold text-xl">{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  );
}
