import '../styles/App.scss';
import Quiz from './Quiz';
import Score from './Score';
import { useState } from 'react';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';

function App() {
	const [questionOrder, setQuestionOrder] = useState(0);

	const counterItems = [
		{ id: 1, point: '-5' },
		{ id: 2, point: '-4' },
		{ id: 3, point: '-3' },
		{ id: 4, point: '-2' },
		{ id: 5, point: '-1' },
		{ id: 6, point: '0' },
		{ id: 7, point: '1' },
		{ id: 8, point: '2' },
		{ id: 9, point: '3' },
		{ id: 10, point: '4' },
		{ id: 11, point: '5' },
	];

	return (
		<div className="app">
			<Quiz setQuestionOrder={setQuestionOrder} questionOrder={questionOrder} />
			<Score />
		</div>
	);
}

export default App;
