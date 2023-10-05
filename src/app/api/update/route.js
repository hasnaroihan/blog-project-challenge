import api from '../api';

export async function PUT(request) {
    const req = await request.json();
    const res = await api.updateUser(req.id, req.name, req.email, req.status);
    console.log(res.status);
    return res;
}
