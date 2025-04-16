"use client"

import LogoutButton from "../../logout/page"

const AdminPage = () => {
    return(
        <div className="flex items-center justify-center">
            Admin Page
            <div className="absolute top-4 right-4">
                <LogoutButton />
            </div>
        </div>
    )
}

export default AdminPage;