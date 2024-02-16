import React from 'react'
import '../Assets/CSS/Portfolio.css'
import Title from '../Components/Title'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import img from '../Assets/Images/portfolio/portfolio-1.jpg'
import img2 from '../Assets/Images/portfolio/portfolio-2.jpg'
import img3 from '../Assets/Images/portfolio/portfolio-3.jpg'
import img4 from '../Assets/Images/portfolio/portfolio-4.jpg'
import img5 from '../Assets/Images/portfolio/portfolio-5.jpg'
import img6 from '../Assets/Images/portfolio/portfolio-6.jpg'
import img7 from '../Assets/Images/portfolio/portfolio-7.jpg'
import img8 from '../Assets/Images/portfolio/portfolio-8.jpg'
import img9 from '../Assets/Images/portfolio/portfolio-9.jpg'
import Testimonials from './Testimonials';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Portfolio() {
    const [filter, setFilter] = useState('*');

    const portfolioItems = [
        { id: 1, image: img, category: 'filter-APP', title: 'App 1' },
        { id: 2, image: img2, category: 'filter-WEB', title: 'App 1' },
        { id: 3, image: img3, category: 'filter-APP', title: 'App 1' },
        { id: 4, image: img4, category: 'filter-CARD', title: 'App 1' },
        { id: 5, image: img5, category: 'filter-WEB', title: 'App 1' },
        { id: 6, image: img6, category: 'filter-APP', title: 'App 1' },
        { id: 7, image: img7, category: 'filter-CARD', title: 'App 1' },
        { id: 8, image: img8, category: 'filter-CARD', title: 'App 1' },
        { id: 9, image: img9, category: 'filter-WEB', title: 'App 1' },


    ];
    const handleFilter = (category) => {
        setFilter(category);
    };
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <>
            <Container fluid className='backportfolio  mt-5'>
                <Container   data-aos="fade-up" data-aos-duration="3000">
                    <Row >
                        <Col className='mx-4'>
                            <Title title="Portfolio" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
             Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas." />
                        </Col>
                    </Row>

                    <Row>
                        <section id="portfolio" className="portfolio section-bg">
                            <Container data-aos="fade-up" data-aos-duration="3000">
                                <Row>
                                    <Col lg={12} className='  '  >
                                        <div className=' d-flex justify-content-center' >
                                            <ul className='portlist  d-flex  justify-content-center list-unstyled' >
                                                <li onClick={() => handleFilter('*')} className='mx-3'>ALL</li>
                                                <li onClick={() => handleFilter('filter-APP')} className='mx-3' >APP</li>
                                                <li onClick={() => handleFilter('filter-CARD')} className='mx-3'>CARD</li>
                                                <li onClick={() => handleFilter('filter-WEB')} className='mx-3' >WEB</li>
                                            </ul>
                                        </div>

                                    </Col>
                                </Row>
                                <Row>
                                    {portfolioItems.map((item) => {
                                        if (filter === '*' || item.category === filter) {
                                            return (
                                                <div key={item.id} className="col-lg-4 col-md-6  portcard">
                                                    <div className='m-3 ' >
                                                        <img src={item.image} className="img-fluid" alt={item.title} />

                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </Row>
                            </Container>
                        </section>
                    </Row>

                </Container>
            </Container>
            <Container fluid>
                
            <Row >
                <Testimonials />
            </Row>

            </Container>
            
           
        </>
    )
}
