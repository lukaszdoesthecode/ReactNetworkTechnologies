import React, { FC } from "react";
import {useTranslation} from "react-i18next";

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
    const {t, i18n} = useTranslation();

    return (
        <div className="Loan-Element">
            <h3 className="Loan-Element-Title">{loan.title}</h3>
            <div className="Loan-Element-Dates">
                <p>{t('Borrowed')}: {loan.borrowedDate}</p>
                <p>{t('Due')}: {loan.dueDate}</p>
                {loan.returnDate && <p>Returned: {loan.returnDate}</p>}
                {!loan.returnDate && <p>Status: Still on loan</p>}
            </div>
        </div>
    );
}

export default LoanElement;
