import React from 'react'
import '../Assets/CSS/Resume.css'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Components/Title'
import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Resume() {

  
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
    <section id="resume">
      <Container fluid className='backresume  mt-5' >
        <Container  data-aos="fade-up" data-aos-duration="3000">
          <Row >
            <Col className='mx-4 '>
              <Title title="Resume" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
             Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas." />
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col lg={6} sm={12}>
              <h2 style={{ color: "#4b7dab" }}>Sumary</h2>
              <div style={{ height: "20px", width: "20px", border: "#d43076 solid 3px" }} className=' rounded-circle  '></div>
              <div style={{ height: "auto", borderLeft: "#d43076 solid 3px" }} className='ms-2'>
                <div className='ps-3' style={{ transform: 'translate(0px,-20px)' }}>
                  <h3 >Alice Barkley</h3>
                  <p >Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                  <ul>
                    <li> ortland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
              </div>
              <h2 style={{ color: "#4b7dab" }}>Education</h2>
              <div style={{ height: "20px", width: "20px", border: "#d43076 solid 3px" }} className=' rounded-circle  '></div>
              <div style={{ height: "auto", borderLeft: "#d43076 solid 3px" }} className='ms-2'>
                <div className='ps-3' style={{ transform: 'translate(0px,-20px)' }}>
                  <h3 >Master of Fine Arts & Graphic Design</h3>
                  <Badge bg="secondary fs-5 fw-lighter">2015-2016</Badge>
                  <p>Rochester Institute of Technology, Rochester, NY</p>
                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              
                
                 </div>
                 </div>
                 <div className='' style={{ transform: 'translate(0px,-20px)' }}>
                 <div style={{ height: "20px", width: "20px", border: "#d43076 solid 3px" }} className=' rounded-circle  '></div>
                 <div style={{ height: "auto", borderLeft: "#d43076 solid 3px" }} className='ms-2'>
                <div className='ps-3' style={{ transform: 'translate(0px,-20px)' }}>
                  <h3 >Master of Fine Arts & Graphic Design</h3>
                  <Badge bg="secondary fs-5 fw-lighter">2015-2016</Badge>
                  <p>Rochester Institute of Technology, Rochester, NY</p>
                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              
                
                 </div>
                 </div>
                 </div>
              
            </Col >
            <Col lg={6} sm={12} >
              <h2 style={{ color: "#4b7dab" }}>Professional Experience</h2>
              <div style={{ height: "20px", width: "20px", border: "#d43076 solid 3px" }} className=' rounded-circle  '></div>
              <div style={{ height: "auto", borderLeft: "#d43076 solid 3px" }} className='ms-2'>
                <div className='ps-3' style={{ transform: 'translate(0px,-20px)' }}>
                  <h3 >Senior graphic design specialist</h3>
                  <Badge bg="secondary fs-5 fw-lighter">2019-present</Badge>
                  <p> Experion, New York, NY</p>
                  <ul>
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
                 </div>
                 </div>
                 <div className='' style={{ transform: 'translate(0px,-20px)' }}>
                 <div style={{ height: "20px", width: "20px", border: "#d43076 solid 3px" }} className=' rounded-circle  '></div>
              <div style={{ height: "auto", borderLeft: "#d43076 solid 3px" }} className='ms-2'>
                <div className='ps-3' style={{ transform: 'translate(0px,-20px)' }}>
                  <h3 >Graphic design specialist</h3>
                  <Badge bg="secondary fs-5 fw-lighter">2017-2018</Badge>
                  <p> Stepping Stone Advertising, New York, NY</p>
                  <ul>
                    <li> Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                 </div>
                 </div>
                 </div>

                



            </Col>
          </Row>

        </Container>
      </Container>
      </section>
    </>
  )
}
