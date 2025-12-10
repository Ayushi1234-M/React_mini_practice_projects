import React from 'react'
import './OfferCSS.css'

function Modal({handleCloseModal, handleOfferAccepted}) {
  return (
    <div>

        <div className='modalComp'>

            <div className='closeButtonDiv' onClick={handleCloseModal}><button className='closeBtn'>❌</button></div>

            <h2>xxxxyyyyyy is your offer.</h2>

            <h3>Click below to accept the offer.</h3>

            <button className='acceptOfferBtn' onClick={handleOfferAccepted}>Offer Accepted!!</button>

        </div>
      
    </div>
  )
}

export default Modal
