import UserList from './userList';
import api from '../api/api';

export const revalidate = 0;
export default async function Users({ searchParams }) {
    // const dummyUserList = {
    //     status: 200,
    //     data: [
    //         {
    //             user_id: 10,
    //             name: 'Koki Masak',
    //             gender: 'female',
    //             email: 'kokimasak@example.com',
    //             status: 'active',
    //         },
    //         {
    //             user_id: 45,
    //             name: 'Tikus Rumah',
    //             gender: 'female',
    //             email: 'tikusrumah@example.com',
    //             status: 'active',
    //         },
    //         {
    //             user_id: 2,
    //             name: 'Monyet Kulkas',
    //             gender: 'male',
    //             email: 'monyetkulkas@example.com',
    //             status: 'inactive',
    //         },
    //     ],
    // };

    let totalPage = 1;
    const userList = await api
        .getUsers(searchParams.page, searchParams.max)
        .then((res) => {
            totalPage = res.headers.get('x-pagination-pages');
            return res.json();
        });

    return (
        <main className="w-screen flex flex-col items-center justify-center p-5 text-normal lg:text-lg">
            <UserList totalPage={totalPage} query="" userList={userList} />
        </main>
    );
}
