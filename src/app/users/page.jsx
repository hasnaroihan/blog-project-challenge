import UserList from './userList';
import api from '../api/api';

export const revalidate = 0;
export default async function Users({ searchParams }) {
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
