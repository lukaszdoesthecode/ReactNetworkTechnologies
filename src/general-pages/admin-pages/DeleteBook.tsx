import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import { useTranslation } from "react-i18next";
import axios from 'axios';

export default function DeleteBook() {
    const { t, i18n } = useTranslation();

    const [bookId, setBookId] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookId(e.target.value);
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

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8081/api/books/${bookId}`);
            console.log("Book deleted with ID: ", bookId);
            toast.dismiss();
            toast.success(t('Book deleted successfully'));
        } catch (error) {
            console.error("Error deleting book:", error);
            toast.error(t('Failed to delete book'));
        }
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
                        id="bookId"
                        label={t("Book ID")}
                        variant="standard"
                        name="bookId"
                        value={bookId}
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

export { DeleteBook }
