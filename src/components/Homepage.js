import React from 'react';

// components
import CharacterList from "./CharacterList";

// nav
import {Link} from "react-router-dom";

function Homepage() {

  const renderCharacter = () => console.log("hi!")
  return (
    <div>Homepage
      <h2>See your saved:</h2>
      <button onClick={e => renderCharacter(e)}>Characters</button>
      <Link to="characters"></Link>
      <button>MediaList</button>
      <button>Franchises</button>
    </div>
  )
}

export default Homepage