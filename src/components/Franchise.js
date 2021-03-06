import React from 'react'

function Franchise({franchise, franchise: {id, title}, removeFranchise}) {
  // const renderMediaTitle = franchise.medias.length === 0 ? `You have not saved media from ${franchise.title}` : franchise.medias[0].title
  // debugger;

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
      {/* <p><i>{renderMediaTitle}</i></p> */}
      <button onClick={e => handleDeleteClick(e)}>X</button>
      <br />
    </div>
  )
}

export default Franchise