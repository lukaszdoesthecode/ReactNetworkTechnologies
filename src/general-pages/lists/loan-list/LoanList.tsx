import React from 'react';
import LoanElement from './LoanElement';

interface Loan {
    title: string;
    borrowedDate: string;
    dueDate: string;
    returnDate: string | null;
}

const loans: Loan[] = [
    { title: "1984", borrowedDate: "2024-01-10", dueDate: "2024-02-10", returnDate: null },
    { title: "The Great Gatsby", borrowedDate: "2024-01-15", dueDate: "2024-02-15", returnDate: "2024-02-14" },
];

const LoansList: React.FC = () => {
    return (
        <div>
            {loans.map((loan, index) => (
                <LoanElement key={index} loan={loan} />
            ))}
        </div>
    );
}

export default LoansList;
export { LoansList };
