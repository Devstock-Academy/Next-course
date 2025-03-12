interface User {
  id: string
  email: string
  first_name: string
  last_name: string
}

const UserList = async () => {
  const data = await fetch('https://reqres.in/api/users').then((res) =>
    res.json()
  )

  console.log(data)

  return (
    <div className='flex gap-4'>
      {data?.data.map((user: User) => (
        <article className='p-4 border rounded' key={user.id}>
          <div>Email: {user.email}</div>
          <div>First name: {user.first_name}</div>
          <div>Last name: {user.last_name}</div>
        </article>
      ))}
    </div>
  )
}

export default UserList
