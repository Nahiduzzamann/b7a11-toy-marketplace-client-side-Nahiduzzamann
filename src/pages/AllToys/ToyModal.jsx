import React from 'react';

const ToyModal = ({ isOpen, closeModal, modalDetails }) => {
    // console.log(modalDetails);
  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h2 className="modal-title">Toy Details</h2>
        <button className="modal-close" onClick={closeModal}>
          <span>&times;</span>
        </button>
        <div className="modal-body">
          <img src={modalDetails.PictureURL} alt="Toy Image" className="w-full mb-4" />
          <p className="font-bold">Toy Name:</p>
          <p className="mb-2">{modalDetails.ToyName}</p>
          <p className="font-bold">Seller Name:</p>
          <p className="mb-2">{modalDetails.SellerName}</p>
          <p className="font-bold">Seller Email:</p>
          <p className="mb-2">{modalDetails.SellerEmail}</p>
          <p className="font-bold">Sub-category:</p>
          <p className="mb-2">{modalDetails.SubCategory}</p>
          <p className="font-bold">Price:</p>
          <p className="mb-2">{modalDetails.Price}</p>
          <p className="font-bold">Rating:</p>
          <p className="mb-2">{modalDetails.Rating}</p>
          <p className="font-bold">Available Quantity:</p>
          <p className="mb-2">{modalDetails.AvailableQuantity}</p>
          <p className="font-bold">Detail Description:</p>
          <p>{modalDetails.Description}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyModal;
