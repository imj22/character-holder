import '../App.css';

// components
import Homepage from "./Homepage";
import CharacterList from "./CharacterList";
import MediaList from "./MediaList";
import FranchiseList from "./FranchiseList"

// navigation
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>hi!</h1>
       <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/characters" element={<CharacterList />}/>
          <Route path="/medias" element={<MediaList/>}/> 
          <Route path="/franchises" element={<FranchiseList/>}/> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
