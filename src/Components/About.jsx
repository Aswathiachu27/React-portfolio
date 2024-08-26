import React from 'react'

function About() {
  return (
    <>
    <div className='p-5 mt-4 row container-fluid'>
        <div className='col-8'> 
            <h1>About Us</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio eveniet maiores sapiente modi voluptate dolores, commodi fugit exercitationem quasi dignissimos animi impedit necessitatibus at eius culpa inventore officiis earum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nostrum ex quas incidunt nemo iure saepe dolorum, tenetur commodi cum, officia dolore magnam tempora amet totam, delectus alias sed. Possimus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente saepe sed optio libero magni tenetur architecto reiciendis cumque quas esse quidem modi enim, ab vitae blanditiis excepturi est quod quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime architecto, consectetur quibusdam ut ea unde, minima fugiat optio, soluta quo repellat? Quis aliquam ut at ad tempora, inventore provident.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ex voluptatibus perspiciatis et quo rerum iste itaque adipisci magnam, esse debitis asperiores magni ipsum voluptates natus harum nam quaerat vel!
            </p>
        
        </div>
        <div className='col-4'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/OqyURAoQ4NQ?si=HCLp05JVVWBS62sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>
    </>
  )
}

export default About