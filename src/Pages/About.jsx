
import { Col, Container, Row } from 'react-bootstrap'
import '../Assets/CSS/About.css'
import img from "../Assets/Images/me.jpg"
import Title from '../Components/Title'
import { FaRegSmile } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import LinearProgress from '@mui/material/LinearProgress';

export default function About() {
    const Counters = [
        {
            id: 1,
            icon: <FaRegSmile />,
            title: "Happy Client",
            info: "  consequuntur voluptas nostrum aliquid ipsam architecto ut.",
            start: 0,
            end: 65

        },
        {
            id: 1,
            icon: <GoProjectRoadmap />,
            title: "Projects",
            info: "  consequuntur voluptas nostrum aliquid ipsam architecto ut.",
            start: 0,
            end: 85

        }, {
            id: 1,
            icon: <MdOutlineWatchLater />,
            title: "Years of experience",
            info: "  consequuntur voluptas nostrum aliquid ipsam architecto ut.",
            start: 0,
            end: 12

        }, {
            id: 1,
            icon: < FaAward />,
            title: "Awards",
            info: "  consequuntur voluptas nostrum aliquid ipsam architecto ut.",
            start: 0,
            end: 15

        }
    ]

    // const skilll = [
    //     {
    //         id: 1,
    //         sub: "HTML",
    //         value: 100
    //     },
    //     {
    //         id: 1,
    //         sub: "PHP",
    //         value: 90
    //     },
        
    //     {
    //         id: 1,
    //         sub: "CSS",
    //         value: 80
    //     },
    //     {
    //         id: 1,
    //         sub: "WORDPRESS",
    //         value: 75
    //     },
    //     {
    //         id: 1,
    //         sub: "JAVASCRIPT",
    //         value: 90
    //     },
    //     {
    //         id: 1,
    //         sub: "PHOTOSHOP",
    //         value: 85
    //     },
       
    // ]

    const skilll = [
        { id: 1, sub: "HTML", value: 100 },
        { id: 2, sub: "PHP", value: 90 },
        { id: 3, sub: "CSS", value: 80 },
        { id: 4, sub: "WORDPRESS", value: 75 },
        { id: 5, sub: "JAVASCRIPT", value: 90 },
        { id: 6, sub: "PHOTOSHOP", value: 85 },
    ];

    const [progressValues, setProgressValues] = useState([]);

    useEffect(() => {
        // Initialize progressValues with the initial skill values
        setProgressValues(skilll.map(skill => ({ ...skill, current: 0 })));

        // Create intervals to update progress values
        const intervals = skilll.map((skill) => {
            return setInterval(() => {
                setProgressValues((prevValues) =>
                    prevValues.map((value) =>
                        value.id === skill.id
                            ? { ...value, current: Math.min(value.current + 50, value.value) }
                            : value
                    )
                );
            }, 1000);
        });
        return () => {
            intervals.forEach((interval) => clearInterval(interval));
        };
    }, []);


    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

      
    return (
    
        <div >
            <section id="about" >
            <Container  data-aos="fade-up" data-aos-duration="3000"  >
                <Row className='mt-5'>
                    <Col lg={5} sm={12}  className=' paraimg' >
                        <img src={img} className=' img-fluid' />
                    </Col>
                    <Col lg={7} sm={12} className='mt-5'>
                        <h1>Voluptatem dignissimos provident quasi</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>


    <Col>
        <Row>
            {

            Counters.map((a, i) => {
                return (
                    <>
                        <Col lg={6} sm={12} className=' d-flex   '>
                            <div className='col-3'>
                                <h1 style={{ color: "pink" }}>{a.icon}</h1>
                            </div>
                            <div className='col-9'>
                                <h1> <CountUp
                                    start={a.start}
                                    end={a.end}
                                    duration={3.75}
                                > ok</CountUp></h1>
                           
                            <p>{a.title}<span className='fw-lighter'>{a.info}</span></p>
                            {/* <p className='fw-lighter'>{a.info}</p> */}
                            </div>
                        </Col>
                    </>
                )
            })
            }
        </Row>

    </Col>

                    </Col>
                </Row>
            </Container >

            <Container fluid className='backabou'  >
                
             <Container data-aos="fade-up" data-aos-duration="3000">
                <Row >
                    <Col  className=' mx-5'>
                <Title  title="Skills" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
             Et nemo qui impedit suscipit alias ea. 
                Quia fugiat sit in iste officiis commodi quidem hic quas." />
                </Col>
                
                </Row>
                <Row>
                    {/* {
                        skilll.map((a)=>{
                            return(
                                <>
                                <Col lg={6} sm={12} className='p-4'>
                    <div className='d-flex justify-content-between skillbox '>
                                        <div>{a.sub}</div> <div>{a.value}</div>  </div>
                                <div>
                                    <ProgressBar className='progresbar' variant='dark' now={a.value}  /></div>
                    
                    
                    </Col>
                
              
                                
                                </>
                            )
                        })
                    } */}

{progressValues.map((skill) => (
    <>
                    <Col lg={6} sm={12}  key={skill.id} xs={3} >
                        
                        <div  className='d-flex justify-content-between skillbox ' >
                        <div>{skill.current}%</div> <div>{skill.sub}</div>  </div>
                        {/* <p>{`${skill.current}% ${skill.sub}`}</p> */}
                        
                        <div>

                        </div>
                        <LinearProgress variant="determinate" value={skill.current} color='warning'/>
                        
                        {/* <p>{`${skill.current}% ${skill.sub}`}</p> */}
                    </Col>
                    </>
                ))}


                    </Row>
                    </Container>
            </Container>
            </section>
            </div>
        
       
    )
}


