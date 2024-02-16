// import React, { useState, useEffect } from 'react';
// import LinearProgress from '@mui/material/LinearProgress';
// import { Container, Row, Col } from 'react-bootstrap';

// const DynamicProgressBar = () => {
//     const skilll = [
//         { id: 1, sub: "HTML", value: 100 },
//         { id: 2, sub: "PHP", value: 90 },
//         { id: 3, sub: "CSS", value: 80 },
//         { id: 4, sub: "WORDPRESS", value: 75 },
//         { id: 5, sub: "JAVASCRIPT", value: 90 },
//         { id: 6, sub: "PHOTOSHOP", value: 85 },
//     ];

//     const [progressValues, setProgressValues] = useState([]);

//     useEffect(() => {
//         // Initialize progressValues with the initial skill values
//         setProgressValues(skilll.map(skill => ({ ...skill, current: 0 })));

//         // Create intervals to update progress values
//         const intervals = skilll.map((skill) => {
//             return setInterval(() => {
//                 setProgressValues((prevValues) =>
//                     prevValues.map((value) =>
//                         value.id === skill.id
//                             ? { ...value, current: Math.min(value.current + 80, value.value) }
//                             : value
//                     )
//                 );
//             }, 1000);
//         });

//         return () => {
//             intervals.forEach((interval) => clearInterval(interval));
//         };
//     }, []);

//     return (
//         <Container>
//             <Row>
//                 {progressValues.map((skill) => (
//                     <Col key={skill.id} xs={3}>
//                         <LinearProgress variant="determinate" value={skill.current} />
//                         <p>{`${skill.current}% ${skill.sub}`}</p>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// export default DynamicProgressBar;
