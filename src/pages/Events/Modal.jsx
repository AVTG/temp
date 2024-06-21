import React from 'react';
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import logonew from '../../assets/logonew.png';
import Sportsbg from '../../assets/Sportsbg.jpg';
import './Modal.css';

const Modal = ({ isOpen, onClose, eventName, description, image, event }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ backgroundImage: `url(${Sportsbg})` }}>
        <div className="modal-header">
          <NavLink to="/" className="modal-logo">
            <img src={logonew} alt="logo" />
            <div className="modal-logo-text">
              <div>SPORTS BOARD</div>
              <div className="modal-logo-subtext">IIIT BHAGALPUR</div>
            </div>
          </NavLink>
          <button className="modal-close" onClick={onClose}><FaXmark /></button>
        </div>
        <div className="modal-body">
          <h2>{eventName}</h2>
          <div className="modal-content">
            <div className="modal-image-container">
              <img src={image} alt="Event" className="modal-image" />
            </div>
            <div className="modal-description">
              <p>{description}</p>
              <p>Date: {event.date}</p>
              <p>Sports: {event.sportsName}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={onClose} className="modal-close-button">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
