import React from 'react';

// css
import "../Homepage.css"

// components
import CharacterList from "./CharacterList";

// nav
import {Link, useNavigate} from "react-router-dom";

function Homepage() {

  let navigate = useNavigate();

  return (
    <div>
      <h1>Welcome!</h1>
      <img alt="a swedish forest" src="https://atl-cms-production-storage.s3.eu-north-1.amazonaws.com/images/origin/8be45c8a_8723_4b4d_8dca_6d9aa065943c_4f5faf3715.jpg"></img>
       <h2>See your saved:</h2>
       <button onClick={e => {navigate("main/characters")}}>Characters</button>
      <button onClick={e => {navigate("main/medias")}}>Medias</button>
      <button onClick={e => {navigate("main/franchises")}}>Franchises</button>
    </div>
  )
}

export default Homepage