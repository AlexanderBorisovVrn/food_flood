import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = ({
  uppercase,
  bold,
}: {
  uppercase?: boolean;
  bold?: boolean;
}) => {
  let style = "flex justify-around ";
  let curStyle = uppercase ? (style += "uppercase") : style;
  curStyle = bold ? (curStyle += "font-bold") : style;
  return (
    <button className={curStyle}>
      <div>
        <ShoppingCartIcon />
      </div>
      <div className="mx-2">Cart</div>
      <div>(3)</div>
    </button>
  );
};

export default CartIcon;
