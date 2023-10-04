import api from "@/app/services/api"
import { Suspense } from "react"
import CommentItem from "./commentItem"

export default async function BlogDetail({params}) {
    // const data = await api.getPostDetails(params.id)
    // const user = await api.getUserDetails(params.author)
    // const comments = await api.getPostComments(params.id)

	const dummyData = {
		status: 200,
		data: {
			id: 1,
			user_id: 10,
			title: "Ada Monyet di Balik Kulkas",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat."
		}
	}
	const dummyUser = {
		status: 200,
		data: {
			user_id: 10,
			name: "Koki Masak",
			gender: "female",
			email: "kokimasak@example.com",
			status: "active"
		}
	}

	const dummyComments = {
		status: 200,
		data: [
				{
				  "id": 1,
				  "post_id": 1,
				  "name": "Tikus Rumah",
				  "email": "tikusrumah@example.com",
				  "body": "Sit dolor voluptates."
				},
				{
				  "id": 2,
				  "post_id": 1,
				  "name": "Monyet Kulkas",
				  "email": "monyetkulkas@example.com",
				  "body": "Dolorum et nesciunt. Dolor tenetur blanditiis. Consequatur velit dolores. Iusto mollitia hic."
				}
			  ]
	}

    return (
      <div className="flex flex-col gap-5">
		{
			dummyData.status == 200 ? 
			<Suspense fallback={<p>Fetching post...</p>}>
        	  	<div>
        	    	{dummyData.data.title}
        	  	</div>
        	  	<Suspense fallback={<p>Fetching author...</p>}>
        	  		<div>
        	    		{dummyUser.status == 200 ? dummyUser.data.name : "Unknown Author"}
        	  		</div>
        		</Suspense>
        	  	<div>
        	    	{dummyData.data.body}
        	  	</div>
        	</Suspense> :
			dummyData.status
		}
        
		<Suspense fallback={<p>Fetching comments...</p>}>
			{
				dummyComments.status == 200 ?
        	  		<div>
        	    		{dummyComments.data.map((el, idx) => {
							return <CommentItem key={idx} data={el} />
						})}
        	  		</div> :
				dummyComments.status
			}
		</Suspense>
      </div>
    )
  }