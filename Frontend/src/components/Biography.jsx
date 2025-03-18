import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who we are</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem pariatur incidunt quod ut ratione assumenda nostrum veniam sequi quibusdam doloribus corrupti provident facere eaque fugiat perspiciatis fuga, commodi recusandae explicabo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sunt.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores vitae sunt laboriosam magnam minus tempora sint cumque officia, sit vero voluptate aut quam necessitatibus accusamus dicta? Officia excepturi deserunt sint tenetur velit ex vitae totam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}

export default Biography
