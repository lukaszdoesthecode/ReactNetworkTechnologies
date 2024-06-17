import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import {useTranslation} from "react-i18next";

export default function DeleteUser() {
    const {t, i18n} = useTranslation();

    const [formValues, setFormValues] = useState({
        email: '',
        username: ''
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
        showToast();
    };

    const showToast = () => {
        toast.info(
            <div>
                {t('Are you sure you want to delete the user?')}
                <div style={{ marginTop: '10px' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDelete}
                        style={{ marginRight: '10px' }}
                    >
                        {t('Yes')}
                    </Button>
                    <Button variant="contained" onClick={handleCancel}>{t('No')}</Button>
                </div>
            </div>,
            {
                autoClose: false,
                closeOnClick: false,
                draggable: false
            }
        );
    };

    const handleDelete = () => {
        // Perform the delete operation here
        console.log("User deleted with Email: ", formValues.email, " and Username: ", formValues.username);
        toast.dismiss();
    };

    const handleCancel = () => {
        toast.dismiss();
    };

    return (
        <div>
            <MenuAppBar />

        <div style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
            <form id="deleteUserForm" onSubmit={handleSubmit} style={{ marginTop: '80px' }}>
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
                    id="username"
                    label={t("Username")}
                    variant="standard"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <div style={{ marginTop: '16px' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        form="deleteUserForm"
                        fullWidth
                    >
                        {t('Delete User')}
                    </Button>
                </div>
            </form>
            <ToastContainer />
        </div>
        </div>
    );
}

export {DeleteUser}