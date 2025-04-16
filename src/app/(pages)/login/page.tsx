"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";
import { useForm } from "react-hook-form";
import authService from "@/appwrite/config";
import { useDispatch } from "react-redux";
import { login as loginAction } from "@/store/authSlice"

export default function Login() {
  const router = useRouter()
  const { authStatus } = useAuth()
  const [ error, setError ] = useState("")

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  useEffect(() => {
    if (authStatus) {
      router.replace("/admin");
    }
  }, [authStatus]);
  
  if (authStatus) {
    return null;
  }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };
  const login = async (data: any) => {
    setError("")
    try {
        const session = await authService.login(data);
        if(session){
          dispatch(loginAction({
            userData: session
          }));
        }
        router.replace("/admin");
    } catch (error) {
      console.log("Login Form error ",error);
      return false;
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Login
      </h2>
      <form className="my-8" onSubmit={handleSubmit(login)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email"
           {...register("email", {
            required: true,
             validate: {
                 matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                         "Email address must be a valid address",
             }
         })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-white">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" 
           {...register("password",{ required:true, })}/>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign in &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
