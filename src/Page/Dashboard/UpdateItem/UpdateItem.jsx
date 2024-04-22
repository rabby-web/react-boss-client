import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const item = useLoaderData();
  console.log(item);

  const onSubmit = async (data) => {
    console.log(data, "data");
    // image to upload img bb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // sed backend
      const menuRes = await useAxiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="Information"
      ></SectionTitle>
      <div>
        <h2 className="text-3xl font-semibold">Add Items for the computer</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-3">
              {/* name */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Recipe Name</span>
                </div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Recipe Name"
                  className="input input-bordered w-full "
                />
              </label>
              <div className="flex gap-6">
                {/* category */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select
                    className="select select-bordered w-full"
                    defaultValue="default"
                    {...register("category", { required: true })}
                  >
                    <option disabled value="default">
                      Select a Category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </label>
                {/* price */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Recipe Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* textarea*/}
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Recipe Details</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  {...register("recipe")}
                  placeholder="Recipe Details"
                ></textarea>
              </label>
              {/* file input */}
              <div className="my-4">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input w-full max-w-xs "
                />
              </div>

              <button type="submit" className="btn m-2">
                Add Items <FaUtensils className="ml-2" />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
