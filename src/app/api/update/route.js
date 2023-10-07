import api from '../api';

export async function PATCH(request) {
    const req = await request.json();
    const res = await api.updateUser(req.id, req.name, req.email, req.status);

    console.log(res);
    return res;
}
