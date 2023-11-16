const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item || {};
  return (
    <div className="flex items-center space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[105px]"
        src={image}
        alt=""
      />
      <div>
        <div className="flex justify-between">
          <h2 className="uppercase">{name}----------------</h2>
          <p className="text-yellow-400">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
