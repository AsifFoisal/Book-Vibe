"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}: {book: IBook}) => {

    const context = useContext(BooksContext);
    const readBooks = context?.readBooks ?? [];
    const setReadBooks = context?.setReadBooks;

    const handleReadBook = () => {
        if (setReadBooks) {
            setReadBooks([...readBooks, book]);
            toast.success(`You have added ${book.bookName} to you read list`);
        } else {
            toast.error("Unable to add book to read list");
        }
    };
    return (
        <button onClick={() => handleReadBook()} className="btn btn-neutral">
            Read Book
        </button>
    );
};

export default ReadButton;