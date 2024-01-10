import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Table } from 'react-bootstrap'
import { getBookFromFavouriteAPI ,removeFavouriteAPI} from '../backend/allAPI'
import { Link } from 'react-router-dom'


function Favourates() {

  const [favBooks,setFavBooks] = useState([])

  useEffect(()=>{
    getFav()
  },[])
  const getFav= async()=>{
    const result = await getBookFromFavouriteAPI()
    if(result.status==200){
      setFavBooks(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }

  const removeFavItem= async(id)=>{
    await removeFavouriteAPI(id)
    getFav()
  }
  
  return (
    <>
     <Header/>
     <div className='container'>
       <h3 className='mt-5 mb-5'>My Favourite Books</h3>
       
       <Table striped  hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Image</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
           {favBooks?.length>0?favBooks?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item?.title}</td>
              <td>{item?.author}</td>
              <td><img style={{width:'50px'}} src={item?.url} alt="" /></td>
              <td><button onClick={()=>removeFavItem(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger" ></i></button></td>
            </tr>
           )) :<p className='fw-bold text-warning fs-4'>Favourites is Empty</p>
           }
         </tbody>
      </Table>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link to={'/home'}><button className='btn btn-warning fs-5'><i className='fa-solid fa-arrow-left fw-bold me-3 fs-5'></i>Back To Home</button></Link>
      </div>
     </div>
    </>
  )
}

export default Favourates