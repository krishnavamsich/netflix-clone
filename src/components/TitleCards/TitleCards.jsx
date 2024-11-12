

import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFiNDc4M2RiNzJkNzQ4YzUzNGYxNjExMzEwZDE3ZiIsIm5iZiI6MTczMTMyODE4NS4xMjc2NTY1LCJzdWIiOiI2NzMxZjcyYzY4OTVmMzgyMmU0NWZjOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lX3Y0JYoXhaNz9ZwhjKIgaH3XjhU35BGBswfr5UZy6s',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    // Fetch the data from the API
    fetch(
      `https://api.themoviedb.org/3/movie/${ category || 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || [])) // Fallback to empty array if results are undefined
      .catch((err) => console.error(err));

    // Add the wheel event listener
    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handleWheel);
    }

    // Cleanup function to remove the event listener on component unmount
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        
          {apiData.map((card, index) => {
            
            return <Link to={`/player/${card.id}`} className="card " key={index}>
                <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title ||'Movie Images'}
              />
              <p>{card.original_title || 'Unknown Title'}</p>
            </Link>
          })
        }
      </div>
    </div>
  );
};

export default TitleCards;
