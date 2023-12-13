import React from 'react';
import { useGlobalContext } from './context/DictionaryGlobalApp';
import { Header, Mainbody } from './components';

const App = () => {
	const { word } = useGlobalContext();
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>We are on with Tailwind </h1>
			<button class='btn btn-primary'>Button</button>
			<Header />
			<Mainbody />
		</div>
	);
};

export default App;
