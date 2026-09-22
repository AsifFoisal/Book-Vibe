import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({book} : {book: IBook}) => {
    return (
        <div>
            <div key={book.bookId} className="flex flex-col md:flex-row gap-6 p-6 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-base-100 mb-6">

                <div className="flex justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={180}
                        height={250}
                        className="rounded-xl object-cover"
                    />
                </div>

                <div className="flex-1 space-y-3">
                    <h2 className="text-3xl font-bold">{book.bookName}</h2>

                    <p className="text-base-content/70">
                        By : {book.author}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {book.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="border-t border-dashed pt-3 flex flex-wrap gap-6 text-sm">
                        <p>
                            <span className="font-semibold">Category:</span> {book.category}
                        </p>

                        <p>
                            <span className="font-semibold">Pages:</span> {book.totalPages}
                        </p>

                        <p>
                            <span className="font-semibold">Published:</span> {book.yearOfPublishing}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="badge badge-warning badge-lg">
                            ⭐ {book.rating}
                        </div>

                        <Link href={`/books/${book.bookId}`} className="btn btn-outline btn-success rounded-full">
                            View Details
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedBooksCard;