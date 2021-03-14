// write your CatList component here

import React from 'react'



function CatList({cats}) {
  
  const catComponents = cats.map( cat => {
    return (
      <img src={cat.url} alt={cat.id} key={cat.id} />
    )
  })

  return (
    <>
      {catComponents}
    </>
  )
}

export default CatList
