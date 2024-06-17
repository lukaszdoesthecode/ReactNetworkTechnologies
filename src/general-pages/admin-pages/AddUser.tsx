import { Button, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import {useTranslation} from "react-i18next";

export default function AddUser() {
    const {t, i18n} = useTranslation();

    const [formValues, setFormValues] = useState({
        email: '',
        login: '',
        password: '',
        role: 'user'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log("Form values: ", formValues);
    };

    return (
        <div>
            <MenuAppBar />

        <form id="addUserForm" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
            <TextField
                id="email"
                label={t("Email")}
                variant="standard"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                id="login"
                label="Login"
                variant="standard"
                name="login"
                value={formValues.login}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                id="password"
                label={t("Password")}
                type="password"
                variant="standard"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <RadioGroup
                id="role"
                name={t("role")}
                value={formValues.role}
                onChange={handleChange}
                style={{ marginTop: '16px' }}
            >
                <FormControlLabel value={t("user")} control={<Radio />} label="User" />
                <FormControlLabel value={t("admin")} control={<Radio />} label="Admin" />
            </RadioGroup>

            <div style={{ marginTop: '16px' }}>
                <Button
                    variant="contained"
                    startIcon={<LoginIcon />}
                    type="submit"
                    form="addUserForm"
                    fullWidth
                >
                    {t('Add User')}
                </Button>
            </div>
        </form>
        </div>
    );
}
