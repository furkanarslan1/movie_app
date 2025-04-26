import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { singInrFormSchemas } from "./RegisterFromSchemas";
import { userEnter } from "../redux/slices/registerSlice";
import { Link, useNavigate } from "react-router";

export default function SignInFrom() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.register.userList);
  const navigate = useNavigate();
  const handleSubmitSingIn = (values, actions) => {
    const isValid = users.some(
      (user) =>
        user.username === values.username && user.password === values.password
    );

    if (!isValid) {
      alert("invalid username or password");
      return;
    }
    dispatch(userEnter(values));

    actions.resetForm();
    navigate("/home");
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        username: "",
      },
      validationSchema: singInrFormSchemas,
      onSubmit: handleSubmitSingIn,
    });
  return (
    <div className="text-white w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-semibold text-sm">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white/20 text-white p-2 rounded-md outline-none backdrop-blur placeholder:text-white/70"
            placeholder="Enter your username"
          />
          {errors.username && touched.username && (
            <p className="text-red-400 text-sm">{errors.username}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white/20 text-white p-2 rounded-md outline-none backdrop-blur placeholder:text-white/70"
            placeholder="Enter password"
          />
          {errors.password && touched.password && (
            <p className="text-red-400 text-sm">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-white text-red-600 font-bold text-lg py-2 rounded-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer"
        >
          Submit
        </button>
      </form>
      <div className="text-white text-center pt-5 text-sm ">
        <Link className="border-b-1 pb-1" to="/sign-up">
          Don't have an account? Sign up here.
        </Link>
      </div>
    </div>
  );
}
