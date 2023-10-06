'use client';

import Link from 'next/link';
import { CloseRounded } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import api from '@/app/api/api';

export default function CreateUser() {
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        // const res = await fetch('http://localhost:3000/api/create', {
        //     'method': 'POST',
        //     'headers': {
        //         'Content-Type': 'application/json',
        //     },
        //     'body': JSON.stringify({
        //         'name': formData.get('name'),
        //         'email': formData.get('email'),
        //         'gender': formData.get('gender'),
        //         'status': formData.get('status'),
        //     }),
        // }).then((res) => {
        //     router.push('/users?page=1&max=10');
        // });

        await fetch('/api/create', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                'name': formData.get('name'),
                'email': formData.get('email'),
                'gender': formData.get('gender'),
                'status': formData.get('status'),
            }),
        }).then((res) => {
            if (res.status == 201) {
                router.push('/users?page=1&max=10');
            } else {
                alert(res.status + ' ' + res.statusText);
            }
        });
    }

    return (
        <div className="fixed pin w-screen h-screen flex items-center justify-center z-10 bg-slate-400 bg-opacity-50 font-sans">
            <div className="w-full md:w-2/5 lg:w-1/5 h-max m-5 bg-white flex flex-col items-start justify-center p-5 rounded-xl">
                <div className="w-full flex items-center justify-between mb-4">
                    <p className="font-medium text-lg">Create New User</p>
                    <Link href="/users" className="text-red-500">
                        <CloseRounded />
                    </Link>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-3"
                >
                    <input
                        className="border-2 rounded-lg w-full p-2"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        className="border-2 rounded-lg w-full p-2"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-teal-600">Gender</p>
                            <label>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    id="male"
                                    value="male"
                                    name="gender"
                                    required
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    id="female"
                                    value="female"
                                    name="gender"
                                />
                                Female
                            </label>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-teal-600">Status</p>
                            <label>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    id="active"
                                    value="active"
                                    name="status"
                                />
                                Active
                            </label>

                            <label>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    id="inactive"
                                    value="active"
                                    name="status"
                                    required
                                />
                                Inactive
                            </label>
                        </div>
                    </div>

                    <button
                        className="self-end bg-teal-600 rounded-lg py-2 px-5 text-white hover:bg-teal-700"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
