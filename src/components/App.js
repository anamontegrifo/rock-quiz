import '../styles/App.scss';
import Quiz from './Quiz';
import Score from './Score';
// import { useEffect, useState } from 'react';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Quiz />
			<Score />
		</div>
	);
}

export default App;
