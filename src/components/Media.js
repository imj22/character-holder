import React from 'react'

function Media({media, media:{release_date, director, title, genre, media_type}}) {


  return (
    <div>
        <h3>{title}</h3>
        <p>Release Date: {release_date}</p>
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        <p>Media Type: {media_type}</p>
        <br/>
    </div>
  )
}

export default Media