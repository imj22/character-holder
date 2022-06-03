import React from 'react'

// components
import NewFranchiseForm from "./NewFranchiseForm"; 
import FranchiseList from "./FranchiseList"

function FranchiseContainer({franchises}) {
  return (
    <div>FranchiseContainer
        <FranchiseList franchises ={franchises}/>
        <NewFranchiseForm franchises ={franchises}/>
    </div>
  )
}

export default FranchiseContainer