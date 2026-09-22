import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book : IBook
}

const BookCard = ({book} : IBookCardProps) => {
    return (
        <div>
            <div
                key={book.bookId}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
                {/* Image */}
                <div className="h-80 bg-gray-100 overflow-hidden">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Category + Rating */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                            {book.category}
                        </span>

                        <span className="font-semibold text-amber-500">
                            ⭐ {book.rating}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-gray-500 mb-4">by {book.author}</p>

                    {/* Review */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center border-t pt-4">
                        <div>
                            <p className="text-sm text-gray-500">
                                {book.totalPages} Pages
                            </p>
                            <p className="text-sm text-gray-500">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <Link href={`/books/${book.bookId}`} className="px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;