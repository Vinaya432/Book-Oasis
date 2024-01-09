import React, { useState } from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap';
import {uploadNewBookAPI} from '../backend/allAPI'



function AddBook({setUploadRes}) {

  const [uploadBook,setUploadBook] = useState({
    title:"",author:"",url:"",description:"",price:""
  })
   

  console.log(uploadBook);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
    const {title,author,url,description,price} = uploadBook;
    if(!title||!author||!url||!description||!price){
      alert("Please fill the Completely")
    }else{
      const result = await uploadNewBookAPI(uploadBook)
      console.log(result);

      if(result.status>=200 && result.status<300){
        //sucess
        handleClose() //to close the modal

        //reset uploadbook state
        setUploadBook({
          title:"",author:"",url:"",description:"",price:""
        })

        setUploadRes(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  return (
    <div>
     <Button className='mb-5 mt-5 ms-5'  onClick={handleShow}>
        Add New Book <i class="fa-sharp fa-solid fa-plus fa-shake"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the Details!!!</p>

            <FloatingLabel controlId="bookTitle" label="Book Title" className="mb-3">
                <Form.Control type="text" placeholder="Alchemist" onChange={e=>setUploadBook({...uploadBook,title: e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel controlId="bookAuthor" label="Author" className='mb-3'>
                <Form.Control type="text" placeholder="John" onChange={e=>setUploadBook({...uploadBook,author: e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel controlId="BookImg" label="Uploading Book Image URL" className="mb-3">
                <Form.Control type="text" placeholder="Upload Book Image URL" onChange={e=>setUploadBook({...uploadBook,url: e.target.value})}/>
            </FloatingLabel>

            <FloatingLabel controlId="description" label="Description" className='mb-3'>
                <Form.Control as="textarea" placeholder="something about book" onChange={e=>setUploadBook({...uploadBook,description: e.target.value})} />
            </FloatingLabel>
            <FloatingLabel controlId="price" label="Price" >
                <Form.Control type="text" placeholder="100" onChange={e=>setUploadBook({...uploadBook,price: e.target.value})}/>
            </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddBook