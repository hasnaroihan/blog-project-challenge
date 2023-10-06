import UserList from '../userList';
import api from '@/app/api/api';
import { Suspense } from 'react';

export default async function SearchUser({ searchParams }) {
    // Go Rest doesn't support search user by name, hence handled with regex here
    const regEx = RegExp(searchParams.query);
    const userList = await api.getAllUsers().then((res) =>
        res.filter((el) => {
            console.log(regEx.test);
            return regEx.test(el.name);
        }),
    );
    console.log(userList);

    return (
        <main className="w-screen flex flex-col items-center justify-center p-5 text-normal lg:text-lg">
            <Suspense fallback={<p>Finding user...</p>}>
                <UserList
                    totalPage="1"
                    query={searchParams.query}
                    userList={userList}
                />
            </Suspense>
        </main>
    );
}
