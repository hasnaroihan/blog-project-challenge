import Link from 'next/link';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function UserItem({ data }) {
    return (
        <div
            className="grid grid-cols-4 md:grid-cols-8 break-words gap-3 p-3 shadow-md md:shadow-none text-slate-600"
            key={data.id}
        >
            <p className="block md:hidden font-medium text-black">Name</p>
            <p className="col-span-3 md:col-span-2">{data.name}</p>
            <p className="block md:hidden font-medium text-black">Email</p>
            <p className="col-span-3">{data.email}</p>
            <p className="block md:hidden font-medium text-black">Gender</p>
            <p className="col-span-3 md:col-span-1 md:justify-self-center">
                {data.gender}
            </p>
            <p className="block md:hidden font-medium text-black">Status</p>
            <p
                className={`col-span-3 md:col-span-1 md:justify-self-center ${
                    data.status == 'active' ? 'text-green-600' : 'text-red-600'
                }`}
            >
                {data.status}
            </p>
            <div className="justify-self-end md:justify-self-center col-start-4 md:col-start-8 text-teal-600">
                <Link href={`/users/${data.id}/update`}>
                    <EditRoundedIcon fontSize="small" />
                    <p className="inline md:hidden m-1">Edit</p>
                </Link>
            </div>
        </div>
    );
}
