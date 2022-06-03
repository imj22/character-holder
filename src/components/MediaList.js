import React from 'react'

// components
import Media from "./Media"

function MediaList({medias}) {
  
  const mediasToRender = medias.map(media => (<Media media={media} key={media.id} />))
  
  return (
    <div>
      <h2>YOUR FAVORITE MEDIA</h2>
      <br/>
      {mediasToRender}
    </div>
  )
}

export default MediaList;