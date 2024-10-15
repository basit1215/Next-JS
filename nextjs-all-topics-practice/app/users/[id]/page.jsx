import Link from 'next/link'
import React from 'react'
import Dates from '../../components/Dates'

const UsersDetails = async (props) => {

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const res = await data.json()

    console.log(res)

    return (
        <>
            <h1>UsersDetails <br />
                Users ID: {props.params.id}</h1>

            <h2>Name: {res.name}</h2>
            <p>Email: {res.email}</p>
            <p>Username: {res.username}</p>
            <p>Website: {res.website}</p>
            <p>Phone: {res.phone}</p>
            <h1>{new Date().toLocaleTimeString()}</h1>
            

            <Link href="/">Go to Home</Link>
            <Dates/>


        </>

    )
}

export default UsersDetails