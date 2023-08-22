'use client'
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 px-4 border-b-2 border-dark bg-white">
      <Link href={"/"}>
        <div className="h-full w-12 flex ">
          <img src="/logo.png" className="w-full" />
        </div>
      </Link>
      <div>
        <Menu />
      </div>
      {/* <MogileMenu/> */}
    </div>
  );
};

export default NavBar;
