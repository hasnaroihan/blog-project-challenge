'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const [page, setPage] = useState(pathname.slice(0, 6));

    useEffect(() => {
        setPage(pathname.slice(0, 6));
    }, [pathname]);

    return (
        <div className="sticky top-0 w-screen flex min-h-max flex-row gap-5 px-3 font-bold bg-white shadow-md">
            <Link
                href={'/blogs?page=1&max=10'}
                id="/blogs"
                className={`w-max h-full px-5 py-3 ${
                    page == '/blogs'
                        ? 'bg-gradient-to-b from-teal-600 from-60% to-green-200 text-white'
                        : 'text-black'
                }`}
            >
                Blogs
            </Link>
            <Link
                href={'/users?page=1&max=10'}
                id="/users"
                className={`w-max h-full px-5 py-3 ${
                    page == '/users'
                        ? 'bg-gradient-to-b from-teal-600 from-60% to-green-200 text-white'
                        : 'text-black'
                }`}
            >
                Users
            </Link>
        </div>
    );
}
