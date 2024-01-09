import React from 'react'
import {  Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function LandingPage() {
  return (
    <>
    <Header/>
      <div className='container mt-3'>
           <div className="row align-items-center">
              <div className="col-md-5">
                  <h1 className=' fw-bolder' style={{fontFamily:'serif'}}
                 >The Book Oasis</h1>
                 <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ratione omnis ex, natus repudiandae necessitatibus quibusdam nulla harum ullam fugit molestias corrupti, eaque recusandae deserunt amet veniam. Nisi, exercitationem officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corporis quas explicabo quae nisi numquam impedit illo! Unde officiis officia molestias tenetur illo! Eum voluptatibus alias blanditiis cumque, ipsam inventore.</p>
              </div>
              
              <div className="col-md-7">
              <img className='img-fluid rounded shadow'  src="https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg" alt="book logog" /> 
              </div>
      </div>
      
      <Card bg='light'  className='mt-5  quoteCard' >
        <Card.Body>
          <blockquote className="blockquote mb-0">
          <i style={{height:'50px'}} className="fa-solid fa-quote-left fs-2"></i>
            <p className='text-center' style={{fontStyle:'italic'}}>
              {' '}
              A story can always break into pieces while it sits inside a book on a shelf; and, decades after we have read it even twenty times, it can open us up, by cut or caress, to a new truth.{' '}
            </p>
            <footer className="blockquote-footer text-center">
            Andre Dubus , <cite title="Source Title">Meditations from a Movable Chair</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
  
      <div className='d-flex justify-content-center'>
        <Link to={'/home'} className='mt-5 px-5 border rounded text-decoration-none' >View All Books </Link>
      </div>
          
          
      </div>
    </>
  )
}

export default LandingPage