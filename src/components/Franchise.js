import React from 'react'

function Franchise({franchise, franchise: {id, title}, removeFranchise}) {
  // const renderMediaTitle = franchise.medias[0].title === undefined? (<p>You have not saved media from {franchise}.</p>) : (<p>{franchise.medias[0].title}</p>)

  const handleDeleteClick = (e) => {
    fetch(`http://localhost:9292/franchises/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(deletedFranchise => removeFranchise(franchise))
  }


  return (
    <div>
      <h3>{title}</h3>
      {/* {renderMediaTitle} */}
      <button onClick={e => handleDeleteClick(e)}>X</button>
      <br />
    </div>
  )
}

export default Franchise