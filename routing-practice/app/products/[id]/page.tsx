"use client"

import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const singleProduct = () => {

  const [singleData, setSingleData] = useState<any>();

  const { id } = useParams()
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
      .then(res => {
        console.log(res.data);
        setSingleData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(singleData);
  return (
    <>
      {singleData ? 
       ( <div key={singleData.id}>
          <h1>Title: <b>{singleData.title}</b></h1>
          <p>Description: <b>{singleData.description}</b></p>
        </div>) : (<h1>Loading...</h1>)
        }
      

    </>
  )
}

export default singleProduct