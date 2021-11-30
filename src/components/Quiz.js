import '../styles/layout/Quiz.scss';
import { useEffect, useState } from 'react';

const Quiz = (props) => {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [selectedStyle, setSelectedStyle] = useState(null);

	const handleClick = (event) => {
		setSelectedAnswer(event);
		console.log(event);
		setSelectedStyle('quiz__answers--item active');
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
