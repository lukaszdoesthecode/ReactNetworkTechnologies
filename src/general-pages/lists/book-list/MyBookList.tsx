import BookElement from './BookElement';

const MyBookList = () => {
    const books = [
        {
            bookID: 1,
            ISBN: "978-0451524935",
            title: "1984",
            author: "George Orwell",
            publisher: "Secker & Warburg",
            yearPublished: 1949,
            availableCopies: 12,
            description: "A dystopian social science fiction novel and cautionary tale of a totalitarian regime that practices extreme surveillance and repression."
        },
        {
            bookID: 2,
            ISBN: "978-0061120084",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publisher: "J. B. Lippincott & Co.",
            yearPublished: 1960,
            availableCopies: 18,
            description: "A novel about the serious issues of rape and racial inequality, but seen from the perspective of a child."
        },
        {
            bookID: 3,
            ISBN: "978-0743273565",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            publisher: "Charles Scribner's Sons",
            yearPublished: 1925,
            availableCopies: 5,
            description: "A story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the roaring twenties."
        },
        {
            bookID: 4,
            ISBN: "978-0679783268",
            title: "Pride and Prejudice",
            author: "Jane Austen",
            publisher: "T. Egerton, Whitehall",
            yearPublished: 1813,
            availableCopies: 20,
            description: "A romantic novel of manners that explores the character of Elizabeth Bennet, the dynamic between classes, and themes of love and marriage."
        },
        {
            bookID: 5,
            ISBN: "978-1503280786",
            title: "Moby Dick",
            author: "Herman Melville",
            publisher: "Richard Bentley",
            yearPublished: 1851,
            availableCopies: 7,
            description: "An epic tale of the voyage of the whaling ship Pequod, led by Captain Ahab, who is driven by a monomaniacal desire to kill the whale Moby-Dick."
        },
        {
            bookID: 6,
            ISBN: "978-0316769488",
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            publisher: "Little, Brown and Company",
            yearPublished: 1951,
            availableCopies: 4,
            description: "A novel featuring the disillusioned teen Holden Caulfield, who has become an icon of teenage rebellion."
        },
        {
            bookID: 7,
            ISBN: "978-0486415871",
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            publisher: "The Russian Messenger",
            yearPublished: 1866,
            availableCopies: 10,
            description: "A psychological drama that explores morality, desperation, and the necessity of atonement."
        },
        {
            bookID: 8,
            ISBN: "978-0547928227",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            publisher: "George Allen & Unwin",
            yearPublished: 1937,
            availableCopies: 15,
            description: "A fantasy novel that follows the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by the dragon, Smaug."
        },
        {
            bookID: 9,
            ISBN: "978-0060850524",
            title: "Brave New World",
            author: "Aldous Huxley",
            publisher: "Chatto & Windus",
            yearPublished: 1932,
            availableCopies: 8,
            description: "A dystopian novel that provides a grim forecast of a future in which society is controlled by advancements in science and social changes."
        }
    ];

    return (
        <div style={{ height: '700px', overflowY: 'auto' }}>
            {books.map((book, index) => (
                <BookElement key={index} book={book} />
            ))}
        </div>
    );
};

export default MyBookList;