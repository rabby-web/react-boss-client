import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro-Boss</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
    </div>
  );
};

export default Menu;
