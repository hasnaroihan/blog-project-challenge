import Image from 'next/image'
import Navigation from './navigation/navigation'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/blogs')
}
