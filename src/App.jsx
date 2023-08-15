import React from 'react'
import { useGlobalContext } from './context/DictionaryGlobalApp'
import { Header, Mainbody } from './components'

const App = () => {
  const{word} = useGlobalContext()
  return (
    <div>
      <Header />
      <Mainbody />
    </div>
  )
}

export default App