import React from 'react'

// components
import NewCharacterForm from "./NewCharacterForm"; 
import CharacterList from "./CharacterList"

function CharacterContainer({characters}) {
  return (
    <div>
        <CharacterList characters ={characters}/> 
        <NewCharacterForm characters={characters}/> 
    </div>
  )
}

export default CharacterContainer