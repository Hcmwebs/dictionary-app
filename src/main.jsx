import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './styles/GlobalStyles.jsx'
import { DictionaryAppProvider } from './context/DictionaryGlobalApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DictionaryAppProvider>
			<GlobalStyles />
			<App />
		</DictionaryAppProvider>
	</React.StrictMode>
)
