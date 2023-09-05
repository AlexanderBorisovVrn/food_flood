import { menuData } from "@/data/data";
import Link from "next/link";
import { alegreya } from "../layout";

const Menu = () => {
  return (
    <main className="min-w-screen flex lg:h-screen flex-col lg:center bg-gray ">
      {/* ITEMS CONTAINER */}
      <div className="w-full lg:h-2/4  lg:w-[80%]  flex flex-col gap-2 lg:flex-row xl:min-w-full">
        {menuData.map((category) => {
          return (
            <Link
              key={category.id}
              href={`/menu/${category.slug}`}
              style={{ backgroundImage: `url(/menu/${category.slug}.jpg)` }}
              className={`h-[calc(100vh-5rem)] lg:h-full lg:w-1/3 center text-primary bg-cover  hover:text-white hover:txt-shadow-b txt-shadow-w text-center`}
            >
              <div className="w-full h-full flex flex-col lg:center backdrop-grayscale hover:backdrop-grayscale-0 transition-all duration-200 ease-in-out">
                  <h1 className="text-4xl md:text-6xl lg:text-2xl 2xl:text-5xl font-bold uppercase mt-[50%] lg:m-0">
                    {category.title}
                  </h1>
                  <p className={"text-xl md:text-4xl lg:text-lg xl:text-xl p-4 " + alegreya.className}>{category.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Menu;
