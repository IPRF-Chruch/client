import { ContactList } from "@/shared/data/static/ContactList";
import { NavigationSocial } from "@/shared/data/static/NavigationList";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <div className="px-24 py-10 grid grid-cols-2 bg-black text-white">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            INDONESIAN PENTECOSTAL <br />
            REVIVAL FELLOWSHIP MINNESOTA CHURCH
          </h1>
          <p>
            Jl. Raya Semarang, Desa Semarang, Kecamatan Semarang, Kabupaten
            Semarang, <br />
            Provinsi Jawa Tengah
          </p>
        </div>
        <div className="space-y-4">
          {ContactList.map((item, index) => (
            <div key={index} className="space-x-2 flex items-center">
              <Icon icon={item.icon} className="w-6 h-6" />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full space-y-4">
          <div className="w-full h-0.5 bg-white"></div>
          <div className="flex items-center justify-between">
            <p className="text-sm">Copyright &copy; 2025</p>
            <div className="flex gap-2">
              {NavigationSocial.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-black cursor-pointer hover:bg-red-600 transition duration-500"
                >
                  <Icon
                    icon={item.icon}
                    width={26}
                    height={26}
                    style={{ color: "white" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <iframe
          width="520"
          height="300"
          scrolling="no"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Semarang+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
