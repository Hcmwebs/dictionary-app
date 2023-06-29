import React from 'react'
import { useGlobalContext } from './context/DictionaryGlobalApp'

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const App = () => {
  const{greetings} = useGlobalContext()
  return (
    <div>
      <h1>{greetings}</h1>
    </div>
  )
}

export default App