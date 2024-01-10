import React, { useEffect , useState } from 'react'
import {Card,Row,Col, Button,OverlayTrigger ,Tooltip} from 'react-bootstrap' 
import { addBookToFavouriteAPI, getAllBooksAPI, removeABookAPI } from '../backend/allAPI'
import {Link} from 'react-router-dom'



function View({uploadBookRes}) {

  const [allBooks,setAllBooks] = useState([])
  const [deleteResponse,setDeleteResponse]=useState(false) 


  useEffect(()=>{
    getAllUploadedBooks()
    setDeleteResponse(false)
  },[uploadBookRes,deleteResponse])

  const getAllUploadedBooks=async ()=>{
    const result = await getAllBooksAPI()
    if(result.status===200){
      setAllBooks(result.data)
    }else{
      console.log("API Failed");
      setAllBooks([])
    }
  }

  const removeBook=async (id)=>{
    await removeABookAPI(id)
    setDeleteResponse(true)
  }

  return (
    <div className='container'>
        <Row >
         { allBooks?.length>0?allBooks.map(book=>(
            <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
            <Card style={{ width: '18rem' }}>
               <Link to={`/viewBook/${book.id}`}><Card.Img variant="top" src={book.url} style={{height:'300px'}} />
               
               </Link>
               <Card.Body>
                 <Card.Title>{book.title.slice(0,15)}...</Card.Title>
                 <Card.Text>
                 </Card.Text>
                 <div className='d-flex justify-content-between'>
                 <OverlayTrigger  overlay={
                     <Tooltip  style={{overflow:'hidden'}}  id="tooltip" >
                       <small>Add To favourites</small>
                    </Tooltip>}>
                       <Button onClick={()=>addBookToFavouriteAPI({title:book.title,author:book.author,url:book.url})} className='btn btn-light' ><i class="fa-solid fa-heart"></i></Button>
                 </OverlayTrigger>  
                 <OverlayTrigger  overlay={
                     <Tooltip  style={{overflow:'hidden'}}  id="tooltip" >
                      <small> Delete</small>
                    </Tooltip>}>
                    <Button onClick={()=>removeBook(book?.id)} className='btn btn-light'><i class="fa-solid fa-trash"></i></Button>
                 </OverlayTrigger>                  
                 </div>
               </Card.Body>
               
            </Card>
            
            </Col>
         )) : <p className='fs-3 text-warning fw-bold'>No Books Are Uploaded!!!</p>
        }
       </Row>
       
    </div>
  )
}

export default View