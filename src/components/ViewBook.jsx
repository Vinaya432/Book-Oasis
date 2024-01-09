import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllBooksAPI } from '../backend/allAPI'


function ViewBook() {

  const data=useParams()
   const [vwBook,setVwBook]= useState({})

  useEffect(()=>{
    displayBook()
  },[])

  const displayBook=async()=>{
    const result = await getAllBooksAPI()
    console.log(result.data.find(item=>item.id==data.id));
    setVwBook( result.data.find(item=>item.id==data.id))
  }
  return (
    <div className='container mt-5'>
        <div className="row mt-5 align-items-center">
            <div className="col-md-4">
                <img className='img-fluid' src={vwBook.url} alt="" />
            </div>
            <div className="col-md-6 mt-2">
                <h5> {vwBook.title}</h5>
                <h6>Author: <span className='text-warning'>{vwBook.author}</span></h6>
                <p style={{textAlign:'justify',color:'white',fontStyle:'italic'}}><span className='fw-bold' style={{fontStyle:'normal'}}>Description: </span><small>{vwBook.description}</small></p>
                <p>Price: <span className='fw-bold text-info'>${vwBook.price}</span></p>
                <Link to={'/home'}><button className='btn btn-primary mt-5'>Back To Home</button></Link>

            </div>
            <div className="col-md-2"></div>

        </div>
    </div>
  )
}

export default ViewBook