"use client";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Главная", url: "/" },
  { id: 2, title: "Меню", url: "/menu" },
  { id: 3, title: "Время работы", url: "/" },
  { id: 4, title: "Контакты", url: "/" },
];

type LinkType = (typeof links)[0];

const Menu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const style = "text-dark h-10 w-12";

  const user = false; //temporary

  function handleToggle() {
    setIsOpened(!isOpened);
  }
  function handleClose() {
    setIsOpened(false);
  }
  return (
    <div>
      <button onClick={handleToggle} className={style}>
        {isOpened ? (
          <CloseIcon className={style} />
        ) : (
          <MenuIcon className={style} />
        )}
      </button>

      {isOpened && (
        <div className="absolute flex items-center justify-center flex-col gap-8 z-10 bg-secondary text-white left-0 right-0 min-h-[calc(100vh-6rem)] top-24 text-2xl">
          {links.map((link: LinkType) => (
            <Link href={link.url} key={link.id} onClick={handleClose}>
              {link.title}
            </Link>
          ))}
          {user ? (
            <Link href={"/orders"} onClick={handleClose}>
              Login
            </Link>
          ) : (
            <Link href={"/login"} onClick={handleClose}>
              Login
            </Link>
          )}
          <Link href={"/cart"} onClick={handleClose}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
