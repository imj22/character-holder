import React from 'react'

// components
import Franchise from "./Franchise"

function FranchiseList({franchises, removeFranchise}) {
  
  const franchisesToRender = franchises.map(franchise => (<Franchise franchise={franchise} key={franchise.id} removeFranchise={removeFranchise}/>))
  
  return (
    <div>
      <h2>YOUR SERIES</h2>
      <br/>
      {franchisesToRender}
    </div>
  )
}

export default FranchiseList