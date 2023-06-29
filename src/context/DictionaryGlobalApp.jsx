import React, { createContext, useEffect, useContext, useState } from 'react'

const DictionaryAppContext = createContext()

const DictionaryAppProvider = ({ children }) => {
	const [greetings, setGreetings] = useState('Hello')
	return (
		<DictionaryAppContext.Provider value={{ greetings }}>
			{children}
		</DictionaryAppContext.Provider>
	)
}

const useGlobalContext = () => useContext(DictionaryAppContext)
export { DictionaryAppProvider, useGlobalContext }
