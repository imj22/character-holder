import '../App.css';
import React, {useState, useEffect} from "react";

// components
import Homepage from "./Homepage";
import CharacterList from "./CharacterList";
import MediaList from "./MediaList";
import FranchiseList from "./FranchiseList"
import NavBar from "./NavBar"

// navigation
import {Routes, Route} from "react-router-dom"

function App() {
  const [characters, setCharacters] = useState([])
  const [franchises, setFranchises] = useState([])
  const [medias, setMedias] = useState([])
  const baseUrl="http://localhost:9292"


  useEffect(() => {
    fetch(baseUrl + "/characters")
      .then(r => r.json())
      .then(charData => setCharacters(charData))
  }, [])

  useEffect(() => {
    fetch(baseUrl + "/franchises")
      .then(r => r.json())
      .then(franData => setFranchises(franData))
  },[])

  useEffect(() => {
    fetch(baseUrl + "/medias")
      .then(r => r.json())
      .then(mediaData => setMedias(mediaData))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
       <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="characters" element={<CharacterList characters={characters}/>}/>
          <Route path="medias" element={<MediaList medias={medias}/>}/> 
          <Route path="franchises" element={<FranchiseList franchises={franchises}/>}/> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
