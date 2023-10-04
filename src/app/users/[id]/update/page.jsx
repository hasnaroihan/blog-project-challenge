import Link from "next/link"

export default function UpdateUser({params}) {
    return (
        <div className="fixed pin w-screen h-screen flex items-center justify-center z-10 bg-slate-400 bg-opacity-50">
            <div className="w-max h-max bg-white">
                <p>update user {params.id}</p>
                <Link href="/users"className="bg-red-500">exit</Link>
            </div>
        </div>
    )
}