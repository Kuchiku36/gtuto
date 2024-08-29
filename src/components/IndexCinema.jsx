import React, { useState } from 'react'
import Movie from './Movie';

const initMovies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 },
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
  ];

const IndexCinema = () => {
    const [movie, setMovie] = useState(initMovies)    
  return (
    <div>
        IndexCinema
    {movie.map(item=> <Movie key={item.id} item={item}/> )}
    </div>
  )
}

export default IndexCinema