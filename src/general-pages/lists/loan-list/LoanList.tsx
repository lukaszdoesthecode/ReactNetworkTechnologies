import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoanElement from './LoanElement';
import './LoansList.css';

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

const LoansList: React.FC = () => {
    const [loans, setLoans] = useState<Loan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLoans = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error('No user ID found in local storage');
                setError("No user ID found in local storage");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://localhost:8081/api/loans/allLoans', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                });

                if (response.status === 200 && response.data) {
                    const userLoans = response.data.filter((loan: Loan) => loan.user_id.user_id === parseInt(userId));
                    setLoans(userLoans);
                } else {
                    setError("Failed to fetch loans");
                }
            } catch (error) {
                setError("An error occurred while fetching the loans");
            } finally {
                setLoading(false);
            }
        };

        fetchLoans();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (loans.length === 0) {
        return <div>NO LOANS FOUND</div>;
    }

    return (
        <div className="loans-list">
            {loans.map((loan) => (
                <LoanElement key={loan.loan_id} loan={loan} />
            ))}
        </div>
    );
}

export default LoansList;
