import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import logonew from '../../assets/logonew.png';
import Sportsbg from '../../assets/Sportsbg.jpg';
import './Modal.css';

const Modal = ({ isOpen, onClose, eventName, description, image, event }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Restore background scrolling
      document.body.style.overflow = 'auto';
    }

    // Clean up when the component is unmounted or when isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`custom-modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="custom-popup" onClick={(e) => e.stopPropagation()} style={{ backgroundImage: `url(${Sportsbg})`, backgroundPosition: 'center' }}>
        <div className="custom-modal-header">
          <NavLink to="/" className="custom-modal-logo">
            <img src={logonew} alt="logo" />
            <div className="custom-modal-logo-text">
              <div>SPORTS BOARD</div>
              <div className="custom-modal-logo-subtext">IIIT BHAGALPUR</div>
            </div>
          </NavLink>
          <button className="custom-modal-close" onClick={onClose}><FaXmark /></button>
        </div>
        <div className="custom-modal-body">
          <h2>{eventName}</h2>
          <div className="custom-modal-content">
            <div className="custom-modal-image-container">
              <img src={image} alt="Event" className="custom-modal-image" />
            </div>
            <div className="custom-modal-description">
              <p>{description}</p>
              <p>Date: {event.date}</p>
              <p>Sports: {event.sportsName}</p>
            </div>
          </div>
          <div className="custom-modal-footer">
            <button onClick={onClose} className="custom-modal-close-button">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
