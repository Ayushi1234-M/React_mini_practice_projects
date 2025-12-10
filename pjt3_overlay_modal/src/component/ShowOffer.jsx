import React, { useState } from "react";
import "./OfferCSS.css";
import Modal from "./Modal";

function ShowOffer() {
  const [isShow, setIsShow] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  function handleOpenModal() {
    setIsShow(true);
  }

  function handleCloseModal() {
    setIsShow(false);
  }

  function handleOfferAccepted() {
    setIsShow(false);
    setOfferAccepted(true);
  }

  return (
    <div
      className={
        !isShow && !offerAccepted
          ? "offerStartComp"
          : "offerOpenedComp"
      }
    >
      {!isShow && !offerAccepted && (
        <div className="showOfferBtnDiv">
          <button className="showOfferBtn" onClick={handleOpenModal}>
            Show Offer
          </button>
        </div>
      )}

      {isShow && (
        <Modal
          handleCloseModal={handleCloseModal}
          handleOfferAccepted={handleOfferAccepted}
        ></Modal>
      )}

      {!isShow && offerAccepted && (
        <div className="acceptedOffer">
          You have accepted the offer! Congratulations.
        </div>
      )}
    </div>
  );
}

export default ShowOffer;
