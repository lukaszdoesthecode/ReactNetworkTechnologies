import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";

export default function MenuAppBar() {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, maxWidth: 48 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    noWrap // Prevents the text from wrapping and potentially overflowing
                    component="div"
                    sx={{ flexGrow: 1, mr: 2 }}
                >
                    U/O/L/F/N/T
                </Typography>

                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="account"
                    onClick={() => navigate('/login')}
                    sx={{ maxWidth: 48 }}
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
