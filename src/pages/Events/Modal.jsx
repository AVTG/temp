// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, eventName, description, image, event }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{eventName}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <img src={image} alt="Event" />
          <p>{description}</p>
          <p>Date: {event.date}</p>
          <p>Sports: {event.sportsName}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
