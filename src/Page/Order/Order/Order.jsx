import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCover} title={"OUR SHOP"}></Cover>
      <div className="my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center flex items-center justify-center gap-3 border-0 rounded-md text-orange-800">
            <Tab className="border-0 text-yellow-500 cursor-pointer">SALAD</Tab>
            <Tab className="border-0 text-yellow-500 cursor-pointer">PIZZA</Tab>
            <Tab className="border-0 text-yellow-500 cursor-pointer">SOUPS</Tab>
            <Tab className="border-0 text-yellow-500 cursor-pointer">
              DESSERTS
            </Tab>
            <Tab className="border-0 text-yellow-500 cursor-pointer">
              DRINKS
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
              {salad.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
              {pizza.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
              {soup.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
              {desserts.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
              {drinks.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
