import { Suspense } from 'react'
import UserList from './UserList'

export default function Home() {
  return (
    <div className='p-4'>
      <Suspense fallback={<div>Loading posts...</div>}>
        <UserList />
      </Suspense>
    </div>
  )
}
