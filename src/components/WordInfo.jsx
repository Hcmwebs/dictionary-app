import React from 'react'

const WordInfo = () => {
	return (
		<>
			<header>
				<div className='mainWord'>
					<h1>Keyboard</h1>
					<small>/'ki:bo:d/</small>
				</div>
				<button type='button'>Audio icon</button>
			</header>
			<div className='separator'>
				<span>noun</span>
				<hr />
			</div>
			<main>
				<small>meaning</small>
				<ul>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Dignissimos vel, velit eum delectus ullam repellat optio porro saepe
						officia quod!
					</li>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Dignissimos vel, velit eum delectus ullam repellat optio porro saepe
						officia quod!
					</li>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Dignissimos vel, velit eum delectus ullam repellat optio porro saepe
						officia quod!
					</li>
				</ul>
				<div className='synos'>
					<small>Synonyms</small>
					<p>electronic keyboard</p>
				</div>
				<div className='separator'>
					<span>verb</span>
					<hr />
				</div>
				<div className='meaning'>
					<small>meaning</small>
					<ul className='meaning'>
						<li>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
							optio!
						</li>
					</ul>
					<p>electronic keyboard</p>
				</div>
				<div className='separator'>
					<span>verb</span>
					<hr />
				</div>
			</main>
			<hr />
			<footer>
				<span>Source:</span>
				<a href='http://' target='_blank' rel='noopener noreferrer'>
					source link here
				</a>
			</footer>
		</>
	)
}

export default WordInfo
