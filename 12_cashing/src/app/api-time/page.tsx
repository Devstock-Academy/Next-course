import RevalidateButton from '../RevalidateButton'
import { revalidatePath, revalidateTag } from 'next/cache'

export default async function APITime() {
  const response = await fetch('http://localhost:8080/time', {
    next: {
      tags: ['api-time'],
    },
  })

  async function onRevalidate() {
    'use server'
    revalidateTag('api-time')
  }
  const { time } = await response.json()
  console.log(`Rendering / ${new Date().toLocaleTimeString()}`)
  return (
    <main className='flex justify-center items-center h-screen flex-col'>
      <h1 className='text-2xl'>Aktualny czas z API</h1>
      <p className='text-xl'>{time}</p>
      <RevalidateButton onRevalidate={onRevalidate} />
    </main>
  )
}
