import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        console.log(email, password);
    }


    return (
        <div>

            <div className="hero min-h-screen ">
                <div className="hero-content w-full ">
                    <div className="card flex-shrink-0 w-1/2 shadow-2xl ">
                        <h2 className="text-center text-4xl pt-6 font-bold">
                            Please Login Here
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="input input-bordered rounded-none"
                                />
                                {errors.email && (
                                    <span className="text-red-400">This Field is Required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("password", {
                                        required: true,
                                    })}
                                    placeholder="Password"
                                    className="input input-bordered rounded-none"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                                <span>{error}</span>
                                <span>{success}</span>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="btn btn bg bg-[#D1A054] border-none"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                            <p className="text-[#D1A054] text-center">
                                New to Edtech ?{" "}
                                <Link to="/register" className="font-bold">
                                    Register Now
                                </Link>
                            </p>
                            {/* <SocialLogin setSuccess={setSuccess} setError={setError}></SocialLogin> */}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;