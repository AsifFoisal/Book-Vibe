import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const page = async ({ params }: IBookDetailsPageProps) => {

    const { id } = await params;

    const getBooks = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await response.json();
        return data;

    }

    const booksData = await getBooks();
    const book = booksData.find((book: IBook) => book.bookId === parseInt(id),) as IBook

    return (
        <div className='max-w-7xl mx-auto m-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-3xl overflow-hidden border border-gray-100">

                <figure className="lg:w-2/5 bg-gray-50 p-6">
                    <Image
                        width={600}
                        height={800}
                        src={book.image}
                        alt={book.bookName}
                        className="rounded-2xl object-cover hover:scale-105 transition duration-500"
                    />
                </figure>

                <div className="card-body lg:w-3/5 p-8">

                    {/* Category + Rating */}
                    <div className="flex items-center gap-3">
                        <span className="badge badge-success badge-outline px-4 py-3">
                            {book.category}
                        </span>

                        <span className="badge badge-warning badge-outline px-4 py-3">
                            ⭐ {book.rating}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="card-title text-4xl font-bold mt-2">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-lg text-gray-500">
                        by <span className="font-semibold">{book.author}</span>
                    </p>

                    <div className="divider my-2"></div>

                    {/* Info */}
                    <div className="space-y-3">

                        <div className="flex justify-between">
                            <span className="font-semibold">Publisher</span>
                            <span>{book.publisher}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Published</span>
                            <span>{book.yearOfPublishing}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Pages</span>
                            <span>{book.totalPages}</span>
                        </div>

                    </div>

                    <div className="divider my-2"></div>

                    {/* Tags */}
                    <div>
                        <h3 className="font-semibold mb-3">Tags</h3>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge badge-outline badge-lg"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Review */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg mb-2">
                            Review
                        </h3>

                        <p className="text-gray-600 leading-7">
                            {book.review}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-6">
                        <ReadButton book = {book}/>

                        <WishListButton book={book}/>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default page;