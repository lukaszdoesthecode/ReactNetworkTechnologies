import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function MenuAppBar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
    const [genreAnchorEl, setGenreAnchorEl] = useState<null | HTMLElement>(null);

    const {t, i18n} = useTranslation();

    const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setLanguageAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setLanguageAnchorEl(null);
    };

    const handleGenreMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setGenreAnchorEl(event.currentTarget);
    };

    const handleGenreMenuClose = () => {
        setGenreAnchorEl(null);
    };

    const handleNavigateToAbout = () => {
        navigate('/home/about-library', { replace: true });
    };

    const buttonStyle = {
        width: '200px',
        minWidth: '200px',
        padding: '8px 16px',
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ width: 40, mr: 0.1 }}
                    onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Button
                        color="inherit"
                        onClick={handleNavigateToAbout}
                        sx={buttonStyle}
                    >
                        {t('About library')}
                    </Button>
                    <Button color="inherit" onClick={handleGenreMenuOpen}>
                        {t('Search book by genre')}
                    </Button>
                    <Button color="inherit" onClick={handleLanguageMenuOpen}>
                        {t('Languages')}
                    </Button>
                    <Button color="inherit" component={Link} to="/home/employee-menu" sx={buttonStyle}>
                        {t("Employees")}
                    </Button>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} component={Link} to="/home/book-list">
                        {t("Books available")}
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/home/loan-list">
                        {t('My Loans')}
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/home/reserve-book">
                        {t('Reserve book')}
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/home/my-books">
                        {t('My current books')}
                    </MenuItem>
                </Menu>

                <Menu
                    anchorEl={languageAnchorEl}
                    open={Boolean(languageAnchorEl)}
                    onClose={handleLanguageMenuClose}
                >
                    <MenuItem onClick={() => i18n.changeLanguage('eng')}>English</MenuItem>
                    <MenuItem onClick={() => i18n.changeLanguage('pl')}>Polski</MenuItem>
                    <MenuItem onClick={() => i18n.changeLanguage('fr')}>Français</MenuItem>
                    <MenuItem onClick={() => i18n.changeLanguage('de')}>Deutsch</MenuItem>

                </Menu>

                <Menu
                    anchorEl={genreAnchorEl}
                    open={Boolean(genreAnchorEl)}
                    onClose={handleGenreMenuClose}
                >
                    <MenuItem onClick={handleGenreMenuClose}>{t('Fantasy')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Science Fiction')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Mystery')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Thriller')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Romance')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Historical Fiction')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Young Adult')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Children Literature')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Horror')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Literary Fiction')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Non Fiction')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Self Help')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Poetry')}</MenuItem>
                    <MenuItem onClick={handleGenreMenuClose}>{t('Graphic Novel')}</MenuItem>
                </Menu>

                <Typography
                    sx={{ textAlign: 'center', width: 550, mr: 10 }}
                >
                    U/O/L/F/N/T
                </Typography>

                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="account"
                    onClick={() => navigate('/login')}
                    sx={{ width: 40, mr: 0.1 }}
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
