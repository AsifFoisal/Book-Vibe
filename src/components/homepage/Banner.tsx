import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-linear-to-r from-emerald-50 to-green-100 rounded-[40px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">

                    {/* Content */}
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-white text-emerald-600 font-semibold text-sm shadow">
                            📚 Discover Your Next Favorite Book
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-slate-900">
                            Books to Freshen Up
                            <span className="block text-emerald-600">
                                Your Bookshelf
                            </span>
                        </h1>

                        <p className="text-slate-600 text-lg max-w-lg">
                            Explore thousands of bestselling books, timeless classics,
                            and hidden gems curated for every reader.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-success px-8">
                                Explore Books
                            </button>

                            <button className="btn btn-outline">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-200 blur-3xl opacity-40 rounded-full"></div>

                        <Image
                            src={bannerImg}
                            alt="Books Collection"
                            className="relative rounded-3xl shadow-2xl w-full object-cover hover:scale-105 duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;