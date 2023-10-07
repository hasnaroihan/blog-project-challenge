import api from '../../api';

export async function PATCH(request) {
    const res = await request.json().then(async (req) => {
        return await api.updateUser(req.id, req.name, req.email, req.status);
    });
    return res;
}
