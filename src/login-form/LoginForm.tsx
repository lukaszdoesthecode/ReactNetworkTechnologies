import React, { useCallback, useMemo, useState } from 'react';
import { Button, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {Navigate, useNavigate} from 'react-router-dom';
import './LoginFrom.css';

interface FormValues {
    username: string;
    password: string;
}


function LoginForm() {
    const navigate = useNavigate();
    const onSubmit = useCallback(
        (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
            navigate('/home')
        },
        [navigate]
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
            <div className="Header">
                <h1>U/O/L/F/N/T</h1>
            </div>
            <div className="Sub-header">
                <h3>Unofficial Official Library For Network Technologies</h3>
            </div>
            <div className="Header-description">
                <p>Welcome to the official unofficial page of Unofficial Official Library For Network Technologies!</p>
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
                            label="Username"
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
                            label="Password"
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
                            Send
                        </Button>
                    </form>
                )}
            </Formik>
            <div className="Go-to-books">
                <Button variant="text" onClick={() => setGoToBooks(true)}>Go to books available</Button>
            </div>
        </div>
    );
}

export default LoginForm;
