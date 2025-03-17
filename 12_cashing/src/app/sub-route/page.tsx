'use client'
import { useRouter } from 'next/navigation'

export default function SubRoute() {
  const router = useRouter()

  return (
    <main className='flex justify-center items-center h-screen flex-col'>
      <button
        onClick={async () => {
          await fetch('/api/revalidateHome', { method: 'POST' })
          router.push('/')
          router.refresh()
        }}
      >
        Go Home
      </button>
    </main>
  )
}
