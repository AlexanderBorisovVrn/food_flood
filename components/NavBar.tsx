"use client";
import CartIcon from "./CartIcon";

import Menu from "./Menu";
import Link from "next/link";
import UserLinks from "./UserLinks";


const NavBar = () => {
  const linkStyle = "hover:txt-up";
  return (
    <nav className="w-full h-12 text-dark capitalize md:h-20 lg:text-xl xl:text-2xl 2xl:text-3xl flex justify-between items-center p-1 lg:px-6 px-4 border-b-2 border-dark bg-white ">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-3   font-bold">
        <Link href={"/"} className={linkStyle}>
          Главная
        </Link>
        <Link href={"/menu"} className={linkStyle}>
          Меню
        </Link>
        <Link href={"/contact"} className={linkStyle}>
          Контакты
        </Link>
      </div>
      {/* MOBILE LOGO */}
      <Link href={"/"} className="h-full md:hidden">
        <img src="/logo/logo.png" className="w-full h-full" />
      </Link>{" "}
      {/* RIGHT LINKS */}
      <div className="h-full w-auto hidden md:flex gap-4 items-center font-bold">
        <UserLinks/>
        <Link href={"/cart"}>
          <CartIcon up={true} capitalize={true} />
        </Link>
        <Link href={"/"} className="h-full hover:txt-up">
          <img src="/logo/logo_md.png" className="w-full h-full" />
        </Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
