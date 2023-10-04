import Link from 'next/link';
import { gabarito } from '../layout';

export default function BlogItem({ data }) {
    return (
        <div>
            <Link
                className={`${gabarito.variable} font-sans font-bold text-xl`}
                href={`/blogs/${data.id}?author=${data.user_id}`}
                key={data.id}
            >
                {data.title}
            </Link>
            <p>{data.body}</p>
        </div>
    );
}
