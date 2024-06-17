import {BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
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


const App = () => {
    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
            <ApiProvider>
                <Routes>
                    <Route path="/home" element={<HomePage />}>
                        <Route path="/home/book-list" element={<BookList />} />
                        <Route path="/home/loan-list" element={<LoansList />} />
                        <Route path="/home/reserve-book" element={<ReserveBook />} />
                        <Route path="/home/my-books" element={<MyBookList />} />
                        <Route path="/home/employee-menu" element={<EmployeeMenu />} />
                        <Route path="/home/about-library" element={<HomeText />}/>
                        <Route path="/home/error" element={<ErrorPage />}/>
                    </Route>
                    <Route path="home/employee-menu/add-book" element={<AddBook />} />
                    <Route path="home/employee-menu/delete-book" element={<DeleteBook />} />
                    <Route path="home/employee-menu/add-user" element={<AddUser />} />
                    <Route path="home/employee-menu/delete-user" element={<DeleteUser />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<Navigate to="/home/about-library" />} />
                    <Route path="*" element={<Navigate to="/home/error" />} />
                </Routes>
            </ApiProvider>
            </I18nextProvider>
        </BrowserRouter>
    );
};

export default App;
