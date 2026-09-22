"use client"
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext) || { readBooks: [], wishlist: [] };
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if(sortBy === "rating"){
            sortedBooks.sort((a , b) => b.rating - a.rating);
        }
        else if (sortBy === "pages"){
            sortedBooks.sort((a , b) => b.totalPages - a.totalPages);
        }
        else if (sortBy === "year"){
            sortedBooks.sort((a , b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;

    }
    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishlist);
    return (
        <div className='max-w-7xl w-full mx-auto py-15'>
            <h2 className='my-7 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center'>Listed Books</h2>
            <div className='text-center'>
                <select onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")} defaultValue="Pick a Runtime" className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"year"}>Published Year</option>
                    <option value={"pages"}>Number of Pages</option>
                </select>

            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books ${readBooks.length}`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedReadBooks.length > 0 ? (sortedReadBooks.map((book: IBook) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        })) : (
                            <p className='text-center text-lg font-semibold'>No Books Added For Reading</p>
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books ${wishlist.length}`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWishlist.length > 0 ? (sortedWishlist.map((book: IBook) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        })) : (
                            <p className='text-center text-lg font-semibold'>No Book is Wishlisted</p>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;