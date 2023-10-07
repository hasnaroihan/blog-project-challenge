import UserList from '../userList';
import api from '@/app/api/api';
import { Suspense } from 'react';

export const revalidate = 0;
export default async function SearchUser({ searchParams }) {
    // const regEx = RegExp(searchParams.query);
    // const userList = await api.getAllUsers().then((res) =>
    //     res.filter((el) => {
    //         console.log(regEx.test);
    //         return regEx.test(el.name);
    //     }),
    // );

    const userList = await api.searchUser(searchParams.name);

    return (
        <main className="w-screen flex flex-col items-center justify-center p-5 text-normal lg:text-lg">
            <Suspense fallback={<p>Finding user...</p>}>
                <UserList
                    totalPage="1"
                    query={searchParams.name}
                    userList={userList}
                />
            </Suspense>
        </main>
    );
}
