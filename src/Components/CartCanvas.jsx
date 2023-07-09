import React, { useContext } from 'react'
import { state , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import ItemCards from './ItemCards';
import { CartContext } from '../context/addtoCart/context';


export default function CartCanvas() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {state,dispatch} = useContext(CartContext)
  
  return (
    <>
    <Button variant="dark" onClick={handleShow}>
      Launch <Badge bg="secondary">
        {state.cart.length}
      </Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc. */}
        <div>
        <ItemCards />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}
