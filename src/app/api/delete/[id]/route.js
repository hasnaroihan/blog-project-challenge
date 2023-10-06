import api from '../../api';

export async function DELETE(request) {
    const res = await request.json().then(async (req) => {
        return await api.deleteUser(req.id);
    });
    return res;
}
