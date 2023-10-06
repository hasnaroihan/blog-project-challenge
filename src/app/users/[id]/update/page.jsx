import Link from 'next/link';
import FormUpdateUser from './form';
import api from '@/app/api/api';
import { CloseRounded } from '@mui/icons-material';

export default async function UpdateUser({ params }) {
    const data = await api.getUserDetails(params.id);
    return (
        <div className="fixed pin w-screen h-screen flex items-center justify-center z-10 bg-slate-400 bg-opacity-50 font-sans">
            <div className="w-full md:w-2/5 lg:w-1/5 h-max m-5 bg-white flex flex-col items-start justify-center p-5 rounded-xl">
                <div className="w-full flex items-center justify-between mb-4">
                    <p className="font-medium text-lg">Update User</p>
                    <Link href="/users" className="text-red-500">
                        <CloseRounded />
                    </Link>
                </div>
                <FormUpdateUser data={data} />
            </div>
        </div>
    );
}
