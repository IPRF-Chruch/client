export default function NewsCard() {
  return (
    <div className="border p-2 px-4 rounded-lg">
      <h3 className="text-md font-thin">November 18, 2022</h3>
      <h1 className="text-xl font-semibold line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum
        nesciunt eligendi expedita itaque incidunt aut odio voluptates, ratione
        veniam!
      </h1>

      <button className="text-white bg-red-600 px-7 py-2 rounded-full hover:bg-red-800 font-semibold mt-3 cursor-pointer">
        Hapus
      </button>
    </div>
  );
}
