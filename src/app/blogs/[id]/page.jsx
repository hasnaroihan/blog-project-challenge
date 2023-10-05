import api from '@/app/api/api';
import { Suspense } from 'react';
import CommentItem from './commentItem';

export default async function BlogDetail({ params, searchParams }) {
    const data = await api.getPostDetails(params.id);
    const user = await api.getUserDetails(searchParams.author);
    const comments = await api.getPostComments(params.id);
    console.log(searchParams);

    // const dummyData = {
    // 	status: 200,
    // 	data: {
    // 		id: 1,
    // 		user_id: 10,
    // 		title: "Ada Monyet di Balik Kulkas",
    // 		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat."
    // 	}
    // }
    // const dummyUser = {
    // 	status: 200,
    // 	data: {
    // 		user_id: 10,
    // 		name: "Koki Masak",
    // 		gender: "female",
    // 		email: "kokimasak@example.com",
    // 		status: "active"
    // 	}
    // }

    // const dummyComments = {
    // 	status: 200,
    // 	data: [
    // 			{
    // 			  "id": 1,
    // 			  "post_id": 1,
    // 			  "name": "Tikus Rumah",
    // 			  "email": "tikusrumah@example.com",
    // 			  "body": "Sit dolor voluptates."
    // 			},
    // 			{
    // 			  "id": 2,
    // 			  "post_id": 1,
    // 			  "name": "Monyet Kulkas",
    // 			  "email": "monyetkulkas@example.com",
    // 			  "body": "Dolorum et nesciunt. Dolor tenetur blanditiis. Consequatur velit dolores. Iusto mollitia hic."
    // 			}
    // 		  ]
    // }

    return (
        <>
            {data ? (
                <div className="w-screen items-center md:items-start flex flex-col md:flex-row gap-10 p-5 md:p-10">
                    <Suspense fallback={<p>Fetching post...</p>}>
                        <div className="w-full md:w-3/5 md:shadow-lg border-teal-600 rounded-lg px-5 md:px-10 md:py-5 flex flex-col gap-5 md:gap-10">
                            <div className="flex flex-col items-start justify-center gap-2 font-sans text-4xl font-bold">
                                {data.title}
                                <Suspense fallback={<p>Fetching author...</p>}>
                                    <div className="text-sm md:text-base font-normal self-end">
                                        {user.name}
                                    </div>
                                </Suspense>
                            </div>

                            <p className="text-justify indent-5">{data.body}</p>
                        </div>
                    </Suspense>

                    <Suspense fallback={<p>Fetching comments...</p>}>
                        <div className="w-full md:w-2/5 border-2 flex flex-col divide-y-2 rounded-lg overflow-clip">
                            <p className="text-sm md:text-base font-sans font-medium p-3 bg-teal-500 text-white">
                                Comments
                            </p>
                            <div className="bg-slate-100 flex flex-col items-center divide-y divide-dashed divide-slate-400">
                                {comments.length > 0 ? (
                                    comments.map((el, idx) => {
                                        return (
                                            <CommentItem key={idx} data={el} />
                                        );
                                    })
                                ) : (
                                    <p className="p-5 text-sm text-slate-600">
                                        No comments for this post
                                    </p>
                                )}
                            </div>
                        </div>
                    </Suspense>
                </div>
            ) : (
                <p>Post not found</p>
            )}
        </>
    );
}
