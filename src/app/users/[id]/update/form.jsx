'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormUpdateUser({ data }) {
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        await fetch(`/api/update/${data.id}`, {
            'method': 'PATCH',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                'id': data.id,
                'name': formData.get('name'),
                'email': formData.get('email'),
                'status': formData.get('status'),
            }),
        }).then((res) => {
            if (res.ok) {
                router.push('/users?page=1&max=10');
            } else {
                alert(res.status + ' ' + res.statusText);
            }
        });
    }

    async function handleDelete(e) {
        e.preventDefault();

        await fetch(`/api/delete/${data.id}`, {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                'id': data.id,
            }),
        }).then((res) => {
            if (res.status == 204) {
                router.push('/users?page=1&max=10');
            } else {
                alert(res.status + ' ' + res.statusText);
            }
        });
    }
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <input
                className="border-2 rounded-lg w-full p-2"
                type="text"
                name="name"
                placeholder="Name"
                required
                defaultValue={data.name}
            />
            <input
                className="border-2 rounded-lg w-full p-2"
                type="email"
                name="email"
                placeholder="Email"
                required
                defaultValue={data.email}
            />

            <div className="flex flex-col gap-1">
                <p className="text-teal-600">Status</p>
                <label>
                    <input
                        className="mr-2"
                        type="radio"
                        id="active"
                        value="active"
                        name="status"
                        defaultChecked={data.status === 'active'}
                        required
                    />
                    Active
                </label>

                <label>
                    <input
                        className="mr-2"
                        type="radio"
                        id="inactive"
                        value="inactive"
                        name="status"
                        defaultChecked={data.status == 'inactive'}
                    />
                    Inactive
                </label>
            </div>
            <div className="w-full flex flex-row justify-between">
                <button
                    className="self-end bg-red-600 rounded-lg py-2 px-5 text-white hover:bg-red-700"
                    type="button"
                    onClick={handleDelete}
                >
                    Delete
                </button>

                <button
                    className="self-end bg-teal-600 rounded-lg py-2 px-5 text-white hover:bg-teal-700"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
