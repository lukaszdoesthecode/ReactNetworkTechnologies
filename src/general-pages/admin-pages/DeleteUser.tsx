import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import { useTranslation } from "react-i18next";
import axios from 'axios';

export default function DeleteUser() {
    const { t, i18n } = useTranslation();

    const [formValues, setFormValues] = useState({
        username: ''
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

    const handleDelete = async () => {
        try {
            const searchResponse = await axios.get(`http://localhost:8081/api/users/getUserIdByName/${formValues.username}`);
            const userId = searchResponse.data;

            console.log("Searched User ID: ", userId);

            await axios.delete(`http://localhost:8081/api/users/${userId}`);
            console.log("User deleted with Username: ", formValues.username);
            toast.dismiss();
            toast.success(t('User deleted successfully'));
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error(t('Failed to delete user'));
        }
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
