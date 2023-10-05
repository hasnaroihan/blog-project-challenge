import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/blogs?page=1&max=10');
}
