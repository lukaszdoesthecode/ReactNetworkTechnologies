import { Button, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import { useTranslation } from "react-i18next";
import axios from 'axios';

export default function AddUser() {
    const { t } = useTranslation();

    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = {
            email: formValues.email,
            name: formValues.name,
            password: formValues.password,
            userRole: formValues.role === 'user' ? 'ROLE_U' : 'ROLE_W'
        };

        try {
            const response = await axios.post('http://localhost:8081/api/users', user);
            if (response.status === 201) {
                console.log("User created successfully:", response.data);
            } else {
                console.error("Failed to create user:", response.status, response.data);
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div>
            <MenuAppBar />

            <form id="addUserForm" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
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
                    id="name"
                    label={t("Name")}
                    variant="standard"
                    name="name"
                    value={formValues.name}
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
                    name="role"
                    value={formValues.role}
                    onChange={handleChange}
                    style={{ marginTop: '16px' }}
                >
                    <FormControlLabel value="user" control={<Radio />} label="User" />
                    <FormControlLabel value="admin" control={<Radio />} label="Admin" />
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
