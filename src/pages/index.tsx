import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        
        <p className="text-2xl text-white">Welcome</p>
        {user.isSignedIn ? (
          <SignOutButton>
            <span className="cursor-pointer text-xl text-white">Sign Out</span>
          </SignOutButton>
        ) : (
          <SignInButton>
            <span className="cursor-pointer text-xl text-white">Sign In</span>
          </SignInButton>
        )}
      </main>
    </>
  );
};

export default Home;
