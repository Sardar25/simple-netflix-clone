import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ3MjM3ZjhmM2MwNGEzYzFjZmE3ZGM0MzBjZGRmMiIsIm5iZiI6MTczNjU5MTUwMC4wOTksInN1YiI6IjY3ODI0ODhjNjA1NjU4NmY2YzRlNzJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c1MV3lqSPFz80NGaAEN0pv-3UH2T7mP0OS6ct3BdfPg'
    }
  };

  useEffect(()=>{
    
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res?.results[0]))
  .catch(err => console.error(err));

  },[])

  
  return (
    <div className='player'>

      <img onClick={()=> navigate(-1) } src={back_arrow_icon} alt="" />

      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${ apiData.key }`}
      title='trailer' allowFullScreen frameBorder='0'
       ></iframe>

       <div className="player-info">
        <p>{ apiData.published_at.slice(0,10) }</p>
        <p>{ apiData.name }</p>
        <p>{ apiData.type }</p>
       </div>

    </div>
  )
}

export default Player