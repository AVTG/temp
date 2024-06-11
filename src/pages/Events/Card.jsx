import React, { useState } from 'react';
import './Card.css'; // Assuming you save your CSS here

const Card = ({ eventName, description, image, event }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const openPopup = () => {
    const popupContent = `
      <html>
        <head>
          <title>${eventName}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
            body {
              font-family: 'Inter', sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .container {
              max-width: 450px;
              margin: 0 auto;
              background-color: #e8e8e8;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #333;
              margin-bottom: 10px;
            }
            p {
              color: #666;
              margin-bottom: 10px;
            }
            img {
              max-width: 100%;
              height: auto;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            button {
              margin-top: 20px;
              padding: 10px 20px;
              background-color: #000;
              color: #fff;
              font-weight: 600;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease-in-out;
            }
            button:hover {
              background-color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${eventName}</h2>
            <p>${description}</p>
            <img src="${image}" alt="Event" />
            <p>Date: ${event.date}</p>
            <p>Sports: ${event.sportsName}</p>
            <button onclick="window.close()">Close</button>
          </div>
        </body>
      </html>
    `;

    const popupWindow = window.open('', '');
    popupWindow.document.open();
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-[350px] card-bg m-4 p-4 rounded-[10px] overflow-hidden bg-[#e8e8e8]">
      <div
        className="card hover:transform-card transition-all duration-300 ease-in-out" // Updated hover effect
        style={{
          backgroundColor: '#e8e8e8',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          transition: 'box-shadow 1.2s, transform 0.3s ease-in-out', // Added transform transition
          animation: 'none', // Initial animation set to none
        }}
      >
        <div>
          <figure className="relative overflow-hidden rounded-lg cursor-pointer">
            <img
              src={image}
              alt="Event"
              className="w-full h-auto transition-transform duration-400 hover:transform-image" // Added zoom effect on hover
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
            onClick={openPopup}
            className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black-900 transition-all duration-300 ease-in-out transform hover:scale-105 items-center"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
