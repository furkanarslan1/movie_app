import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "./RegisterFromSchemas";

export default function RegisterForm() {
  const clgSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        surname: "",
        password: "",
        confirmPassword: "",
        term: "",
      },
      validationSchema: registerFormSchemas,
      onSubmit: clgSubmit,
    });

  return (
    <div className="text-white w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white/20 text-white p-2 rounded-md outline-none backdrop-blur placeholder:text-white/70"
            placeholder="Enter your name"
          />
          {errors.name && touched.name && (
            <p className="text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="surname" className="font-semibold text-sm">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white/20 text-white p-2 rounded-md outline-none backdrop-blur placeholder:text-white/70"
            placeholder="Enter your surname"
          />
          {errors.surname && touched.surname && (
            <p className="text-red-400 text-sm">{errors.surname}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold text-sm">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white/20 text-white p-2 rounded-md outline-none backdrop-blur placeholder:text-white/70"
            placeholder="you@example.com"
          />
          {errors.email && touched.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
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

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="font-semibold text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white/20 text-white p-2 rounded-md outline-none backdrop-blur placeholder:text-white/70"
            placeholder="Repeat password"
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="term"
            id="term"
            value={values.term}
            onChange={handleChange}
            onBlur={handleBlur}
            className="accent-red-500"
          />
          <label htmlFor="term" className="font-semibold text-sm">
            Accept terms and conditions
          </label>
        </div>
        {errors.term && touched.term && (
          <p className="text-red-400 text-sm">{errors.term}</p>
        )}

        <button
          type="submit"
          className="w-full bg-white text-red-600 font-bold text-lg py-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
