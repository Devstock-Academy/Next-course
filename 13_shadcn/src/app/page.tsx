import Blog from './Blog'
import { getEntries } from './blog-api'
import BlogForm from './BlogForm'

export default async function Home() {
  const entries = await getEntries()

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Blog entries={entries} />
      </div>
      <div className='w-1/2'>
        <BlogForm />
      </div>
    </div>
  )
}
