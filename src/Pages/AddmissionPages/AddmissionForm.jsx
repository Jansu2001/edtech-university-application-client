import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddmissionForm = () => {

    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        const savedUser = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            number: data.number,
            address: data.address,
            birthDate: data.birth - date,
            photoURL: data.photoURL
        };
        fetch('https://edtech-university-application-server.vercel.app/addmission', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("Your Addmission Is Successful");

                    reset();
                    Swal.fire(
                        "Addmission Success!",
                        "Your Addmission has been Completed.",
                        "success"
                    );
                    navigate("/");
                }
            });



    }

    return (
        <div>

            <div className="hero min-h-screen ">
                <div className="hero-content w-full  ">
                    <div className="card w-full shadow-2xl ">
                        <h2 className="text-center text-4xl pt-6 font-bold">
                            Please Take Your Addmission
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="flex gap-10">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
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
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("email", { required: true })}
                                        placeholder="Your Email"
                                        className="input input-bordered rounded-none"
                                    />
                                    {errors.name && (
                                        <span className="text-red-400">This Field is Required</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("subject", { required: true })}
                                        placeholder="subject"
                                        className="input input-bordered rounded-none"
                                    />
                                    {errors.name && (
                                        <span className="text-red-400">This Field is Required</span>
                                    )}
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        {...register("number", { required: true })}
                                        placeholder="number"
                                        className="input input-bordered rounded-none"
                                    />
                                    {errors.name && (
                                        <span className="text-red-400">This Field is Required</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("address", { required: true })}
                                        placeholder="Address"
                                        className="input input-bordered rounded-none"
                                    />
                                    {errors.name && (
                                        <span className="text-red-400">This Field is Required</span>
                                    )}
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("birth-date", { required: true })}
                                        placeholder="Date of Birth"
                                        className="input input-bordered rounded-none"
                                    />
                                    {errors.name && (
                                        <span className="text-red-400">This Field is Required</span>
                                    )}
                                </div>
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


                            <div className="form-control mt-6">
                                <input
                                    className="btn btn bg bg-[#D1A054] border-none"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                            <p className="text-[#D1A054] text-center">
                                Already Registered ?{" "}
                                <Link to="/login" className="font-bold">
                                    Go to Log in
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddmissionForm;