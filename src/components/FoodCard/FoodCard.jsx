import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to database
      const cartItem = {
        name,
        image,
        price,
        recipe,
        menuId: _id,
        email: user.email,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully add",
            icon: "success",
          });
          //refetch cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are no login",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 my-3 bg-slate-100 border-orange-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
