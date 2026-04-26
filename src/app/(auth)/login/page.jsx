"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm, Watch } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      alert("Login Failed. Please Try Again");
    }
    if (res) {
      alert("Login Successfully");
    }
  };
  console.log(watch("email"));
  return (
    <div className="max-w-[1100px] mx-auto flex justify-center items-center bg-slate-100 my-10 min-h-[80vh] rounded-xl ">
      <div className="p-4 rounded-2xl bg-white px-12 py-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Login your Account
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit(handleLogin)}>
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
              Login
            </button>
          </div>
        </form>
        <p className="text-xs pt-3">
          Dont have account ?{" "}
          <Link href={"/register"} className="text-red-400 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
