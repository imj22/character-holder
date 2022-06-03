import React from 'react'

function Character({character, character:{name, organization, allies, description}}) {
  const imageObj = character.images[0]
  const quoteObj = character.quotes[0]
  console.log(quoteObj)
  // const quotesToRender = quoteObj
  // const image = character.images.map(image => image)
  // console.log(image)
  return (
    <div>
      <img src={imageObj.image_url} alt={imageObj.alt_text}></img>
      <h3>{name}</h3>
      <p>Association/Organization: {organization}</p>
      <p>Allies: {allies}</p>
      <p>Character Description: {description}</p>
      {/* {quotesToRender} */}
      <p><i>"{quoteObj.quote_content}"</i></p>
      <br/>
    </div>
  )
}

export default Character;