import React, { createContext, useEffect, useContext, useState } from 'react'
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const DictionaryAppContext = createContext()

const DictionaryAppProvider = ({ children }) => {
	const [word, setWord] = useState('binary')
	const tempUrl = `url/${word}`
	console.log(tempUrl)
	return (
		<DictionaryAppContext.Provider value={{ word }}>
			{children}
		</DictionaryAppContext.Provider>
	)
}

const useGlobalContext = () => useContext(DictionaryAppContext)
export { DictionaryAppProvider, useGlobalContext }
