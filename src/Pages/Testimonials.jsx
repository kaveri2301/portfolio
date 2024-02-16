import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Assets/CSS/Testimonials.css'
import Title from '../Components/Title'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import img from '../Assets/Images/testimonials/testimonials-1.jpg'
import img2 from '../Assets/Images/testimonials/testimonials-2.jpg'
import img3 from '../Assets/Images/testimonials/testimonials-3.jpg'
import img4 from '../Assets/Images/testimonials/testimonials-4.jpg'
import img5 from '../Assets/Images/testimonials/testimonials-5.jpg'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Testimonials() {

  const Testimonialitem = [
    {
      id: 1,
      icon1: <ImQuotesLeft size={25} color='pink' />,
      data: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      icon2: <ImQuotesRight size={25} color='pink' />,
      image: img,
      imgdata: "Saul Goodman",
      imgdata1: "Ceo Founder"
    },
    {
      id: 2,
      icon1: <ImQuotesLeft size={25} color='pink' />,
      data: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      icon2: <ImQuotesRight size={25} color='pink' />,
      image: img2,
      imgdata: "Sara Willson",
      imgdata1: "Designer"
    },
    {
      id: 3,
      icon1: <ImQuotesLeft size={25} color='pink' />,
      data: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      icon2: <ImQuotesRight size={25} color='pink' />,
      image: img3,
      imgdata: "Jena Karlis",
      imgdata1: "Store Owner"
    },
    {
      id: 4,
      icon1: <ImQuotesLeft size={25} color='pink' />,
      data: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      icon2: <ImQuotesRight size={25} color='pink' />,
      image: img4,
      imgdata: "Matt Bradon",
      imgdata1: "Freelancer"

    },
    {
      id: 5,
      icon1: <ImQuotesLeft size={25} color='pink' />,
      data: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      icon2: <ImQuotesRight size={25} color='pink' />,
      image: img5,
      imgdata: "John Larson",
      imgdata1: "Entrepreneur"
    },
  ]

  // let slides

  // Testimonialitem.length < 3 ? slides = Testimonialitem.length : slides = 3

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <section id="testimonial">

        <Container fluid className='backtest mt-5'>
          <Container data-aos="fade-up" data-aos-duration="3000">
            <Row >
              <Col className='mx-4'>
                <Title title="Testimonial" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
             Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas." />
              </Col>

            </Row>

            <Row>

              <Slider {...settings} >
                {
                  Testimonialitem.map((a) => {

                    return (
                      <Col lg={4} sm={12} className='' >
                        <div data-aos="fade-up" data-aos-duration="3000">
                          <Card style={{ width: '25rem' }} className='mt-5' >
                            <Card.Body>
                              {/* <h1 style={{color:'pink'}}> {a.icon1} </h1> */}
                              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                              <Card.Text>

                                {a.icon1} {a.data}
                                <h1 style={{ color: 'pink' }}>{a.icon2}</h1>
                              </Card.Text>

                            </Card.Body>
                          </Card>
                          <div className='backimg' style={{ transform: 'translate(20px,-20px)' }} >
                            <img src={a.image} className=' imgtrans d-flex  align-items-center img-fluid p-2 rounded-circle' /></div>
                          <div style={{ transform: 'translate(20px,-20px)' }}>
                            <h4>{a.imgdata}</h4>
                            <h6>{a.imgdata1}</h6>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </Slider>


            </Row>







          </Container>
        </Container>
      </section>
    </>
  );

}

