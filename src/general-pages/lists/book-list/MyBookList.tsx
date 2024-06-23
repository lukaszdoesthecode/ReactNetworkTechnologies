import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookElement from './BookElement';
import './MyBookList.css';

// Define the Book type
interface Book {
    bookID: number;
    ISBN: string;
    title: string;
    author: string;
    publisher: string;
    yearPublished: number;
    availableCopies: number;
    description: string;
    user: {
        user_id: number;
        email: string;
        name: string;
        userRole: string;
    } | null;
}

const MyBookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error('No user ID found in local storage');
                return;
            }

            try {
                const response = await axios.get('http://localhost:8081/api/books/allBooks', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                });

                if (response.status === 200 && response.data) {
                    const userBooks = response.data
                        .map((book: any) => ({
                            bookID: book.id,
                            ISBN: book.isbn,
                            title: book.title,
                            author: book.author,
                            publisher: book.publisher,
                            yearPublished: book.publication_year,
                            availableCopies: book.available_copies,
                            description: book.description,
                            user: book.user
                        }))
                        .filter((book: Book) => book.user && book.user.user_id === parseInt(userId));
                    setBooks(userBooks);
                } else {
                    console.error('Failed to fetch books:', response);
                }
            } catch (error) {
                console.error('An error occurred while fetching the books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="my-book-list-container">
            <div className="my-book-list">
                {books.map((book) => (
                    <BookElement key={book.bookID} book={book} />
                ))}
            </div>
        </div>
    );
};

export default MyBookList;
