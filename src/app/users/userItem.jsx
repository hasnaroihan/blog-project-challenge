export default function UserItem({data}) {
    return (
      <div className="flex flex-row">
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.gender}</p>
        <p>{data.status}</p>
      </div>
    )
  }