"use client";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  const linkStyle = "hover:opacity-90 hover:txt-up lg:text-xl";
  return (
    <nav className="w-full h-12 md:h-20 flex justify-between items-center p-1 lg:px-6 px-4 border-b-2 border-dark bg-white lg:bg-logo bg-no-repeat bg-center">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-3 text-primary uppercase font-bold">
        <Link href={"/"} className={linkStyle}>
          Главная
        </Link>
        <Link href={"/"} className={linkStyle}>
          Меню
        </Link>
        <Link href={"/"} className={linkStyle}>
          Контакты
        </Link>
      </div>
      {/* MOBILE LOGO */}
      <Link href={"/"} className="h-full md:hidden">
        <img src="/logo.png" className="w-full h-full" />
      </Link>{" "}
      {/* RIGHT LINKS */}
      <div className="h-full hidden md:flex gap-3 text-dark items-center">
      <CartIcon uppercase/>
      <Link href={"/"} className="h-full hover:txt-up">
        <img src="/logo_md.png" className="w-full h-full" />
      </Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
