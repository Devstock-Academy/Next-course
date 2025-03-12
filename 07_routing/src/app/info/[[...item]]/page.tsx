export default function InfoPage({ params }: { params: { item?: string[] } }) {
  return (
    <main>
      <h1>Info Page</h1>
      <p>Items: {JSON.stringify(params.item)}</p>
    </main>
  )
}
