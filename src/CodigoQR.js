import React from 'react'
import codigo from './assets/image-qr-code.png'

export const CodigoQR = () => {
  return (
    <>
      <div className='container-codQR'>
        <div className='container-img'>
          <div className='img-cont'>
            <img src={codigo} alt='codigo QR' />
          </div>
          
          <h2>Improve your front-end skills by building project</h2>
          <p>Improve your front-end skills by building projects Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p> 
        
        </div>        
      </div>
    </>
    
  )
}
