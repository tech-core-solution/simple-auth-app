import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post("http://127.0.0.1:5000/sign-in", { accessToken: accessToken })
      .then((response) => {
        if (response.data.status === 400) {
          router.push("/sign-in");
        } else {
          setLoading(false);
          setUserName(localStorage.getItem("userName") ?? "");
        }
      });
  }, [router]);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    router.push("/sign-in");
    toast.success("User Logged out Successfully")
  };

  return (
    <>
      <Head>
        <title>Simple Auth app</title>
        <meta name="description" content="Created using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-auto min-h-screen grid place-content-center  bg-primary-darkGunmetal text-primary-lavenderPurple overflow-y-auto overflow-x-hidden">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>{userName} is Logged in</p>
            <Button
              label={"Log Out"}
              styles={"py-2 px-10 mt-8"}
              onClick={() => logOut()}
            />{" "}
          </>
        )}
      </main>
    </>
  );
}
