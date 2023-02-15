import addToCart from "../App";


const MenuItem = ({ menuItem, ...props }) => {
  return (
    <div className="section-center">
     <h2>{menuItem.name}</h2>
     <p>{menuItem.price}</p>
     <button onClick={() => props.addToCart(menuItem)} className="addToCart" type="submit">
        Add To Cart
      </button>
    </div>
  );
};

export default MenuItem;
