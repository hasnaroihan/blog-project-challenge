import { Suspense } from "react"
import BlogItem from "./blogItem"

export default async function Blogs() {
    const data = [
		{
			'id': 1,
			'user_id': 1,
			'title': 'title 1',
			'body': 'body 2'
		},
		{
			'id': 2,
			'user_id': 2,
			'title': 'title 2',
			'body': 'body 2'
		}
	]

    return (
      <main>
		<Suspense fallback={<p>Fetching posts...</p>}>
        	{data.map((blog) => {
				return <BlogItem data={blog} key={blog.id}/>
			})}
		</Suspense>
      </main>
    )
  }

// async function getData() {
// 	const res = await fetch('')

// 	if (!res.ok) {
// 		throw new Error('Failed to retrieve posts')
// 	}

// 	return res.json()
// }
  