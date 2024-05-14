import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginForm from './login-form/LoginForm';
import BookList from './login-form/BookList';
import HomePage from "./home-page/HomePage";
import LoansList from "./login-form/LoanList";

const App = () => {
    return (
          <Routes>
              <Route path="/home" element={<HomePage />}>
                  <Route path="/home/book-list" element={<BookList />} />
                  <Route path="/home/loan-list" element={<LoansList />} />
              </Route>
               <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<Navigate to="/home" />} />


              <Route path="*" element={<h1>404 - page not found</h1>} />
             </Routes>
    );
};

export default App;
