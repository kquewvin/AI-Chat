import { useAuth } from "@clerk/clerk-react";
import "./DashboardLayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ChatList from "../../components/chatlist/ChatList";

const DashboardLayout = () => {
	const { userId, isLoaded } = useAuth(); // Protect routes with unique ID

	const navigate = useNavigate();

	useEffect(() => {
		if (isLoaded && !userId) {
			navigate("/sign-in");
		}
	}, [isLoaded, userId, navigate]);

	if (!isLoaded) {
		return "Loading...";
	}

	return (
		<div className="dashboardLayout">
			<div className="menu"><ChatList/></div>
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
