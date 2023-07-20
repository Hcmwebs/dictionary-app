import React from 'react'
import { useGlobalContext } from './context/DictionaryGlobalApp'

const App = () => {
  const{word} = useGlobalContext()
  return (
    <div>
      <h1>{word}</h1>
    </div>
  )
}

export default App