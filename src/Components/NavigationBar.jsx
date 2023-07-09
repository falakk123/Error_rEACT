import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from 'react-icons/Md'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartCanvas from './CartCanvas';

export default function NavigationBar() {
    return (
        // <div className='container'>
        <>
            {/* <Navbar data-bs-theme="dark" class=" w-80 min-vw-80 navbar navbar-expand-sm data-white bg-dark" > */}
            <Navbar bg="dark" data-bs-theme="dark">
                {/* <Container> */}
                <Link className='navbar-brand' to="/"><MdOutlineProductionQuantityLimits size={60} color='white' /></Link>
                <span bg="dark" data-bs-theme="dark" style={{color: "white"}}>
                    <CartCanvas />
                    </span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link mx-2' to="/">Home</Link>
                        <Link className='nav-link mx-2' to="/categorey">Categorey</Link>
                        <Link className='nav-link mx-2' to="/brands">Brands</Link>
                        {/* <Link className='nav-link mx-2' to="/">Products</Link> */}
                        {/* <ProductCanvas /> */}
                        <Link className='nav-link ms-4' to="/products">Products</Link>
                        <Link className='nav-link ms-4' to="/about">About</Link>
                        <Link className='mx-2 btn btn-dark' to="/login">Login</Link>
                        <Link className='mx-2 btn btn-dark' to="/singup">Singup</Link>

                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
            {/* <hr /> */}
            {/* <div className='row'> */}
            {/*  */}
        {/* </div> */}
        </>
    );
}







