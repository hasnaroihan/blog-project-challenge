export default function CommentItem({data}) {
    return (
      <div>
        <p>{data.name}</p>
        <p>{data.body}</p>
      </div>
    )
  }