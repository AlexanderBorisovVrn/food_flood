'use client'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Menu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const style = "text-dark h-10 w-14"
function handleClick(){
  setIsOpened(!isOpened)
}
  return <button onClick={handleClick}  className={style}>{isOpened ? <CloseIcon className={style}/> : <MenuIcon className={style}/>}</button>;
};

export default Menu;
