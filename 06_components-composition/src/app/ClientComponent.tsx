'use client'
import Container from './Container'

export default function ClientComponent({
  content,
}: {
  content: React.ReactNode
}) {
  return (
    <div className='p-4'>
      <Container>{content}</Container>
    </div>
  )
}
