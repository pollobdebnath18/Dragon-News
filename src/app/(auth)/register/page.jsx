"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm, Watch } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log("res :", res, "error:", error);
    if (error) {
      alert("User already exist.Please uisng another Eamil");
    }
    if (res) {
      alert("SignUp Successfully");
    }
  };
  //   console.log(watch("email"));
  return (
    <div className="max-w-[1100px] mx-auto flex justify-center items-center bg-slate-100  min-h-[80vh] rounded-xl ">
      <div className="p-4 rounded-2xl bg-white px-20 py-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Register your Account
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
              {...register("name", {
                required: "Name field is reaquired",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Your Photo URL"
              {...register("photo", {
                required: "Photo URL field is reaquired",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">password</legend>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Your Password"
              {...register("password", {
                required: "Password field is reaquired",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <div>
            <button className="btn bg-slate-800 text-white w-full">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
