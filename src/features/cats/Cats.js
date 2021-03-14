import React, {useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import {fetchCats} from './catsSlice'
import CatList from './CatList'

function Cats() {
  const cats = useSelector(state => state.cats)
  const status = useSelector(state => state.status)
  const dispatch = useDispatch()
  console.log('cats', cats)

  useEffect ( () => {
    dispatch( fetchCats() )
  }, [])

  return (
    <div>
      <h1>CatBook</h1>
      {status === "loading" ? "Loading..." : <CatList cats={cats} /> }
    </div>
  );
}

export default Cats;
