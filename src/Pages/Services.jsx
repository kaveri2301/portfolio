import React from 'react'
import Title from '../Components/Title'
import '../Assets/CSS/Services.css'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaDribbble } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Services() {
    const servisesmain=[
        {
            id:1,
            service: "Lorem Ipsum",
            data:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            imag:<FaDribbble size={25}/>

           
        },
        {
            id:2,
            service: "Sed ut perspiciatis",
            data:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
            imag:<FaFileAlt size={25}/>

           
        },

        {
            id:3,
            service: "Magni Dolores",
            data:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            imag:<FaTachometerAlt size={25}/>

           
        },

        {
            id:4,
            service: "Nemo Enim",
            data:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
            imag:<BiWorld size={25}/>

           
        },


    ]
    useEffect(() => {
      AOS.init(); // Initialize AOS
    }, []);







  return (
    <>
    <section id="services">
    <Container fluid className='backservices mt-5'>
        <Container data-aos="fade-up" data-aos-duration="3000">
          <Row  >
            <Col >
              <Title title="Services" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
             Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas." />
            </Col>
          </Row>

            <Row>
                {
                  servisesmain.map((item)=>{
                    return(
                        <>
                        <Col lg={3} sm={12}>
                        <Card key={item.id} className='d-flex justify-content-center text-center m-2 p-3 cardmain'>
                        <div className='mx-auto d-flex justify-content-center align-items-center cardicon'>
                            {item.imag}
                        </div>
              <Card.Body>
                  <Card.Title> <h2 className='fs-5 service '>{item.service}</h2>
                  </Card.Title>
                   <Card.Text>
                   <p className='lh-base fs-6 data'>
                    {
                        item.data
                    }
                   </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
                        
                        </Col>
                        </>
                    )
                  })  
                }
            </Row>



          </Container>
          </Container>
          </section>
          </>
  )
}
