
import React from 'react';
import BookCard from '../shared/BookCard';
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {booksData.slice(0,6).map((book:IBook, ind:number) => {
                    return <BookCard key={ind} book={book}></BookCard>
                })}
            </div>
        </section>
    );
};

export default Books;