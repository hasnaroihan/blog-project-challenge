import api from '../api';

export async function POST(request) {
    const res = await request.json().then(async (req) => {
        return await api.createUser(
            req.name,
            req.gender,
            req.email,
            req.status,
        );
    });
    return res;
}
