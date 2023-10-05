export default function CommentItem({ data }) {
    return (
        <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.body}</p>
        </div>
    );
}
