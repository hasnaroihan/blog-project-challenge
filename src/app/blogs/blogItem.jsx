import Link from 'next/link';
import { gabarito } from '../layout';

export default function BlogItem({ data }) {
    return (
        <div className="w-full py-5 md:w-2/5" key={data.id}>
            <Link
                className={`${gabarito.variable} font-sans font-bold text-xl`}
                href={`/blogs/${data.id}?author=${data.user_id}`}
            >
                {data.title}
            </Link>
            <p className="mt-3 text-sm line-clamp-3">{data.body}</p>
        </div>
    );
}
