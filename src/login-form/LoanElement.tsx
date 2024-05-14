import React, { FC } from "react";

interface Loan {
    title: string;
    borrowedDate: string;
    dueDate: string;
    returnDate: string | null;
}

interface LoanElementProps {
    loan: Loan;
}

const LoanElement: FC<LoanElementProps> = ({ loan }) => {
    return (
        <div className="Loan-Element">
            <h3 className="Loan-Element-Title">{loan.title}</h3>
            <div className="Loan-Element-Dates">
                <p>Borrowed: {loan.borrowedDate}</p>
                <p>Due: {loan.dueDate}</p>
                {loan.returnDate && <p>Returned: {loan.returnDate}</p>}
                {!loan.returnDate && <p>Status: Still on loan</p>}
            </div>
        </div>
    );
}

export default LoanElement;
