import React from 'react'
import '../Assets/CSS/Title.css'
const Title = (props) => {
    return (
        <div>

            <h2 className='title fw-bolder mt-5'>{props.title}</h2>
            <hr style={{ border: "2px solid red", width: "60px" }} />
            <p className=' dec'>{props.desc}</p>
        </div>
    )
}

export default Title

 