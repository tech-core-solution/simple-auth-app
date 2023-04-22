import React from "react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

import { signUpValidation } from "@/validation-schemas";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button/SubmitButton";
import { Message } from "@/types";

export default function Registration() {
  const router = useRouter();

  return (
    <>
      <div className="w-[90vw] max-w-[30rem] h-auto text-primary-lavenderPurple">
        <h1 className="text-center pb-5 text-2xl font-bold">Sign up</h1>
        <Formik
          validateOnBlur={false}
          validationSchema={signUpValidation}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            axios
              .post("http://localhost:5000/users", {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              })
              .then((response) => {
                if (response.data.status === 200) {
                  localStorage.setItem(
                    "accessToken",
                    response.data.data.accessToken
                  );
                  localStorage.setItem("userName", response.data.data.userName);
                  router.push("/");
                  toast.success("User Created Successfully");
                }
                else {
                  response.data.errorMessage.map((message: Message) => {
                    toast.error(message.message);
                  });
                }
              })
              .catch(() => toast.error("Internal Server Error. Try Again"));
          }}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form onSubmit={handleSubmit} className="grid place-content-center">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Add first Name"
                value={values.firstName}
                touched={touched.firstName}
                handleChange={handleChange}
                validationErrors={errors.firstName}
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Add Last Name"
                value={values.lastName}
                touched={touched.lastName}
                handleChange={handleChange}
                validationErrors={errors.lastName}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                value={values.email}
                touched={touched.email}
                handleChange={handleChange}
                validationErrors={errors.email}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="**********"
                value={values.password}
                touched={touched.password}
                handleChange={handleChange}
                validationErrors={errors.password}
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="**********"
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                handleChange={handleChange}
                validationErrors={errors.confirmPassword}
              />
              <>
                <SubmitButton
                  label="Sign In"
                  styles="w-full bg-primary-blue p-4 text-primary-white my-10"
                />
              </>
            </form>
          )}
        </Formik>
        <p className="text-center">
          Already have an account?{" "}
          <span className="text-primary-purple font-bold">
            <Link href="/sign-in">Sign in here</Link>
          </span>
        </p>
      </div>
    </>
  );
}
