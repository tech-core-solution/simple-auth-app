import * as yup from "yup";

export const signUpValidation = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  email: yup.string().email("Email must be a valid email address").required("Email is a required field"),
  password: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*_\-+=`|(){}[\]:;"'<>,.?\\/ ]).*$/,
      "Password must contain at least one lowercase, one uppercase, one digit and one special character (!, $, #, %, etc)."
    )
    .required("Password is a required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Must be the same value of Password")
    .required("Confirm Password is a required field")
});
