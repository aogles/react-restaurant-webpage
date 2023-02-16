import { useState } from "react";

import MenuItem from "./MenuItem";

//function to pull in menu item categories//
const MenuList = ({ menuItems, ...props }) => {
  return (
    <div className="section-center">
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          menuItem={menuItem}
          addToCart={props.addToCart}
        />
      ))}
    </div>
  );
};
export default MenuList;
