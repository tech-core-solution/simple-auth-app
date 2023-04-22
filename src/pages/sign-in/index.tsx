import Login from "../../components/forms/login";
import BoxContainer from "@/components/box-container";

export default function SignIn() {
  return (
    <main className="w-screen h-auto min-h-screen grid place-content-center ">
      <BoxContainer styles="mx-auto w-[90vw] max-w-[30rem] grid place-content-center">
        <Login />
      </BoxContainer>
    </main>
  );
}
