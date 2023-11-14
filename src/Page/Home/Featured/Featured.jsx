import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item my-10 py-4 bg-fixed">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex justify-center items-center md:py-16 md:px-28 m-4 text-white">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <h2 className="text-xl">
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
