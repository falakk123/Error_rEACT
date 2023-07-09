import React from 'react'

import { Link } from 'react-router-dom';


export default function Categorey() {



    const Categories = [
        {
            Item: "Bronzer",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE73t13jWL010XTiK49S95DEcjz2Ongvc7hhSpo08sDz0xRJg&s"
        }
        ,
        {
            Item: "Eyeshadow",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd08-gjmXrKo8cQNOV31rzhFQlv6M88-aZ2_04Bw2ScYNqaynx&s"
        },
        {
            Item: "Foundation",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9vE-b-Yz9YCwFjDBaTOJNYYDUI1QsaANAj6iwJOLLidxSOo&s"
        },
        // {
        //     Item: "Blush",
        //     Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoLEh_xvVULVUDDt3FHRC1PDdytl60Ff-4Vp2GsXhQqtNnhs2&s"
        // },
        {
            Item: "Eyebrow",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdt5HTCFn1szxmVCbpaAWFH2FzLk9wXs9DE02ek9LkC8GJCrff&s"
        },
        {
            Item: "Eyeliner",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgahAYsZv0OsPHL3caycO0GzOFgOtwQRFxsZ4GTLWrqnps-PqH&s"
        }
        , {
            Item: "Lip liner",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2gpDqkOUuwBBVtfJ3Cb_uhC4s0mUFTFADWMjnd-ZniUUUbw&s"
        }
        ,
        {
            Item: "Lipstick",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxpIBYqmqSdmmoQ2t5UiUDTlSdu4xbzKDaBB1qJ6KB66H4M2d&s"
        }
        , {
            Item: "Mascara",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREqPcUs4uuxnGC5RWA2k02WDF4eXnMF2uGz6pAgqHsJki7zRf&s"
        }

        ,
        {
            Item: "Nail polish",
            Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_TOIgbsRt6odooJGr7FHeXxkX8NlRe_GDOiqh43_pJF8O-hn&s"
        }


    ]



    const cards = { width: '100%', height: '30vw' }
    const inlineStyles = {
        card: {
          width: '100%',
        //   marginBottom: '20px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
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
        <div className="container"style={inlineStyles.container}>
            <div className="my-5 text-center">
                <h1 style={inlineStyless.title}>Categories</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
            </div>


            <div className="row">

                {
                    Categories.map((val, key) =>
                        <div className="col-md-6 my-3" key={key}>
                            <Link className='text-decoration-none' to={`/categorey/${val.Item}`}>
                                <div className="card" style={inlineStyles.card}>
                                    <img src={val.Logo} className="card-img-top" style={cards} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            {val.Item}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>








    )

}