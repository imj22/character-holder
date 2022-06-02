import React from 'react'

function Franchise({franchise, franchise: {title}}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{franchise.medias[0].title}</p>
      <br />
    </div>
  )
}

export default Franchise