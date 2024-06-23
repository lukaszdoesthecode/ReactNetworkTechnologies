import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './general-pages/login-page/LoginForm';
import BookList from './general-pages/lists/book-list/BookList';
import HomePage from "./home-page/HomePage";
import LoansList from "./general-pages/lists/loan-list/LoanList";
import ApiProvider from "./api/connection/ApiProvider";
import ReserveBook from "./general-pages/reserve-book/ReserveBook";
import MyBookList from "./general-pages/lists/book-list/MyBookList";
import EmployeeMenu from "./general-pages/admin-pages/EmployeeMenu";
import HomeText from "./general-pages/about-library/HomeText";
import AddBook from "./general-pages/admin-pages/AddBook";
import DeleteBook from "./general-pages/admin-pages/DeleteBook";
import AddUser from "./general-pages/admin-pages/AddUser";
import DeleteUser from "./general-pages/admin-pages/DeleteUser";
import ErrorPage from "./general-pages/error-page/ErrorPage";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import PrivateRoute from "./private-route";
import RoleBasedRedirect from './RoleBasedRedirect';

const App = () => {
    return (
        <Router>
            <I18nextProvider i18n={i18n}>
                <ApiProvider>
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/home" element={<HomePage />}>
                            <Route path="/home/book-list" element={<PrivateRoute><BookList /></PrivateRoute>} />
                            <Route path="/home/loan-list" element={<PrivateRoute><LoansList /></PrivateRoute>} />
                            <Route path="/home/reserve-book" element={<PrivateRoute><ReserveBook /></PrivateRoute>} />
                            <Route path="/home/my-books" element={<PrivateRoute><MyBookList /></PrivateRoute>} />
                            <Route path="/home/employee-menu" element={<RoleBasedRedirect><EmployeeMenu /></RoleBasedRedirect>} />
                            <Route path="/home/about-library" element={<PrivateRoute><HomeText /></PrivateRoute>} />
                            <Route path="/home/error" element={<ErrorPage />} />
                        </Route>
                        <Route path="/home/employee-menu/add-book" element={<RoleBasedRedirect><AddBook /></RoleBasedRedirect>} />
                        <Route path="/home/employee-menu/delete-book" element={<RoleBasedRedirect><DeleteBook /></RoleBasedRedirect>} />
                        <Route path="/home/employee-menu/add-user" element={<RoleBasedRedirect><AddUser /></RoleBasedRedirect>} />
                        <Route path="/home/employee-menu/delete-user" element={<RoleBasedRedirect><DeleteUser /></RoleBasedRedirect>} />
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="*" element={<Navigate to="/home/error" />} />
                    </Routes>
                </ApiProvider>
            </I18nextProvider>
        </Router>
    );
}

export default App;
