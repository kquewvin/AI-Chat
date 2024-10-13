import { useAuth } from "@clerk/clerk-react";
import "./DashboardLayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardLayout = () => {

    const {userID, isLoaded} = useAuth()

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userID) {
            navigate("/sign-in")
        }
    }, [isLoaded, userID, navigate])

    if (!isLoaded) {
        return "Loading..."
    }

    return (
        <div className="dashboardLayout">
            <div className="menu">MENU</div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
};

export default DashboardLayout;