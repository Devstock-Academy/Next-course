'use client'

export default function ClientComponent({ name }: { name: string }) {
  return (
    <div className='my-5'>
      <h1 className='font-bold text-2xl'>Client Component</h1>
      <div>{name}</div>
    </div>
  )
}
