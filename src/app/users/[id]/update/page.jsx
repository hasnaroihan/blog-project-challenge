import Link from 'next/link';
import FormUpdateUser from './form';
import api from '@/app/api/api';

export default async function UpdateUser({ params }) {
    const data = await api.getUserDetails(params.id);
    return (
        <div className="fixed pin w-screen h-screen flex items-center justify-center z-10 bg-slate-400 bg-opacity-50">
            <div className="w-max h-max bg-white">
                <Link href="/users" className="bg-red-500">
                    exit
                </Link>
                <FormUpdateUser data={data} />
            </div>
        </div>
    );
}
