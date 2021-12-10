import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Score from './Score';
import Start from './Start';
import { useState, useEffect } from 'react';
import data from '../data/questions.json';
import correct from '../media/correct.mp3';
import wrong from '../media/wrong.mp3';
import useSound from 'use-sound';

function App() {
	// const [numeroPreguntas, setNumeroPreguntas] = useState(10);
	const [questionArray, setQuestionArray] = useState(data);
	const [order, setOrder] = useState(0);
	const [question, setQuestion] = useState(questionArray[0]);
	const [correctAnswer] = useSound(correct);
	const [wrongAnswer] = useSound(wrong);
	const [hitCounter, setHitCounter] = useState(0);
	const [faultCounter, setFaultCounter] = useState(0);

	useEffect(() => {
		questionArray.sort(() => {
			return Math.random() - 0.5;
		});
		setQuestion(questionArray[0]);
		console.log(hitCounter);
	}, []);

	const nextQuestion = () => {
		setOrder(order + 1);
		setQuestion(questionArray[order + 1]);
		if (order === 9) {
			console.log('ultima pregunta');
		}
	};

	const handleReset = () => {
		setQuestionArray(data);
	};

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
								data={questionArray}
								setData={setQuestionArray}
								correctAnswer={correctAnswer}
								wrongAnswer={wrongAnswer}
								hitCounter={hitCounter}
								setHitCounter={setHitCounter}
								faultCounter={faultCounter}
								setFaultCounter={setFaultCounter}
							/>

							<button onClick={nextQuestion}>Prueba</button>
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
