
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ProductModal from './ProductModal';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Components/Loader';


export default function Products() {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
            .then(json => {

                setProducts(json.data)
                setLoader(false)
            })

    }, []);

    const style = { width: '100%', height: '20vw', objectFit: 'cover' }
    const inlineStyles = {
        card: {
            width: '18rem',
            marginBottom: '20px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
        cardImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
        },
        cardBody: {
            padding: '10px',
        },
        cardTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        cardText: {
            fontSize: '16px',
        },
    };

    const inlineStyless = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            cursel: 'ponter',
        },
        title: {
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        content: {
            fontSize: '16px',
            lineHeight: '1.5',
        },
    };

    return (
        <> {
            loader ? (

                // <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}> <Spinner animation="border" role="status">
                //     <span className="visually-hidden">Loading...</span>
                // </Spinner></div>

                <Loader />
            ) : (
                <div className="container">
                    <div className="my-5 text-center">
                        <h1 style={inlineStyless.title}>Products</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim neque velit aperiam laudantium iure dolorum similique distinctio aspernatur necessitatibus et ipsam vero hic est quibusdam, vitae facere ipsum voluptatibus!</p>
                    </div>

                    <div className="row">
                        {
                            products.map((val, key) =>
                                <div className="col-md-4 my-4 text-center " key={key}>

                                    <Card style={inlineStyles.card}>
                                        <Card.Img variant="top" src={val.image_link} style={style} />
                                        <Card.Body>
                                            <Card.Title style={inlineStyless.container}> {val.name.length > 30 ? (val.name.substring(0, 30) + "...") : (val.name)}</Card.Title>
                                            <Card.Text className='text-secondary' style={inlineStyless.content}>
                                                {
                                                    val?.description?.length > 40 ? (val?.description?.substring(0, 40) + "...") : (val?.description)
                                                }
                                            </Card.Text>
                                            <ProductModal productData={val} />
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>

                </div>
            )
        }
        </>
    )
}

