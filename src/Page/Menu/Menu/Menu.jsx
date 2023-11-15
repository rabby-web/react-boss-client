import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro-Boss</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
    </div>
  );
};

export default Menu;
