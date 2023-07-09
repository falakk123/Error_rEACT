import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';



export default function BrandPage() {
    const { brandName } = useParams()
    const [brands, setBrands] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`)
            .then(json => {
                setBrands(json.data)
                setLoader(false)
            })
    },[])



    const style = { width: '100%', height: '20vw', objectFit: 'cover' }
    const inlineStyles = {
        card: {
          width: '100%',
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
          padding: '30px',
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
        // <div>BrandPage - {brandName}</div>
        <>{
            loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
            ) :
        <div className='container'>
            <div className="my-5 text-center">
                <h1  style={inlineStyless.title}>{brandName.toUpperCase()}</h1>
                <p className="text secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur autem eos explicabo aliquam, eum unde fugiat quasi quam quos voluptates incidunt natus iure nisi consequatur quisquam doloremque corporis nostrum!</p>
            </div>

            <div className="row">
                {
                    brands.map((val, key) =>
                        <div className="col-md-4 my-4 text-center " key={key}>
                            <Card  style={inlineStyles.card}>
                                <Card.Img variant="top" src={val.image_link} style={style} />
                                <Card.Body>
                                    <Card.Title className='p-4'  style={inlineStyless.container}>
                                    {val.name.length > 15 ? (val.name.substring(0, 15) + "...") : (val.name)}
                                    </Card.Title>
                                    <Card.Title>price - {val.price}</Card.Title>
                                    <Card.Text  style={inlineStyless.content}>  {
                                        val.description.length > 30 ? (val.description.substring(0, 30) + "...") : (val.description)
                                    }</Card.Text>
                                    {/* <Button variant="primary">Go some were</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>





        </div>
}


</>



    )
}
