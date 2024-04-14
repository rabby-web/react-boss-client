import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data, "data");
    // image to upload img bb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res);
  };
  return (
    <div>
      <SectionTitle heading="add an item" subHeading="Whats new"></SectionTitle>
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
  );
};

export default AddItems;
