import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";

export default function ReserveBook() {
    const [formValues, setFormValues] = useState({
        isbn: '',
        author: '',
        title: ''
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
        console.log("Form values: ", formValues);
    };

    return (
        <form id="reserveForm" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
            <TextField
                id="isbn"
                label="ISBN"
                variant="standard"
                name="isbn"
                value={formValues.isbn}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                id="author"
                label="Author"
                variant="standard"
                name="author"
                value={formValues.author}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                id="title"
                label="Title"
                variant="standard"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <div style={{ marginTop: '16px' }}>
                <Button
                    variant="contained"
                    startIcon={<LoginIcon />}
                    type="submit"
                    form="reserveForm"
                    fullWidth
                >
                    Send
                </Button>
            </div>
        </form>
    );
}

export { ReserveBook };
