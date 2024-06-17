import {Box, Button} from "@mui/material";
import MenuAppBar from "../menu-app-bar/MenuAppBar";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import HomeText from "../general-pages/about-library/HomeText";

function HomePage(){
    const navigate = useNavigate();

    const [showOutlet, setShowOutlet] = useState(false);

    const handleShowOutlet = () => {
        setShowOutlet(true);
    };

    return (
        <Box>
            <MenuAppBar />
            <Outlet />
        </Box>
    )
}

export default HomePage;