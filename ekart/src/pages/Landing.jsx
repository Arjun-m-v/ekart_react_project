import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/allApis'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        console.log("landing");
        getProducts().then((res)=>setProducts(res.data))
    },[])

    console.log(products);
    return (
        <>
        <div className='container-fluid'>
            <h1 className='text-primary'>Ekart</h1>
            <div className='row'>
            {
                products.length>0 ? 
                products.map(item=>(
                    <Card style={{ width: '18rem' }} className='shadow m-3'>
                    <Card.Img variant="top" src={item.image} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        {item.price}
                        </Card.Text>
                        <Link className='btn btn-primary' to={`/det/${item.id}`}>Show deatils</Link>
                    </Card.Body>
                    </Card>
                )) : <h3>No products Available</h3>
            }
            </div>
        </div>
        </>
      )
}

export default Landing
