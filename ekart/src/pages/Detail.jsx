import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSpecificProduct } from '../services/allApis'

function Detail() {
  const [prod,setProd]=useState({})
  const {id}=useParams()
  useEffect(()=>{
    getSpecificProduct(id).then(res=>setProd(res.data))
  },[])
  console.log(prod);
  return (
    <>
      <div className='p-5 container-fluid'>
        <h3>Products Details</h3>
        <Row>
          <col>
            <img src={prod.image} alt="img" className='img-fluid'/>
          </col>
          <col>
            <h3>{prod.title}</h3>
            <h6>${prod.price}</h6>
            <p>{prod.description}</p>
          </col>
        </Row>
      </div>
    </>
  )
}

export default Detail
