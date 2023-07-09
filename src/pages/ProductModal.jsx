import React, { useReducer, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import HomeReview from './HomeReview';
import { Button } from 'react-bootstrap';
// import ProductPage from './ProductPage';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


function ProductModal({ productData }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // const [counter,setCounter]= useState(0)

const initialData ={
  counter : 0
}

const myCallback=(state,action)=>{
switch (action.type) {
  case "INCREMENT_COUNTER":
    return{...state, counter : state.counter++}
    case "DECREMENT_COUNTER":
      return{...state, counter : state.counter--}
  default:
    return state;
}

}

const [state,dispatch] = useReducer(myCallback,initialData)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const style = { width: '100%', height: '30vw', objectFit: 'cover' }
  console.log(productData)

  return (

    <>
      {values.map((v, idx) => (
        <Button variant="secondary" key={idx} className=" me-2 mb-2" onClick={() => handleShow(v)}>
          More Details
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Img variant="top" src=''/> */}
          <Modal.Title>{productData?.name} - {productData?.price} {productData?.price_sign}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={productData.api_featured_image} className='img-fluid' alt="" srcset="" />
              </div>
              <div className="col-md-6">

                <div className="container py-5">

                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{productData?.name} - {productData?.price}</h3>
                    <h4><span className="badge bg-dark">{productData.brand}</span></h4>
                  </div>

                  <div>{productData.description}</div>

                  <div className="my-5">
                    <h5 className='my-2'>Available Colors : </h5>

                    <div className='row my-3 gap-2'>
                      {productData?.product_colors?.map((color, index) => (
                        <div className='col-1' title={color.colour_name}
                          key={index}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: color.hex_value,
                          }}
                        />

                      ))}
                    </div>
                  </div>

                  <div className="d-grid gap-4">
                    <div className="d-flex justify-content-around align-items-center">
                      <button className="btn btn-dark" onClick={()=> dispatch(
                        {
                     type : "INCREMENT_COUNTER"
                      }
                      )
                      }>+</button>
                      {state.counter}
                      <button className="btn btn-dark"onClick={()=> dispatch(
                        {
                    type : "DECREMENT_COUNTER"
                      }
                      )
                      }>-</button>
                    </div>
                    <button className="btn btn-dark" type="button">Add to Cart</button>
                  </div>


                </div>


              </div>
            </div>

            <div className="my-3">
              <div className="container">
                <h1 className="text-center mb-5">Reviews Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ut facilis necessitatibus exercitationem magni autem, ipsam accusamus sit illum inventore optio quae! Laboriosam id labore excepturi non! Ab, mollitia sit.</p>
              </div>
              <div>
                <HomeReview />
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;