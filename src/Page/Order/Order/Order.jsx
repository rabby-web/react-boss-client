import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
          <TabPanel>Salad</TabPanel>
          <TabPanel>Pizza</TabPanel>
          <TabPanel>soups</TabPanel>
          <TabPanel>desserts</TabPanel>
          <TabPanel>drinks</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
