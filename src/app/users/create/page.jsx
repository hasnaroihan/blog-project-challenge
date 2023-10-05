'use client';
import api from '@/app/api/api';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Input } from 'postcss';

export default function CreateUser() {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const res = await fetch('http://localhost:3000/api/create', {
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
        });

        console.log(res);
        // if (res) {
        //     redirect('/users');
        // }
    }
    return (
        <div className="fixed pin w-screen h-screen flex items-center justify-center z-10 bg-slate-400 bg-opacity-50">
            <div className="w-max h-max bg-white">
                <Link href="/users" className="bg-red-500">
                    exit
                </Link>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />

                    <label>
                        <input
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
                            type="radio"
                            id="female"
                            value="female"
                            name="gender"
                        />
                        Female
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="active"
                            value="active"
                            name="status"
                        />
                        Active
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="inactive"
                            value="active"
                            name="status"
                            required
                        />
                        Inactive
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
