import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro-Boss</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* mai cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu */}
      <MenuCategory
        title="dessert"
        items={desserts}
        img={dessertImg}
      ></MenuCategory>
      {/* PIZZA menu */}
      <MenuCategory title="pizza" items={pizza} img={pizzaImg}></MenuCategory>
      {/* SALADS menu */}
      <MenuCategory title="salad" items={salad} img={saladImg}></MenuCategory>
      {/* SOUPS menu */}
      <MenuCategory title="soup" items={soup} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
