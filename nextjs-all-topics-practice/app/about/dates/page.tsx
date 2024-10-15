import React from 'react'

const Dated = () => {
  return (
    <>
        <div>Date</div>
        <h1>{new Date().toLocaleTimeString()}</h1>
    </>

  )
}

export default Dated