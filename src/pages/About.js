import React from 'react'
import AboutImg from '../img/rajasthani.jpg';
import '../Style/About.css';

function About() {
  return (
    <>
      <div className="about">
        <div 
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImg})`}}
        >img</div>
        <div className="aboutBottom">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat molestias ab similique earum alias distinctio! Voluptas aperiam, excepturi quo velit maiores aliquam cupiditate expedita aliquid magnam corporis odio, placeat nostrum. Animi at laboriosam, illum odit fugit quasi, quos voluptate deserunt, sequi quis est! Unde eaque nisi consequuntur aperiam voluptates?</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt unde fugiat dolor molestiae illum soluta laboriosam repellat beatae praesentium eius molestias numquam, tenetur rerum! Possimus, dolorem inventore, necessitatibus deleniti cum consectetur saepe soluta culpa nihil similique, itaque aut. Est voluptatem blanditiis, ex, dignissimos enim impedit quis ipsam deleniti, ad explicabo soluta? Voluptatem, a? Praesentium, voluptatum, maxime pariatur eaque ut dolor exercitationem sed nesciunt amet reiciendis repellendus, alias adipisci consequuntur.
        </div>
      </div>
   
    </>
  )
}

export default About;
