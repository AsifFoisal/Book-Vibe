
import React from 'react';
import BookCard from '../../components/shared/BookCard';
import { IBook } from '@/types/books.type';

const getBooks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await response.json();
    return data;

}

const Books = async () => {
    const booksData = await getBooks();
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">

            {/* Heading */}
            <div className="text-center mb-14">
                <p className="text-pink-500 font-semibold uppercase tracking-widest">
                    Our Collection
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                    Explore All Books
                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
                    Discover timeless classics, modern masterpieces, thrilling adventures,
                    and inspiring stories from our carefully curated library.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {booksData.map((book: IBook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>

        </section>
    );
};

export default Books;