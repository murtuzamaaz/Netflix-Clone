import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const  Player=()=> {
  const navigate=useNavigate();

  const {id}=useParams();
  const [apiData,setapiData]=useState({name:"",key:"",published_at:"",type:""});

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFjMWFkMzZmOGJiNGM2ZDk1MDM5Y2I5YTVhM2Q1MSIsIm5iZiI6MTc1NDM4MDQzNC4yMDUsInN1YiI6IjY4OTFiODkyYTc3MDExNmFkZGIyMzg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FOIvqltsoENauF_CkaGZjaDi5gzM9eqHf80IYkYkTCc'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));
},[])




  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}  width='90%' height='90%' title='Trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player