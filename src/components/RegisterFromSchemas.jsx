import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid e-mail")
    .required("E-Mail is required"),
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  username: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  surname: yup
    .string()
    .min(2, "Surname must be at least 2 characters")
    .required("Surname is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), "Passwords don't match"]),

  term: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

export const singInrFormSchemas = yup.object().shape({
  username: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
});
