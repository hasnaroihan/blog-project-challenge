import Link from 'next/link';

export default function UserItem({ data }) {
    return (
        <div className="flex flex-row">
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.gender}</p>
            <p>{data.status}</p>
            <Link href={`/users/${data.user_id}/update`}>UPDATE</Link>
        </div>
    );
}
