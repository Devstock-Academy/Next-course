import Link from 'next/link'
import Timer from './Timer'

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <main className='flex justify-center items-center h-screen flex-col'>
      <div>Time: {new Date().toLocaleTimeString()}</div>
      <Link href='/sub-route'>Sub Route</Link>
      <Timer />
    </main>
  )
}
