import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };
  console.log(watch("example"));

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row ">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /[A-Za-z]/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">Password must be 6 Character</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">Password must be 6 Character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-400">
                    Password must be less 20 Character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">Password must be Uppercase</p>
                )}

                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center pb-4 text-lg font-medium">
              <small>
                have an account?{" "}
                <Link className="font-semibold text-purple-600" to="/login">
                  Please Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
