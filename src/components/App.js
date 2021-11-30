import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Score from './Score';
import Start from './Start';
import { useState, useEffect } from 'react';
import data from '../data/questions.json';

function App() {
	const [numeroPreguntas, setNumeroPreguntas] = useState(10);
	const [arrayPreguntas, setArrayPreguntas] = useState(data);
	const [order, setOrder] = useState(0);
	const [question, setQuestion] = useState(arrayPreguntas[order]);

	useEffect(() => {
		arrayPreguntas.sort(() => {
			return Math.random() - 0.5;
		});
		console.log(arrayPreguntas);
	});

	const generarNumeros = () => {
		setQuestion(arrayPreguntas[order]);
		setOrder(order + 1);
		if (order === 9) {
			console.log('ultima pregunta');
		}
	};

	const handleReset = () => {
		setArrayPreguntas(data);
	};

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
			<Routes>
				<Route
					path="/game"
					element={
						<>
							<Quiz
								question={question}
								setQuestion={setQuestion}
								order={order}
								data={arrayPreguntas}
								setData={setArrayPreguntas}
							/>

							<button onClick={generarNumeros}>Prueba</button>
							<button onClick={handleReset}>Reset</button>
							<Score />
						</>
					}
				/>

				<Route path="/" element={<Start />}></Route>
			</Routes>
		</div>
	);
}

export default App;
