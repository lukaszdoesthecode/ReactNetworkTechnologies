import React, { useCallback, useMemo, useState } from 'react';
import { Button, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {Navigate, useNavigate} from 'react-router-dom';
import './LoginFrom.css';
import axios from "axios";
import {useApi} from "../../api/connection/ApiProvider";
import {useTranslation} from "react-i18next";

interface FormValues {
    username: string;
    password: string;
}

function LoginForm() {
    const navigate = useNavigate();
    const apiClient = useApi();
    const {t, i18n} = useTranslation();

    const onSubmit = useCallback(
        async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
            try {
                const response = await axios.post('http://localhost:8081/api/auth/login', values);
                if (response.status === 201) {
                    const apiResponse = await apiClient.login(values);
                    if (apiResponse.statusCode === 200) {
                        navigate('/home/about-library');
                    } else {
                        // Handle the error, possibly using formikHelpers to set form errors
                        console.error('Login failed:', apiResponse);
                    }
                } else {
                    // Handle unexpected status codes
                    console.error('Unexpected status code:', response.status);
                }
            } catch (error) {
                console.error('An error occurred:', error);
                // Handle the error, possibly using formikHelpers to set form errors
            }
        },
        [apiClient, navigate]
    );



    const validationSchema = useMemo(() => Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    }), []);

    const [goToBooks, setGoToBooks] = useState(false);
    if (goToBooks) {
        return <Navigate to="home//book-list" />;
    }

    return (
        <div className="Center-Container">
            <div className="picture">
                <img src="login_pic.jpg" alt="Library"/>
            </div>
            <div className="Info">
                <div className="Header">
                    <h1>U/O/L/F/N/T</h1>
                </div>
                <div className="Sub-header">
                    <h3>{t('Unofficial Official Library For Network Technologies')}</h3>
                </div>
                <div className="Header-description">
                    <p>{t('Welcome to the official unofficial page of Unofficial Official Library For Network Technologies!')}</p>
                </div>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    validateOnChange
                    validateOnBlur>
                    {(formik) => (
                        <form className="Login-Form" id="signForm" onSubmit={formik.handleSubmit} noValidate>
                            <TextField
                                id="username"
                                label={t("Username")}
                                variant="standard"
                                name="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                                fullWidth
                            />
                            <TextField
                                id="password"
                                label={t("Password")}
                                variant="standard"
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                fullWidth
                            />
                            <Button
                                variant="contained"
                                startIcon={<LoginIcon />}
                                type="submit"
                                form="signForm"
                                disabled={formik.isSubmitting || !(formik.isValid && formik.dirty)}
                            >
                                {t('Send')}
                            </Button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default LoginForm;
