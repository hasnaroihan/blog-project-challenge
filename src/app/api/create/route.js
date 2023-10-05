import api from '../api';

export async function POST(request) {
    const req = await request.json();
    const res = await api.createUser(
        req.name,
        req.gender,
        req.email,
        req.status,
    );
    console.log(res);
    return res;
}
