import '../App.css';
import React, {useState, useEffect} from "react";

// components
import Homepage from "./Homepage";
import CharacterContainer from "./CharacterContainer";
import MediaContainer from "./MediaContainer";
import FranchiseContainer from "./FranchiseContainer"
import NavBar from "./NavBar"

// navigation
import {Routes, Route} from "react-router-dom"
import MainContainer from './MainContainer';

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

  const addNewFranchise = (newFranchise) => {
    const updatedFranchises = [...franchises, newFranchise]
    setFranchises(updatedFranchises)
  }

  const removeFranchise = (deletedFranchise) => {
    const updatedFranchises = franchises.filter(franchise => franchise !== deletedFranchise)
    setFranchises(updatedFranchises)
  }

 const updateFranchise = (updatedFranchise) => {
    const updatedFranchises = franchises.map(franchise => franchise.id === updatedFranchise.id ? updatedFranchise : franchise)
    setFranchises(updatedFranchises)
  }




  return (
    <div className="App">
      <header className="App-header">
       <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="main" element={<MainContainer/>}>
              <Route path="characters" element={<CharacterContainer characters={characters}/>}/>
              <Route path="medias" element={<MediaContainer medias={medias}/>}/> 
              <Route path="franchises" element={<FranchiseContainer franchises={franchises} addNewFranchise={addNewFranchise} removeFranchise={removeFranchise} updateFranchise={updateFranchise}/>}/> 
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
