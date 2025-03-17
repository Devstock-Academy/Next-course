'use client'

export default function RevalidateButton({
  onRevalidate,
}: {
  onRevalidate: () => Promise<void>
}) {
  return (
    <button onClick={async () => await onRevalidate()} className='mt-4'>
      Revalidate
    </button>
  )
}
