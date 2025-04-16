"use client"
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import authService from "@/appwrite/config";
import { logout } from "@/store/authSlice";



const LogoutButton = () => {
    const router = useRouter()
    const { setAuthStatus } = useAuth()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
            router.replace("/")
        })
    }
    return (
        <button className="bg-white text-black" onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutButton;