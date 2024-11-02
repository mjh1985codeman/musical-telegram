import React from "react";
import Auth from "../utils/auth";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useNavigate } from 'react-router-dom';

// import Auth from "../utils/auth";

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<>
			<Paper elevation={3}>
				{/* Search */}
				<BottomNavigation showLabels>
					<BottomNavigationAction
						onClick={() => navigate("/")}
						label="Search"
						icon={<SearchIcon />}
					/>
					{/* Lists */}
					{Auth.loggedIn() ? (
						<BottomNavigationAction
							onClick={() => navigate("/lists")}
							label="Your Lists"
							icon={<ReorderIcon />}
						/>
					) : null}
					{/* Sign Up */}
					{Auth.loggedIn() ? null : (
						<BottomNavigationAction
							onClick={() => navigate("/signup")}
							label="Sign Up"
							icon={<AssignmentIcon />}
						/>
					)}
					{/* Log Out */}

					{Auth.loggedIn() ? (
						<BottomNavigationAction
							onClick={() => Auth.logout()}
							label="Logout"
							icon={<LogoutIcon />}
						/>
					) : (
						// Log In
						<BottomNavigationAction
							onClick={() => navigate("/login")}
							label="Login"
							icon={<LoginIcon />}
						/>
					)}
				</BottomNavigation>
			</Paper>
		</>
	);
};

export default NavBar;
