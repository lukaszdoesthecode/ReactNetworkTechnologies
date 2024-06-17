import React from "react";
import { Button, Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function EmployeeMenu() {
    const {t, i18n} = useTranslation();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            width="100%"
            height="100vh"
        >
            <Typography align="center" variant="h6" color="error">
                {t('WARNING')}
            </Typography>
            <Typography align="center">
                {t('Remember that all changes here are permanent and cannot be undone. Always pay attention to the warnings.')}
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="add-user" sx={{ width: '450px' }}>
                {t('Add user')}
            </Button>
            <Button variant="contained" color="secondary" component={Link} to="delete-user" sx={{ width: '450px' }}>
                {t('Delete user')}
            </Button>
            <Button variant="contained" color="primary" component={Link} to="add-book" sx={{ width: '450px' }}>
                {t('Add book')}
            </Button>
            <Button variant="contained" color="secondary" component={Link} to="delete-book" sx={{ width: '450px' }}>
                {t('Delete book')}
            </Button>
        </Box>
    );
}
