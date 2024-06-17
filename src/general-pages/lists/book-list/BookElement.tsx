import { FC } from "react";
import {useTranslation} from "react-i18next";

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
    const {t, i18n} = useTranslation();

    return (
        <div className="Book-Element">
            <h3 className="Book-Element-Title">{book.title}</h3>
            <div className="Book-Element-Author">
                <p>{t('Author')}: {book.author}</p>
            </div>
            <div className="Book-Element-ISBN">
                <p>ISBN: {book.ISBN}</p>
            </div>
            <div className="Book-Element-Publisher">
                <p>{t('Publisher')}: {book.publisher} ({book.yearPublished})</p>
            </div>
            <div className="Book-Element-Availability">
                <p>{t('Available Copies')}: {book.availableCopies}</p>
            </div>
            <div className="Book-Element-Description">
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default BookElement;
