import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../Components/Title'
import '../Assets/CSS/Contact.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaRegCopyright } from "react-icons/fa";
// import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import img from '../Assets/Images/portfolio/portfolio-1.jpg'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    const Contact=[
        {
            id:1,
            icon:<FaTwitter size={25} />
        },
        {
            id:2,
            icon:<FaFacebookSquare size={25}  />
        },
        {
            id:3,
            icon:<FaInstagram size={25}/>
        },
        {
            id:4, 
            icon:<FaLinkedin size={25} />
        }

    ]

    const Contactlist=[
        {
            id:1,
            icon:<CiLocationOn color='#d43076'  />,
            data:"A108 Adam Street New York, NY 535022"
                   
        },
        {
            id:2,
            icon:<MdForwardToInbox color='#d43076' />,
            data:"info@example.com"
        },
        {
            id:3,
            icon:<CiMobile2 color='#d43076' />,
            data: "+1 5589 55488 55s"
        }
    ]

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    


    return (
        <>
        <section id="contact">

            <Container fluid className='backcontact mt-5'>
                <Container  data-aos="fade-up" data-aos-duration="3000">
                    <Row >
                        <Col className='mx-4'>
                            <Title title="Contact" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
             Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas." />
                        </Col>

                    </Row>
                    <Container>
                    <Row>
                        
                        <Col lg={4} sm={12} >
                            <h1 style={{ color: "#d43076" }}>LONELY</h1>
                            <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                            <Row>
                                {
                                    Contact.map((a)=>{
                                        return(
                                            <>
                                            <Col lg={2} sm={12}>
                                            <div className= ''>
                                                <h1 className='contacticon  d-flex justify-content-center align-items-center'>{a.icon}</h1>
                                            </div>
                                            </Col>

                                            
                                            </>
                                        )
                                    })
                                }

                            </Row>
                        </Col>
                        <Col lg={2} sm={12}>
                        <Row>
                                {
                                    Contactlist.map((a)=>{
                                        return(
                                            <>
                                           
                                            {/* <div className= 'd-flex   '> */}
                                            <Col lg={2}>
                                                <h1 className=' '>{a.icon}</h1></Col>
                                                 <Col lg={10}>
                                                <p className='m-3 '>{a.data}</p></Col>
                                            {/* </div> */}
                                            
                                            </>
                                        )
                                    })
                                }

                            </Row>
                        </Col>
                        <Col lg={6} sm={12}>
                        <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your Email" />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message\" rows="3"></textarea>
  </div>
  
  <Button className='sendbtn mt-3 m-5 mx-auto d-flex justify-content-center ' type="submit">Send Message</Button>
      
      </Form>
                        


                        
                        
                        </Col>

                    </Row>



                    </Container>
                </Container>
            </Container>
             <Row>
                <Col lg={12} className='mt-5  ' >

             <div className='d-flex justify-content-center mx-auto'>
              <h5> <FaRegCopyright/> </h5>
              <p>Copyright <b>Lonely</b>. All Rights Reserved</p> </div>

              <p className='d-flex justify-content-center mx-auto' >Designed by <span style={{color:"#d43076"}}>BootstrapMade</span></p>
              </Col>
             </Row>

             </section>
{/* 
             <MDBContainer className="mt-5">
             <MDBRow>
          <MDBCol md="4">
            <MDBView hover>
              <img
                src={img}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
             </MDBCol>
        </MDBRow>
      </MDBContainer> */}

{/* <div className='bg-image hover-overlay'>
      <img src={img} className='w-100' />
      <div
        className='mask'
        style={{
          background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)',
        }}
      ></div>
    </div> */}


    

        </>
    );


    
}
