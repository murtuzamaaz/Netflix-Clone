import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'


const TitleCards=({title,category})=> {
  const [apiData,setapiData]=useState([]);
  const cardsRef=useRef();

    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: ''
    }
  };

useEffect(()=>{
  
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setapiData(res.results))
      .catch(err => console.error(err));

      const handleWheel=(event)=>{
      event.preventDefault();

      cardsRef.current.scrollLeft+=event.deltaY;
}
  cardsRef.current.addEventListener('wheel',handleWheel);},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https:\\image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.orignal_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards