import React, { useState, useEffect } from 'react';
import Card from './Card';
import { SportsData } from './SportsData';
import Spinner from './Spinner';
import './Spinner.css';
import './styles.css';
import { Navbar } from '../../common/Navbar';
import Footer from '../../common/Footer';

const Events = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#e8e8e8] overflow-hidden">
      <Navbar />
      <div className="flex flex-col flex-grow items-center justify-center w-full overflow-hidden">
        <div>
          <h2 className="border-t-8 border-[#0f0f0f] rounded-full text-8xl my-16 px-2 py-1 text-center items-center flex flex-col overflow-hidden">Events</h2>
        </div>
        <div className="flex items-center justify-center flex-wrap overflow-hidden">
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-wrap items-center justify-center mx-auto  overflow-hidden">
              {SportsData.map(event => (
                <Card
                  key={event.id}
                  eventName={event.eventName}
                  description={event.description}
                  image={event.image}
                  event={event} // Pass the entire event object to the card
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
