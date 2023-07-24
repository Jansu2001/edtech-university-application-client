import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../../assets/404.gif";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import Swal from "sweetalert2";
import { useState } from "react";
// import { AuthContext } from "../../../Providers/AuthProviders";

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    // const { signUpUser, displayUserInfo } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        signUpUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                setSuccess('User SuccessFully Created')
                displayUserInfo(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = {
                            name: data.name,
                            email: data.email,
                            password: data.password
                        };
                        fetch('http://localhost:5000/all-users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log("user profile info updated");

                                    reset();
                                    Swal.fire(
                                        "Account Created!",
                                        "Your Account has been Registered.",
                                        "success"
                                    );
                                    navigate("/");
                                }
                            });
                    });
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    };






    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 shadow-2xl ">
                        <h2 className="text-center text-4xl pt-6 font-bold">
                            Please Register Account
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    className="input input-bordered rounded-none"
                                />
                                {errors.name && (
                                    <span className="text-red-400">This Field is Required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL", { required: true })}
                                    placeholder="photoURL"
                                    className="input input-bordered rounded-none"
                                />
                                {errors.name && (
                                    <span className="text-red-400">This Field is Required</span>
                                )}
                            </div>
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
                                        minLength: 6,
                                        maxLength: 14,
                                        // pattern:/(?=.*[A-Z])(?=.*[!@#$&*])/
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
                                    value="Register"
                                />
                            </div>
                            <p className="text-[#D1A054] text-center">
                                Already Registered ?{" "}
                                <Link to="/login" className="font-bold">
                                    Go to Log in
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

export default Register;
