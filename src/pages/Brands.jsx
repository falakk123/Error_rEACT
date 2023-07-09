import React from 'react'
import { Link } from 'react-router-dom';

function Brands() {

    let brandsData = [
        {
            brandsName: "almay",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11YDoQyI9bciysDisVUN9DP7tGIkd6jXvy95Ya1YG_aUzGjTd&s"
        },
        {
            brandsName: "china glaze",
            brandsLogo: "https://phyrra.net/wp-content/uploads/2019/01/china-glaze.jpg"
        },
        {
            brandsName: "pacifica",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqcKa3r-NrHDSRrGZbUl7VrYR9aGwxD7s1pZHkhoKskVLgJw&s"
        },
        {
            brandsName: "maybelline",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MgcSZ0kVeDGaoLFcc27P7KlI5ccEm5so0wCI0JCMe3I1dtg&s"
        },
        {
            brandsName: "annabelle",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4Z5ohl7Gne1ECmvSz004Gy0n9lNrnPP0dd4N37knwjE7iao&s"
        },
        {
            brandsName: "misa",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTem4Hr2JbHlz4nl7eRaVGhpz0neHsXzHT3UUGLQ9iuB6TGczs&s"
        },
        {
            brandsName: "stila",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkWXfshOk4661h7MvZTF8WJXbB_vb-UYoDSFqv3wzgWqjXyVr&s"
        },
        {
            brandsName: "suncoat",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaD-1sIU5OQ83-zGENYn-Mqch444bVDNCQz1S7OnnUGKjzigzD&s"
        },
        {
            brandsName: "revlon",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIHhjanCqRxH0pCApjWuwvhwIFrtiWe8iHYR1_4S6yYftmqI&s"
        },
        {
            brandsName: "zorah",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDRs4JoPJPb5qSwld72XyOhG-nECu_OT-i1qmJcurLQN04-6A&s"
        },
        {
            brandsName: "smashbox",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFj2cWbB_dvQEcROg_ULEeuGEP0f_75xgrbl24g7n-k_rhGjk&s"
        },
        {
            brandsName: "wet n wild",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08ypfQ3xEAToreshxFaQpREHPWKgBGg2KlHUOwnOIFZHcgYpC&s"
        },
        {
            brandsName: "covergirl",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyg5AhYdnrbwHBeJtqBBUBteYDzrC088KMAS9uFE-78rhoKY&s"
        }  ,
        {
            brandsName: "sinful colours",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFLvDfqVrPD120dI6mac46VHvkpvXv-EqlVkXqLqLoj09YAsc&s"
        },
        {
            brandsName: "sante",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_scawlRTNYgNkrT7PpkNJBKAPCVRF0WgLY6hMTYAuiktm_Gq&s"
        },
        {
            brandsName: "salon perfect",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPZDZhc6q11ZsrvT7HNKiHromYLcOI2HLLg3XM-HHhs5bP2E&s"
        },
        {
            brandsName: "glossier",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJM8OTlwyfCXDwRQQMSjirL5lqQMj69D8TRQCCbuuZeyKkGIUE&s"
        },
        {
            brandsName: "dalish",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-GnM-LSnssaQv22cCMpB82hw3Dy9j6-ffaduWmotQmVSPL1C&s"
        },
        {
            brandsName: "pacifica",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoN_qI9CmgjorRDAGead2p_qUcmNVofLrOYaRYj1yCyH3c5E&s"
        },
        {
            brandsName: "orly",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTCjlmuqfd24OMrC1stVTQ9oW0F87ut66Cgu7b8DekpU2rFJT&s"
        },
        {
            brandsName: "moov",
            brandsLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGr0t6vibi8qeMnNB2NiVd9_iThAzFV5SzYvn91V1fczKMgM&s"
        },



    ];

const cards = {width: '100%', height: '10vw'}
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


    return (
        <div className="container">  

            <div className="text-center mt-5">
                <h3>Brands</h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis molestiae magnam repellat doloremque odit eveniet. Fugiat eos eligendi error nostrum laudantium hic exercitationem id, porro ut pariatur culpa ipsam.</p>
            </div>

             {/* <div className="row mt-4 mb-3 p-4">  */}
              <div className="row">
            {
                    brandsData.map((val, key) =>
                        <div className="col-md-4 my-3" key={key}>
                            <Link className='text-decoration-none' to={`/brands/${val.brandsName}`}>
                                <div className="card"style={inlineStyles.card}> 
                                    <img src={val.brandsLogo} className="card-img-top" style={cards}/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{val.brandsName}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    
                    )
                }



            <div/>

</div>
        </div>

    )
}

export default Brands;

