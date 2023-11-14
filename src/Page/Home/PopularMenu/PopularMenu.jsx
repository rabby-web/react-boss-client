import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-4">
      <SectionTitle
        subHeading="Check it out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
