import React, { useState, useEffect } from 'react';
import './Latestnews.css';
import latestdata from './latestnews.json';
import { BiShare } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

function Latestnews() {
  const [places, setPlaces] = useState(latestdata);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaces((prevPlaces) => {
        return prevPlaces.map((place, index) => {
          const nextImageIndex = (place.currentImageIndex + 1) % place.image.length;
          const nextImageDelay = (index * 2 + 1) * 2000; // Delay in milliseconds
          setTimeout(() => {
            setPlaces((prevPlaces) => {
              const updatedPlaces = [...prevPlaces];
              updatedPlaces[index].currentImageIndex = nextImageIndex;
              return updatedPlaces;
            });
          }, nextImageDelay);
          return place;
        });
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  function Readtime(){
    return `5 minute Read`
  }

  return (
    <div className='main'>
      <div className="pallet">
        {places.map((place, index) => (
          <div key={index} className={index === 0 ? 'bigp' : 'smallp'}>


{place.image.map((image, imageIndex) => (
      <img
        key={imageIndex}
        className={`imgb ${place.currentImageIndex === imageIndex ? 'active' : ''}`}
        src={`images/${image}`}
        alt=""
      />
    ))}


            <div className='abso'>
              <div className="abso-text">
              <h2 className='absoh2'>{place.title}</h2>
              <p className='abso-p'>{place.description}</p>

              </div>
             
              <div className="abso-foot">
                <span className="foot-span">
                  <AiOutlineHeart className='heart' size={20} />
                  <BiShare size={20} />
                </span>
                <p className='foot-p'>{Readtime()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latestnews;
