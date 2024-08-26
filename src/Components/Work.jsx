import React from 'react'

function Work() {
  return (
    <>
    <h1 className='text-center mt-3'>Our Works</h1>

    <div className='d-flex justify-content-around flex-wrap p-3'>
       <div className='card' style={{width:'18rem'}}>
         <img src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/06/11092310/Graphic-Design-Portfolio-Tips-8.jpg" className='card-img-top' alt="" style={{height:'250px'}}/>
          <div className='card-body'>
             <h5 className='card-title'>Work1</h5>
           </div>
        </div>
        <div className='card' style={{width:'18rem'}}>
         <img src="https://marketplace.canva.com/EAFWxBGkUGA/1/0/1131w/canva-orange-black-gradient-geometric-portfolio-cover-document-QCSIJnDTl1A.jpg" className='card-img-top' alt="" style={{height:'250px'}} />
          <div className='card-body'>
             <h4 className='card-title'>Work2</h4>
           </div>
        </div>
        <div className='card' style={{width:'18rem'}}>
         <img src="https://martinlindelof.com/wp-content/uploads/2023/12/free-portfolio-cover-page-templates-to-use-and-print-canva_0.jpg" className='card-img-top' alt="" style={{height:'250px'}}/>
          <div className='card-body'>
             <h4 className='card-title'>Work3</h4>
           </div>
        </div>
        <div className='card' style={{width:'18rem'}}>
         <img src="https://marketplace.canva.com/EAFWtHLDRec/2/0/1131w/canva-green-colorful-portfolio-cover-document-BCtB5-tLkm4.jpg" className='card-img-top' alt="" style={{height:'250px'}}/>
          <div className='card-body'>
             <h4 className='card-title'>Work4</h4>
           </div>
        </div>
        <div className='card' style={{width:'18rem'}}>
         <img src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/robinson-169hero-portfolio-shutterstock.jpg" className='card-img-top' alt="" style={{height:'250px'}} />
          <div className='card-body'>
             <h4 className='card-title'>Work5</h4>
           </div>
        </div>
     </div>
    </>

  )
}

export default Work