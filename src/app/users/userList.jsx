import UserItem from './userItem';
import api from '../api/api';
import Link from 'next/link';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Pagination from '../components/pagination';

export default async function UserList({ page, max }) {
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
    const userList = await api.getUsers(page, max).then((res) => {
        totalPage = res.headers.get('x-pagination-pages');
        return res.json();
    });
    return (
        <div className="w-screen flex items-center justify-center p-5 text-normal lg:text-lg font-sans">
            <div className="w-full md:w-4/5 flex flex-col md:divide-y gap-3 md:gap-0">
                <Pagination
                    page={page}
                    maxResult={max}
                    totalPage={totalPage}
                    href={'/users'}
                />
                <div className="w-full grid grid-cols-8 font-medium border-b-2 gap-3 p-2">
                    <div className="col-span-2 hidden md:block">Name</div>
                    <div className="col-span-3 hidden md:block">Email</div>
                    <div className="hidden md:block justify-self-center">
                        Gender
                    </div>
                    <div className="hidden md:block justify-self-center">
                        Status
                    </div>
                    <div className="col-start-1 md:col-start-8 justify-self-center bg-slate-600 text-white p-2 rounded-lg">
                        <Link href="/users/create">
                            <AddCircleRoundedIcon fontSize="small" />
                        </Link>
                        {/* <p className="inline m-1 md:hidden text-xs md:text-normal">
                            Add User
                        </p> */}
                    </div>
                </div>
                {userList.map((item) => {
                    return <UserItem data={item} key={item.id} />;
                })}
                <Pagination
                    page={page}
                    maxResult={max}
                    totalPage={totalPage}
                    href={'/users'}
                />
            </div>
        </div>
    );
}
