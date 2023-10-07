import { Suspense } from 'react';
import BlogItem from './blogItem';
import api from '../api/api';
import Pagination from '../components/pagination';

export default async function Blogs({ searchParams }) {
    let totalPage = 1;
    const data = await api
        .getPosts(searchParams.page, searchParams.max)
        .then((res) => {
            totalPage = res.headers.get('x-pagination-pages');
            return res.json();
        });

    return (
        <main className="w-screen p-5 flex flex-col items-center justify-center p-5">
            <Suspense fallback={<p>Fetching posts...</p>}>
                <div className="justify-center">
                    <Pagination totalPage={totalPage} href="/blogs" />
                </div>

                <div className="w-full flex flex-col md:flex-row items-start md:justify-evenly divide-y md:flex-wrap md:gap-5">
                    {data.map((blog) => {
                        return <BlogItem data={blog} key={blog.id} />;
                    })}
                </div>
                <div className="justify-center">
                    <Pagination totalPage={totalPage} href="/blogs" />
                </div>
            </Suspense>
        </main>
    );
}
