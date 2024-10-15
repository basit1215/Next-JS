import React from 'react'

const Dates = () => {
  return (
    <>
        <div>Date</div>
        <h1>{new Date().toLocaleTimeString()}</h1>
    </>

  )
}

export default Dates