import Link from "next/link";

export default function BlogItem({data}) {
    return (
      <div>
        <Link href={`/blogs/${data.id}`} key={data.id}>{data.title}</Link>
        <p>{data.body}</p>
      </div>
    )
  }