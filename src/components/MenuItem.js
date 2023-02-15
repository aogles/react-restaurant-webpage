const MenuItem = ({ menuItem, props }) => {
  return (
    <div className="section-center">
     <h2>{menuItem.name}</h2>
     <p>{menuItem.price}</p>
     <a onClick={props.addToCart} className="addToCart cart1" href="#">
        Add To Cart
      </a>
    </div>
  );
};

export default MenuItem;
