import { NextResponse } from 'next/server';
import api from '../../api';

export async function POST(request) {
    const res = await request.json().then(async (req) => {
        return await api.deleteUser(req.id);
    });
    return res;
}
