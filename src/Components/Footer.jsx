import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='row bg-primary p-5 mt-4 container-fluid'>
        <div className='col-4'>
        
        <h1>Portfolio</h1>
        <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro commodi, perferendis dignissimos eum nemo quam eligendi magni sed impedit quis laboriosam laborum sapiente molestiae praesentium ab officia nam alias? Officia.</p>
       </div>
        <div className='col-4'>

            <h2>
                important info </h2>
                <a href="">Link1</a>
                <a href="">Link2</a>

                <a href="">Link3</a>

        </div>
        <div className='col-4'>
            <h2>Feedback</h2>
            <textarea name="" id="" className='form-control mb-3'></textarea>
            <button className='btn btn-success'>Send</button>
        </div>
        <h4 className='mt-3'>Portfolio 2024 &copy; all right reserved</h4>

    </div>
    </>
  )
}

export default Footer