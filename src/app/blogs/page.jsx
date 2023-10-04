import { Suspense } from "react"
import BlogItem from "./blogItem"
import API from "../services/api"

export default async function Blogs() {
	const dummyData = {
		status: 200,
		data: [
			{
				id: 1,
				user_id: 10,
				title: "Ada Monyet di Balik Kulkas",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat."
			},
			{
				id: 2,
				user_id: 10,
				title: "Ada Kucing di Atas Rumah",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat."
			}
		]
	}
    
	// const data = await API.getPosts()

    return (
      <main>
		<Suspense fallback={<p>Fetching posts...</p>}>
        	{dummyData.status == 200 ? dummyData.data.map((blog) => {
				return <BlogItem data={blog} key={blog.id}/>
			}) :
			dummyData.status}
		</Suspense>
      </main>
    )
  }
