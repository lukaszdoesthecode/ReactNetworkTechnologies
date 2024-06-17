import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast, ToastPosition } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import {useTranslation} from "react-i18next";

export default function DeleteBook() {
    const {t, i18n} = useTranslation();

    const [isbn, setIsbn] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsbn(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        showToast();
    };

    const showToast = () => {
        toast.info(
            <div>
                {t('Are you sure you want to delete the book?')}
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
        console.log("Book deleted with ISBN: ", isbn);
        toast.dismiss();
    };

    const handleCancel = () => {
        toast.dismiss();
    };

    return (
        <div>
            <MenuAppBar/>

        <div style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
            <form id="deleteBookForm" onSubmit={handleSubmit} style={{ marginTop: '80px' }}>
                <TextField
                    id="isbn"
                    label="ISBN"
                    variant="standard"
                    name="isbn"
                    value={isbn}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <div style={{ marginTop: '16px' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        form="deleteBookForm"
                        fullWidth
                    >
                        {t('Delete Book')}
                    </Button>
                </div>
            </form>
            <ToastContainer />
        </div>
        </div>
    );
}

export {DeleteBook}