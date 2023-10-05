'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [page, setPage] = useState('blog');
    const handlePage = (e) => {
        setPage(e.currentTarget.id);
    };
    return (
        <div className="sticky top-0 w-screen flex min-h-max flex-row gap-5 px-3 font-bold bg-white shadow-md">
            <Link
                href={'/blogs?page=1&max=10'}
                onClick={handlePage}
                id="blog"
                className={`w-max h-full px-5 py-3 ${
                    page == 'blog'
                        ? 'bg-gradient-to-b from-teal-600 from-60% to-green-200 text-white'
                        : 'text-black'
                }`}
            >
                Blogs
            </Link>
            <Link
                href={'/users'}
                onClick={handlePage}
                id="user"
                className={`w-max h-full px-5 py-3 ${
                    page == 'user'
                        ? 'bg-gradient-to-b from-teal-600 from-60% to-green-200 text-white'
                        : 'text-black'
                }`}
            >
                Users
            </Link>
        </div>
    );
}
