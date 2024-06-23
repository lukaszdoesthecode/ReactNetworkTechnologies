import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React, { useState } from "react";
import MenuAppBar from "../../menu-app-bar/MenuAppBar";
import {useTranslation} from "react-i18next";

export default function AddBook() {
    const {t, i18n} = useTranslation();

    const [formValues, setFormValues] = useState({
        author: '',
        name: '',
        availableCopies: '',
        isbn: '',
        publicationYear: '',
        publisher: '',
        summary: '',
        genre: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name as string]: value
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name as string]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form values: ", formValues);
    };

    return (
        <div>
        <MenuAppBar />

        <form id="addBookForm" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
            <TextField
                id="author"
                label={t("Author")}
                variant="standard"
                name="author"
                value={formValues.author}
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
                id="availableCopies"
                label={t("Available Copies")}
                variant="standard"
                name="availableCopies"
                type="number"
                value={formValues.availableCopies}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

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
                id="publicationYear"
                label={t("Publication Year")}
                variant="standard"
                name="publicationYear"
                type="number"
                value={formValues.publicationYear}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                id="publisher"
                label={t("Publisher")}
                variant="standard"
                name="publisher"
                value={formValues.publisher}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                id="summary"
                label={t("Summary")}
                variant="standard"
                name="summary"
                multiline
                rows={4}
                value={formValues.summary}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="genre-label">{t('Genre')}</InputLabel>
                <Select
                    labelId="genre-label"
                    id="genre"
                    name="genre"
                    value={formValues.genre}
                >
                    <MenuItem value="fantasy">{t('Fantasy')}</MenuItem>
                    <MenuItem value="science fiction">{t('Science Fiction')}</MenuItem>
                    <MenuItem value="mystery">{t('Mystery')}</MenuItem>
                    <MenuItem value="thriller">{t('Thriller')}</MenuItem>
                    <MenuItem value="romance">{t('Romance')}</MenuItem>
                    <MenuItem value="historical fiction">{t('Historical Fiction')}</MenuItem>
                    <MenuItem value="young adult">{t('Young Adult')}</MenuItem>
                    <MenuItem value="childrens literature">{t("Children's Literature")}</MenuItem>
                    <MenuItem value="horror">{t('Horror')}</MenuItem>
                    <MenuItem value="literary fiction">{t('Literary Fiction')}</MenuItem>
                    <MenuItem value="non fiction">{t('Non Fiction')}</MenuItem>
                    <MenuItem value="self help">{t('Self Help')}</MenuItem>
                    <MenuItem value="poetry">{t('Poetry')}</MenuItem>
                    <MenuItem value="graphic novel">{t('Graphic Novel')}</MenuItem>
                </Select>
            </FormControl>

            <div style={{ marginTop: '16px' }}>
                <Button
                    variant="contained"
                    type="submit"
                    form="addBookForm"
                    fullWidth
                >
                    {t('Add Book')}
                </Button>
            </div>
        </form>
        </div>
    );
}
