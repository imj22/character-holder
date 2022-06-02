import React from 'react'

// components
import Character from "./Character"

// nav
import {Outlet} from "react-router-dom";

function CharacterList({characters}) {
  
  const charactersToDisplay = characters.map(character => (<Character character={character} key={character.id}/>))

  return (
    <div>
      {/* <Outlet /> */}
      <h2>YOUR FAVORITE CHARACTERS!</h2>
      <br/>
      {charactersToDisplay}
    </div>
  )
}

export default CharacterList