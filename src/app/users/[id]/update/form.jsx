'use client';

import { useState } from 'react';

export default function FormUpdateUser({ data }) {
    const [active, setActive] = useState(data.status);

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const res = await fetch('http://localhost:3000/api/update', {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                'id': data.id,
                'name': formData.get('name'),
                'email': formData.get('email'),
                'status': formData.get('status'),
            }),
        });
        // if (res) {
        //     redirect('/users');
        // }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                defaultValue={data.name}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                defaultValue={data.email}
            />

            <label>
                <input
                    type="radio"
                    id="active"
                    value="active"
                    name="status"
                    defaultChecked={active == 'active' ? true : false}
                    required
                />
                Active
            </label>

            <label>
                <input
                    type="radio"
                    id="inactive"
                    value="active"
                    name="status"
                    defaultChecked={active == 'inactive' ? true : false}
                />
                Inactive
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
