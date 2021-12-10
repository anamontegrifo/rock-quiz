import '../styles/layout/Quiz.scss';
import { useEffect, useState } from 'react';

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
	};

	return (
		<section className="quiz">
			<div className="quiz__question">{props.question.question}</div>
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
		</section>
	);
};
export default Quiz;
