import React, {useState} from 'react';

function NewFranchiseForm({addNewFranchise}) {
    // const baseUrl = "http://localhost:9292"
  const [newFranchiseTitle, setNewFranchiseTitle] = useState("")

  const handleFormSubmit = async (e) => {
        e.preventDefault();

      const newFranchise = {
          title: newFranchiseTitle, 
          medias: []
        }
        await fetch("http://localhost:9292/franchises", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json",
            }, 
            body: JSON.stringify(newFranchise)
        })
            .then(r => r.json())
            .then(newFranchiseData => addNewFranchise(newFranchiseData))
    }

    return (
    <div>
        <form onSubmit={e => handleFormSubmit(e)}>
            <label>
                
                <input 
                    type="text" 
                    name="title" 
                    value={newFranchiseTitle} 
                    onChange={e => setNewFranchiseTitle(e.target.value)}
                    placeholder="type new franchise title..."
                ></input>
            </label>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default NewFranchiseForm