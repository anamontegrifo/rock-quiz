import '../styles/layout/Quiz.scss';
import data from '../data/questions.json';
import { useEffect, useState } from 'react';

const Quiz = (props) => {
	const [question, setQuestion] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [selectedStyle, setSelectedStyle] = useState(null);

	const handleClick = (event) => {
		setSelectedAnswer(event);
		console.log(event);
		setSelectedStyle('quiz__answers--item active');
	};

	useEffect(() => {
		setQuestion(data[props.questionOrder]);
	}, [props.questionOrder]);

	return (
		<section className="quiz">
			<div className="quiz__question">{question?.question}</div>
			<ul className="quiz__answers">
				{question?.answers.map((item, index) => (
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
