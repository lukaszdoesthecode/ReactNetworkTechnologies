import { FC } from "react";
import { useTranslation } from "react-i18next";
import './BookElement.css';

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

interface BookElementProps {
    book: Book;
}

const BookElement: FC<BookElementProps> = ({ book }) => {
    const { t } = useTranslation();

    return (
        <div className="book-element">
            <h3 className="book-element-title">{book.title}</h3>
            <div className="book-element-author">
                <p>{t('Author')}: {book.author}</p>
            </div>
            <div className="book-element-isbn">
                <p>ISBN: {book.ISBN}</p>
            </div>
            <div className="book-element-publisher">
                <p>{t('Publisher')}: {book.publisher} ({book.yearPublished})</p>
            </div>
            <div className="book-element-availability">
                <p>{t('Available Copies')}: {book.availableCopies}</p>
            </div>
            <div className="book-element-description">
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default BookElement;
