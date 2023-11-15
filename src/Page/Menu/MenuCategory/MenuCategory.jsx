import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-8 mx-3">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
