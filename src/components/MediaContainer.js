import React from 'react'

// components
import MediaList from "./MediaList"; 

function MediaContainer({medias}) {
  return (
    <div>
      <MediaList medias={medias}/>
    </div>
  )
}

export default MediaContainer