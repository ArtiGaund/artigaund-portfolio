"use client";

import useAuth from "@/context/useAuth";
import Login from "./login/page";

const Home = () => {
    const { authStatus } = useAuth()

    return(
        <div>
            { authStatus ? (
                <div></div>
            ) : (
                <Login />
            )}
        </div>
    )
}