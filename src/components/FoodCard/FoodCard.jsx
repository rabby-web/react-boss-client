const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(item);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="absolute right-0 top-2 mr-2 mt-2 px-2 py-1 rounded bg-slate-800 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 60)}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 my-3 bg-slate-100 border-orange-400">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
