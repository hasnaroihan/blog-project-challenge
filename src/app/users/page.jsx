import UserList from './userList';

export default async function Users({ searchParams }) {
    return (
        <main>
            <UserList page={searchParams.page} max={searchParams.max} />
        </main>
    );
}
