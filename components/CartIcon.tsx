import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = ({ up, capitalize }: { up?: boolean; capitalize?: boolean }) => {
  let style = "flex items-center justify-center gap-1 hover:opacity-90 ";
  style = up ? style + " " + "hover:txt-up" : style;
  style = capitalize ? style + " " + "capitalize" : style;

  return (
    <button className={style}>
      <ShoppingCartIcon />
      <div>Корзина</div>
      <div>
        <sup className="border rounded-full p-1 px-2  text-[10px] md:text-xs bg-third text-white">1</sup>
      </div>
    </button>
  );
};

export default CartIcon;
 