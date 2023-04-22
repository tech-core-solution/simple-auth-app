import React from "react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

import { signInValidation } from "@/validation-schemas";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button/SubmitButton";
import { Message } from "@/types";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <div className="w-[90vw] max-w-[30rem] h-auto text-primary-lavenderPurple">
        <h1 className="text-center pb-5 text-2xl font-bold">Sign in</h1>
        <Formik
          validateOnBlur={false}
          validationSchema={signInValidation}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            axios
              .post("http://localhost:5000/sign-in", {
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
                  response.data.successMessage.map((message: Message) => {
                    toast.success(message.message);
                  });
                } else {
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
          Did not have an account?{" "}
          <span className="text-primary-purple font-bold">
            <Link href="/sign-up">Sign up here</Link>
          </span>
        </p>
      </div>
    </>
  );
}
