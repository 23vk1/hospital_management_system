import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className='banner'>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet adipisci omnis numquam sed, officia accusantium suscipit! Ipsa excepturi assumenda, nobis neque quam numquam doloribus laboriosam eius architecto sed quis consequatur est, inventore iure reprehenderit perspiciatis dolorum, dolores aliquam nam aperiam eos mollitia! Porro autem magni dolore doloribus, quibusdam voluptatum?</p>
            </div>
            <div className='banner'>
                <img src={imageUrl} alt="hero" className='animated-image' />
                <span>
                    <img src="./Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    )
}

export default Hero
