import { Suspense } from 'react';
import BlogItem from './blogItem';
import api from '../api/api';
import Pagination from '../components/pagination';

export default async function Blogs({ searchParams }) {
    // const dummyData = {
    // 	status: 200,
    // 	data: [
    // 		{
    // 			id: 1,
    // 			user_id: 10,
    // 			title: "Ada Monyet di Balik Kulkas",
    // 			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat."
    // 		},
    // 		{
    // 			id: 2,
    // 			user_id: 10,
    // 			title: "Ada Kucing di Atas Rumah",
    // 			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat."
    // 		}
    // 	]
    // }
    let totalPage = 1;
    const data = await api
        .getPosts(searchParams.page, searchParams.max)
        .then((res) => {
            totalPage = res.headers.get('x-pagination-pages');
            return res.json();
        });

    return (
        <main className="w-screen p-5">
            <Suspense fallback={<p>Fetching posts...</p>}>
                <Pagination
                    page={searchParams.page}
                    totalPage={totalPage}
                    maxResult={searchParams.max}
                    href="/blogs"
                />
                <div className="flex flex-col divide-y">
                    {data.map((blog) => {
                        return <BlogItem data={blog} key={blog.id} />;
                    })}
                </div>
                <Pagination
                    page={searchParams.page}
                    totalPage={totalPage}
                    maxResult={searchParams.max}
                    href="/blogs"
                />
            </Suspense>
        </main>
    );
}
