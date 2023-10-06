import UserItem from './userItem';
import SearchBar from './searchBar';
import Link from 'next/link';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Pagination from '../components/pagination';
import { useSearchParams } from 'next/navigation';

export default async function UserList({ totalPage, query, userList }) {
    return (
        <div className="w-full md:w-4/5 flex flex-col justify-center md:divide-y gap-3 md:gap-0 font-sans">
            <div className="flex flex-col md:flex-row justify-between py-2">
                <div className="hidden md:block">
                    <SearchBar query={query} />
                </div>
                <Pagination totalPage={totalPage} href={'/users'} />
            </div>

            <div className="w-full grid grid-cols-8 font-medium border-b-2 gap-3 p-2 items-center">
                <div className="col-span-2 hidden md:block">Name</div>
                <div className="col-span-3 hidden md:block">Email</div>
                <div className="hidden md:block justify-self-center">
                    Gender
                </div>
                <div className="hidden md:block justify-self-center">
                    Status
                </div>
                <div className="col-span-5 self-center justify-self-start block md:hidden">
                    <SearchBar query={query} />
                </div>
                <div className="col-span-3 md:col-span-1 col-end-9 justify-self-end md:justify-self-center bg-slate-600 text-white p-2 rounded-lg">
                    <Link href="/users/create">
                        <AddCircleRoundedIcon fontSize="small" />
                    </Link>
                    <p className="inline m-1 md:hidden text-xs md:text-normal">
                        Add User
                    </p>
                </div>
            </div>
            {userList.length != 0 ? (
                userList.map((item) => {
                    return <UserItem data={item} key={item.id} />;
                })
            ) : (
                <p className="py-2">No user found</p>
            )}
            <Pagination totalPage={totalPage} href={'/users'} />
        </div>
    );
}
