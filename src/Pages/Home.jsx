import React from 'react'
import '../Assets/CSS/Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import Navbars from '../Components/Navbars'

const Home = () => {
    return (

        

        <>
        <section id="home" > 
            <div class="parallax fs-1 mt-4 fw-bolder text-white text-center d-grid align-content-center  ">
                Hi, I'm Alice!
                <span class=" fs-4  text-white text-center d-grid align-content-center">I am a graphic designer</span>

            </div>
            <Container fluid  >
                <Row className="bg-body-tertiary navig ">
                
                    <Col >
                        <h1 className="px-md-5">Lonely</h1>
                    </Col>

                    <Col  className="justify-content-end">
                        <Navbars />
                    </Col>
                   
                </Row>
            </Container >
</section>
            </>

    )
}

export default Home