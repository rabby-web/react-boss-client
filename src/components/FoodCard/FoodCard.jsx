const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(item);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 60)}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;