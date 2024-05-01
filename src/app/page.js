"use client";

import { useStore } from "@/store/NewStore";
import { Button } from "antd";
import LogIn from "./login/page";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { handleGoogleSignInWithPopUp, full_name, logout } = useStore(
    (state) => state.user
  );

  return (
    <main className="p-4 h-screen flex flex-col justify-center items-center">
      <Button onClick={logout}>Logout</Button>

      {/* Log in Modal */}
      <div className="border border-green-600 p-10 rounded-lg">
        <p className="text-center font-semibold">LogIn {full_name} </p>
        <LogIn />
        <div className="mb-5 font-light">
          I don't have an Account{" "}
          <Link
            href="/signup"
            className="underline text-blue-500 cursor-pointer"
          >
            SignUp
          </Link>{" "}
        </div>
        <Button
          className="w-full border"
          onClick={() => handleGoogleSignInWithPopUp("Hellow world!")}
        >
          Continue With Google
        </Button>
      </div>
      <ToastContainer />
    </main>
  );
}
