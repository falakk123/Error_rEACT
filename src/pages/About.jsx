import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MdHeight, MdWidthWide } from 'react-icons/Md';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='d-flex justify-content-center mt-5'>About Page</h1>
          <Container className='container my-4 p-4'>
            <Row>
        <Col>
          <Image width={600} height={400} src="https://media.licdn.com/dms/image/D4E03AQHDcP1nKmz2ng/profile-displayphoto-shrink_800_800/0/1684269157152?e=2147483647&v=beta&t=PNDpAET_AlL1onaYvGGjW1_aVGBDGaEzfdTbhGsDIU0" roundedCircle />
          </Col>
          <Col className='p-5 mt-5'>          
          <h1>A Smile is the Best MakeUp Girl Can Wear</h1>
        </Col>
        </Row>
        </Container>
         
        </Col>
      </Row>
      <Row>

        <Col>
    <h1>falak</h1>
        </Col>
        <Col>

        <Image
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/03/Guide_to_cosmetics_branding_jpg_JCDh-DN5.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces"
            alt="About Image"
            style={{ maxWidth: '100%', marginTop: '20px' }}
          />
        </Col>
        {/* <Col>2 of 2</Col> */}
    

      </Row>
    </Container>
  );
};

export default About;
