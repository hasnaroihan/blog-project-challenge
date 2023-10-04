import UserItem from './userItem';
export default function UserList({ data }) {
    return (
        <div className="w-screen">
            {data.status == 200
                ? data.data.map((item) => {
                      return <UserItem data={item} key={item.user_id} />;
                  })
                : data.status}
        </div>
    );
}
