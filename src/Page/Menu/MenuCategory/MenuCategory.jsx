import { Link } from "react-router-dom";
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
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-3 border-slate-500">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
