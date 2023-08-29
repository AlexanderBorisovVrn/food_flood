import { menuData } from "@/data/data";
import Link from "next/link";
import { alegreya } from "../layout";

const Menu = () => {
  return (
    <main className="w-screen min-h-screen center bg-white  ">
      <div className="w-full  lg:w-3/4  flex flex-col  lg:flex-row ">
        {menuData.map((category) => {
          return (
            <Link
              key={category.id}
              href={category.slug}
              style={{ backgroundImage: `url(/menu/${category.slug}.jpg)` }}
              className={`h-[500px] lg:w-1/3 center text-third  hover:text-white hover:txt-shadow-b txt-shadow-w  border-4 border-gray  text-center`}
            >
              <div className="w-full h-full center backdrop-grayscale hover:backdrop-grayscale-0 transition-all duration-200 ease-in-out">
                <div className="w-full center flex-col lg:min-h-[250px] gap-4 p-2 ">
                  <h1 className="text-4xl lg:text-2xl font-bold uppercase ">
                    {category.title}
                  </h1>
                  <p className={"text-xl lg:text-lg p-4 font-bold " + alegreya.className}>{category.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Menu;
