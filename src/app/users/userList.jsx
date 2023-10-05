import UserItem from './userItem';
export default function UserList({ data }) {
    return (
        <div className="w-screen">
            {data.map((item) => {
                return <UserItem data={item} key={item.id} />;
            })}
        </div>
    );
}
