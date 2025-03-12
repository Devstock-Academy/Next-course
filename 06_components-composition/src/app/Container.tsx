import { useState } from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  console.log('Container render') // pojawi się w przeglądarce
  return (
    <div className='p-4 border-2 rounded-xl border-red-50'>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && children}
    </div>
  )
}
