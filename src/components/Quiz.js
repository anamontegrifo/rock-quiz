import '../styles/layout/Quiz.scss';
import Explain from './Explain';

const Quiz = (props) => {
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
						onClick={() => props.handleClick(item)}
						className={
							props.selectedAnswer === item
								? props.selectedStyle
								: 'quiz__answers--item'
						}
					>
						{item.text}
					</li>
				))}
			</ul>
			<Explain
				explanation={props.question.explanation}
				media={props.question.media}
				handleNextQuestion={props.handleNextQuestion}
				visibleStyle={props.visibleStyle}
			/>
		</section>
	);
};
export default Quiz;
