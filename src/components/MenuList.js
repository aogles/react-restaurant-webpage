import MenuItem from "./MenuItem";

//function to pull in menu item categories//

const MenuList = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.name} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default MenuList;
