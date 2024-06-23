import React from 'react';

interface Loan {
    loan_id: number;
    book_id: {
        id: number;
        isbn: string;
        title: string;
        author: string;
        publisher: string;
        publication_year: number;
        available_copies: number;
        user: {
            user_id: number;
            email: string;
            name: string;
            userRole: string;
        } | null;
    };
    user_id: {
        user_id: number;
        email: string;
        name: string;
        userRole: string;
    };
    loan_date: string;
    due_date: string;
    return_date: string | null;
}

interface LoanElementProps {
    loan: Loan;
}

const LoanElement: React.FC<LoanElementProps> = ({ loan }) => {
    const { book_id, loan_date, due_date, return_date } = loan;
    const status = return_date ? "Returned" : "Not returned yet";

    return (
        <div className="loan-element">
            <h2 className="book-title">{book_id.title}</h2>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Borrowed Date:</strong> {new Date(loan_date).toLocaleDateString()}</p>
            <p><strong>Due Date:</strong> {new Date(due_date).toLocaleDateString()}</p>
            <p><strong>Return Date:</strong> {return_date ? new Date(return_date).toLocaleDateString() : "Not returned yet"}</p>
        </div>
    );
}

export default LoanElement;
