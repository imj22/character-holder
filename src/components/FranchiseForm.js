import React, {useState} from 'react'

// components
import NewFranchiseForm from "./NewFranchiseForm"; 
import UpdateFranchisesForm from "./UpdateFranchisesForm";

function FranchiseForm({franchises, addFranchise, updateFranchise}) {
  const [isNewRendered, setIsNewRendered] = useState(false)
  const [isUpdateRendered, setIsUpdateRendered] = useState(false)

  const handleNewFormClick = () => {
    setIsNewRendered(current => !current);
  }

  const handleUpdateFormClick = () => {
    setIsUpdateRendered(current => !current)
  }

  return (
    <div>
      <h3>ALTER FRANCHISES?</h3>
      <button value="update" onClick={e => handleUpdateFormClick(e)}>update franchises</button>
      <button value="new" onClick={e => handleNewFormClick(e)}>create new franchise</button>
      {isNewRendered && (
        <NewFranchiseForm addFranchise={addFranchise}/>
      )}
      {isUpdateRendered && (
        <UpdateFranchisesForm franchises={franchises} updateFranchise={updateFranchise}/>
      )}
    </div>
  )
}

export default FranchiseForm