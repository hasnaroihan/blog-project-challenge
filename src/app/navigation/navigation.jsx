import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="flex min-h-max flex-row gap-5  p-5">
            <Link href={'/blogs'}>Blogs</Link>
            <Link href={'/users'}>Users</Link>
        </div>
    );
}
