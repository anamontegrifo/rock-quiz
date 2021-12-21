import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Score from './Score';
import Start from './Start';
import { useState, useEffect } from 'react';
import data from '../data/questions.json';
import correct from '../media/correct.wav';
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
	const [endGame, setEndGame] = useState('hidden');
	const [cursor, setCursor] = useState(null);
	const [totalPoints, setTotalPoints] = useState(5);
	const [exitButton, setExitButton] = useState('quiz__button');

	useEffect(() => {
		data.sort(() => {
			return Math.random() - 0.5;
		});
		setQuestion(data[0]);
	}, []);

	const handleReset = () => {
		setHitCounter(0);
		setFaultCounter(0);
		data.sort(() => {
			return Math.random() - 0.5;
		});
		setQuestion(data[0]);
	};
	const timeDelay = (duration, callback) => {
		setTimeout(() => {
			callback();
		}, duration);
	};

	const handleClick = (item) => {
		setSelectedAnswer(item);
		setCursor('notAllowed');
		setSelectedStyle('quiz__answers--item active');

		timeDelay(1500, () => {
			setSelectedStyle(
				item.correct
					? 'quiz__answers--item correct'
					: 'quiz__answers--item wrong'
			);
		});
		timeDelay(2000, () => {
			if (item.correct) {
				correctAnswerSound();
				setHitCounter(hitCounter + 1);
			} else {
				wrongAnswerSound();
				setFaultCounter(faultCounter + 1);
			}
		});
		timeDelay(5000, () => {
			setCursor(null);
			setVisibleStyle('quiz__explanation');
			setExitButton('hidden');
		});
	};

	const handleNextQuestion = () => {
		setVisibleStyle('hidden');
		setExitButton('quiz__button');
		if (hitCounter === totalPoints || faultCounter === totalPoints) {
			setEndGame('endGame');
		} else {
			setOrder(order + 1);
			setQuestion(data[order + 1]);
		}
	};

	return (
		<div className="app">
			<Routes>
				<Route
					exact
					path="/game"
					element={
						<>
							<Quiz
								handleClick={handleClick}
								timeDelay={timeDelay}
								handleNextQuestion={handleNextQuestion}
								selectedAnswer={selectedAnswer}
								selectedStyle={selectedStyle}
								question={question}
								visibleStyle={visibleStyle}
								endGame={endGame}
								cursor={cursor}
								hitCounter={hitCounter}
								faultCounter={faultCounter}
								exitButton={exitButton}
								totalPoints={totalPoints}
							/>
							<Score
								hitCounter={hitCounter}
								faultCounter={faultCounter}
								totalPoints={totalPoints}
							/>
						</>
					}
				/>

				<Route
					exact
					path="/"
					element={<Start handleReset={handleReset} />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
