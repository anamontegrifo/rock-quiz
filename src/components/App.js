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
	const [order, setOrder] = useState(0);
	const [question, setQuestion] = useState(data[0]);
	const [correctAnswerSound] = useSound(correct);
	const [wrongAnswerSound] = useSound(wrong);
	const [hitCounter, setHitCounter] = useState(0);
	const [faultCounter, setFaultCounter] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [selectedStyle, setSelectedStyle] = useState(null);
	const [visibleStyle, setVisibleStyle] = useState('hidden');

	useEffect(() => {
		data.sort(() => {
			return Math.random() - 0.5;
		});
		setQuestion(data[0]);
		console.log(data);
	}, []);

	const handleDelay = (duration, callback) => {
		setTimeout(() => {
			callback();
		}, duration);
	};

	const handleClick = (item) => {
		setSelectedAnswer(item);
		setSelectedStyle('quiz__answers--item active');

		handleDelay(1500, () => {
			setSelectedStyle(
				item.correct
					? 'quiz__answers--item correct'
					: 'quiz__answers--item wrong'
			);
		});
		handleDelay(2000, () => {
			if (item.correct) {
				correctAnswerSound();
				setHitCounter(hitCounter + 1);
			} else {
				wrongAnswerSound();
				setFaultCounter(faultCounter + 1);
			}
		});
		handleDelay(5000, () => {
			setVisibleStyle('quiz__explanation');
		});
	};

	const handleNextQuestion = () => {
		setVisibleStyle('hidden');
		setOrder(order + 1);
		setQuestion(data[order + 1]);
	};

	return (
		<div className="app">
			<Routes>
				<Route
					path="/game"
					element={
						<>
							<Quiz
								handleClick={handleClick}
								handleDelay={handleDelay}
								handleNextQuestion={handleNextQuestion}
								selectedAnswer={selectedAnswer}
								selectedStyle={selectedStyle}
								question={question}
								visibleStyle={visibleStyle}
							/>
							<Score hitCounter={hitCounter} faultCounter={faultCounter} />
						</>
					}
				/>

				<Route path="/" element={<Start />}></Route>
			</Routes>
		</div>
	);
}

export default App;
