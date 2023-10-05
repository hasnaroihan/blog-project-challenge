export default function CommentItem({ data }) {
    return (
        <div className="w-full py-3 px-3 md:px-5" key={data.id}>
            <p className="text-red-800 text-sm font-sans font-semibold">
                {data.name}
            </p>
            <p className="text-sm text-slate-600 m-3 font-sans font-thin">
                {data.body}
            </p>
        </div>
    );
}
