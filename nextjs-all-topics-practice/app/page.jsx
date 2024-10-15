import Link from 'next/link'
import React from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/reducers/counterSlice'

const page = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/users'
    , {
    cache: 'no-store'
  }
)
  const res = await data.json()
  console.log(res)

  return (
    <>
      <div>Home</div>
      <Link href="/product">PRODUCT</Link>
      <h1>Helllo World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam ipsum culpa voluptatem aliquid fugit sed vel, qui, totam quasi suscipit quo molestiae dolorum reiciendis asperiores? Vel veniam exercitationem quis?</p>
      <Button />
      <Counter/>

      <ul>
        {res.map((item, index) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.website}</p>
            <Link href={`/users/${item.id}`}>Check User Details</Link>
          </li>
        ))}
      </ul>



    </>
  )
}

export default page