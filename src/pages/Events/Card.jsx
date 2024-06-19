import React, { useState } from 'react';
import './Card.css'; // Assuming you save your CSS here
import Modal from './Modal'; // Import the Modal component

const Card = ({ eventName, description, image, event }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-[350px] card-bg m-4 p-4 rounded-[10px] overflow-hidden bg-[#e8e8e8]">
      <div
        className="card hover:transform-card transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: '#e8e8e8',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          transition: 'box-shadow 1.2s, transform 0.3s ease-in-out',
          animation: 'none',
        }}
      >
        <div>
          <figure className="relative overflow-hidden rounded-lg cursor-pointer">
            <img
              src={image}
              alt="Event"
              className="w-full h-auto transition-transform duration-400 hover:transform-image"
            />
            <figcaption className="absolute inset-0 flex items-end p-4 text-3xl font-bold bg-black bg-opacity-70 text-white transition-all duration-400">
              <div>{eventName}</div>
            </figcaption>
          </figure>
          <div>
            <h2 className="mb-4 text-3xl font-bold text-black-700">{eventName}</h2>
            <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal]">
              {isReadMore ? description : `${description.substring(0, 200)}....`}
              <span
                style={{
                  color: '#12b8c8',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                }}
                onClick={toggleReadMore}
              >
                {isReadMore ? 'show less' : 'read more'}
              </span>
            </p>
          </div>
          <button
            onClick={openModal}
            className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black-900 transition-all duration-300 ease-in-out transform hover:scale-105 items-center"
          >
            View Details
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventName={eventName}
        description={description}
        image={image}
        event={event}
      />
    </div>
  );
};

export default Card;
