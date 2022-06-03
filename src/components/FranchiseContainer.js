import React from 'react'

// components
import FranchiseForm from "./FranchiseForm"; 
import FranchiseList from "./FranchiseList"

function FranchiseContainer({franchises, addNewFranchise, removeFranchise, updateFranchise}) {
  return (
    <div>FranchiseContainer
        <FranchiseList franchises ={franchises} removeFranchise={removeFranchise}/>
        <FranchiseForm franchises ={franchises} addNewFranchise={addNewFranchise} updateFranchise={updateFranchise}/>
    </div>
  )
}

export default FranchiseContainer