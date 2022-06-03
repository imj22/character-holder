import React, {useState} from 'react';

function UpdateFranchisesForm({franchises, updateFranchise}) {
    const [franchiseOption, setFranchiseOption] = useState("")
    const [updatedFranchiseTitle, setUpdatedFranchiseTitle] = useState("")

    const franchiseOptions = franchises.map(franchise => {
            return (
                <option key={franchise.title}>{franchise.title}</option>
            )
        }
    )

    // franchises.map(franchise => franchise.title === franchiseOption ? setId(franchise.id) : console.log("no"))

    const handleUpdatedFranchiseSubmit = (e) => {
        e.preventDefault();

         const selectedFranchise = franchises.filter(franchise => franchise.title === franchiseOption)

         const id = selectedFranchise[0].id

        const updatedFranchise = {
            title: updatedFranchiseTitle
        }

        fetch(`http://localhost:9292/franchises/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type" : "application/json",
            }, 
            body: JSON.stringify(updatedFranchise),
        })
            .then(r => r.json())
            .then(updatedFranchise => updateFranchise(updatedFranchise))
    }


  return (
    <div>UpdateFranchisesForm
        <form onSubmit={e => handleUpdatedFranchiseSubmit(e)}>
            <select value={franchiseOption} onChange={e => setFranchiseOption(e.target.value)}>
                <option placeholder="chose franchise to update..."></option>
                {franchiseOptions}
            </select>
            <input type="text" value={updatedFranchiseTitle} onChange={e => setUpdatedFranchiseTitle(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default UpdateFranchisesForm