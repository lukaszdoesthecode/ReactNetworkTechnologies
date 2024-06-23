import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomePageClient } from "../../../api/connection/home-page";
import BookElement from './BookElement';

interface Book {
    bookID: number;
    ISBN: string;
    title: string;
    author: string;
    publisher: string;
    yearPublished: number;
    availableCopies: number;
    description: string;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/login');
                return;
            }

            const client = new HomePageClient();
            const response = await client.getBookDetails();

            if (response.success) {
                setBooks(response.data!);
            } else {
                setError("Failed to fetch book details");
            }
            setLoading(false);
        };

        fetchBooks();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', maxWidth: '1200px', height: '700px', overflowY: 'auto', marginTop: '90px' }}>
                {books.map((book, index) => (
                    <BookElement key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
