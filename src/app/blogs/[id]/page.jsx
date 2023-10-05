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
                <div className="flex flex-col gap-5">
                    <Suspense fallback={<p>Fetching post...</p>}>
                        <div>{data.title}</div>
                        <Suspense fallback={<p>Fetching author...</p>}>
                            <div>{user.name}</div>
                        </Suspense>
                        <div>{data.body}</div>
                    </Suspense>

                    <Suspense fallback={<p>Fetching comments...</p>}>
                        <div>
                            {comments.map((el, idx) => {
                                return <CommentItem key={idx} data={el} />;
                            })}
                        </div>
                    </Suspense>
                </div>
            ) : (
                <p>Post not found</p>
            )}
        </>
    );
}
