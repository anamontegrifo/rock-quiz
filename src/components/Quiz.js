import '../styles/layout/Quiz.scss';
import { useState } from 'react';
import Explain from './Explain';

const Quiz = (props) => {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [selectedStyle, setSelectedStyle] = useState(null);

	const timeDelay = (duration, callback) => {
		setTimeout(() => {
			callback();
		}, duration);
	};

	const handleClick = (item) => {
		setSelectedAnswer(item);
		setSelectedStyle('quiz__answers--item active');

		timeDelay(1500, () => {
			setSelectedStyle(
				item.correct
					? 'quiz__answers--item correct'
					: 'quiz__answers--item wrong'
			);
		});
		timeDelay(1000, () => {
			if (item.correct) {
				props.correctAnswer();
				props.setHitCounter(props.hitCounter + 1);
			} else {
				props.wrongAnswer();
				props.setFaultCounter(props.faultCounter + 1);
			}
		});
	};

	return (
		<section className="quiz">
			<div className="quiz__question">
				<h2>{props.question.category}</h2>
				<p>{props.question.question}</p>
			</div>
			<ul className="quiz__answers">
				{props.question.answers.map((item, index) => (
					<li
						key={index}
						onClick={() => handleClick(item)}
						className={
							selectedAnswer === item ? selectedStyle : 'quiz__answers--item'
						}
					>
						{item.text}
					</li>
				))}
			</ul>
			<Explain
				explanation={props.question.explanation}
				media={props.question.media}
			/>
		</section>
	);
};
export default Quiz;
