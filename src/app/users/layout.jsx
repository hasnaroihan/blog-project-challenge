import UserList from './userList';
import Link from 'next/link';

export default async function UsersLayout({ children }) {
    // const userList = await api.getUsers()
    const dummyUserList = {
        status: 200,
        data: [
            {
                user_id: 10,
                name: 'Koki Masak',
                gender: 'female',
                email: 'kokimasak@example.com',
                status: 'active',
            },
            {
                user_id: 45,
                name: 'Tikus Rumah',
                gender: 'female',
                email: 'tikusrumah@example.com',
                status: 'active',
            },
            {
                user_id: 2,
                name: 'Monyet Kulkas',
                gender: 'male',
                email: 'monyetkulkas@example.com',
                status: 'inactive',
            },
        ],
    };

    return (
        <div>
            {children}
            <Link href="/users/create">create</Link>
            <UserList data={dummyUserList} />
        </div>
    );
}
