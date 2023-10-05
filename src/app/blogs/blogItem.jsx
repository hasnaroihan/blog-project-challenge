import Link from 'next/link';
import { gabarito } from '../layout';

export default function BlogItem({ data }) {
    return (
        <div key={data.id}>
            <Link
                className={`${gabarito.variable} font-sans font-bold text-xl`}
                href={`/blogs/${data.id}?author=${data.user_id}`}
            >
                {data.title}
            </Link>
            <p>{data.body}</p>
        </div>
    );
}
