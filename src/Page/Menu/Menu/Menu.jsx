import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro-Boss</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
