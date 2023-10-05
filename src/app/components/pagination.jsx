'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function generateDisplayPage(page, totalPage, maxPage) {
    if (totalPage <= maxPage) {
        return [...Array(totalPage).keys()].map((i) => i + 1);
    } else if (page <= totalPage - maxPage) {
        return [...Array(maxPage).keys()].map((i) => i + page);
    } else {
        return [...Array(maxPage).keys()].map(
            (i) => i + Number(totalPage) - maxPage + 1,
        );
    }
}
export default function Pagination({ page, totalPage, maxResult, href }) {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        if (page) {
            setCurrentPage(Number(page));
        }
    }, [page]);

    return (
        <div className="font-sans flex flex-row gap-3 items-center justify-center h-fit">
            <Link
                className={`${currentPage <= 2 ? 'hidden' : 'text-teal-600'}`}
                href={`${href}?page=${currentPage - 1}&max=${maxResult}`}
            >
                {'<'}
            </Link>
            <Link
                className={`${currentPage == 1 ? 'hidden' : 'text-teal-600'}`}
                href={`${href}?page=1&max=${maxResult}`}
            >
                1
            </Link>
            <p className={`${currentPage <= 2 ? 'hidden' : 'text-teal-600'}`}>
                ...
            </p>
            {generateDisplayPage(currentPage, totalPage, 3).map((item) => (
                <Link
                    className={`${
                        currentPage == item
                            ? 'font-bold text-lg text-green-200 bg-teal-600 px-2 rounded-lg'
                            : 'text-teal-600'
                    }`}
                    href={`${href}?page=${item}&max=${maxResult}`}
                    key={item}
                >
                    {item}
                </Link>
            ))}
            <p
                className={`${
                    currentPage >= totalPage - 3 ? 'hidden' : 'text-teal-600'
                }`}
            >
                ...
            </p>
            <Link
                className={`${
                    currentPage > totalPage - 3 ? 'hidden' : 'text-teal-600'
                }`}
                href={`${href}?page=${totalPage}&max=${maxResult}`}
            >
                {totalPage}
            </Link>
            <Link
                className={`${
                    currentPage >= totalPage - 3 ? 'hidden' : 'text-teal-600'
                }`}
                href={`${href}?page=${currentPage + 1}&max=${maxResult}`}
            >
                {'>'}
            </Link>
        </div>
    );
}
