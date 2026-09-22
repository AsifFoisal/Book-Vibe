"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({book}: {book: IBook}) => {

    const context = useContext(BooksContext)
    if (!context) return null;
    const {wishlist, setWishlist} = context;

    const handleAddToWishList = () => {
        setWishlist([...wishlist, book]);
        toast.success(`You have wishlisted ${book.bookName}`)
    };
    return (
        <button onClick={() => handleAddToWishList()} className="btn btn-outline">
            Add to Wishlist
        </button>
    );
};

export default WishListButton;