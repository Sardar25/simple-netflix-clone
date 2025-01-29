import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
const TitleCard = ( { title, category } ) => {

  

  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;

  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ3MjM3ZjhmM2MwNGEzYzFjZmE3ZGM0MzBjZGRmMiIsIm5iZiI6MTczNjU5MTUwMC4wOTksInN1YiI6IjY3ODI0ODhjNjA1NjU4NmY2YzRlNzJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c1MV3lqSPFz80NGaAEN0pv-3UH2T7mP0OS6ct3BdfPg'
    }
  };
  
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res?.results))
    .catch(err => console.error(err));


     cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className="title-card">
      <h2>{ title || "Popular on Netflix" }</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData?.map((data,index)=>{
            return <Link to={`/player/${data?.id}`} className="card" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500' + data.backdrop_path} alt="" />
              <p>{data.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  );
};

export default TitleCard;
