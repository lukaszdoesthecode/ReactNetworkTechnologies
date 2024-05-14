import {Box, Button} from "@mui/material";
import MenuAppBar from "../menu-app-bar/MenuAppBar";
import {Link, Outlet, useNavigate} from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1} }>
            <MenuAppBar></MenuAppBar>
            <Box>
                <Button variant="contained" component={Link} to="/home/book-list" sx={{ m: 1}}>
                    Books available
                </Button>
                <Button variant="contained" component={Link} to="/home/loan-list" sx={{ m: 1}}>
                    Loans
                </Button>
            </Box>
            <Outlet/>
        </Box>
    )
}

export default HomePage;