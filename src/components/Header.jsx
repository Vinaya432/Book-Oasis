import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Header() {

  

  return (
    <div>
        <Navbar className='bg-secondary bg-opacity-25'>
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/' style={{textDecoration:'none'}}>
              <h5 className='d-flex mt-3 fw-bold text-dark' style={{height:'40px',fontStyle:'italic'}}>
                  <i className="fa-solid fa-book-open fa-shake me-2" style={{height:'35px'}}></i>
                The Book Oasis
              </h5>
            </Link>
          </Navbar.Brand>
          <Nav.Link className='btn rounded '>
            <Link to={'/fav'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-heart text-danger me-1" ></i>Favorites</Link>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

