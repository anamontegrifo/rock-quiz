import '../styles/layout/Quiz.scss';
import EndGame from './EndGame';
import Explain from './Explain';
import { Link } from 'react-router-dom';

const Quiz = (props) => {
	return (
		<section className="quiz">
			<h2 className="quiz__category">{props.question.category}</h2>
			<Link to="/">
				<button className="quiz__button">
					<i class="fas fa-times-circle"></i>
				</button>
			</Link>

			<div className="quiz__question">
				<p>{props.question.question}</p>
			</div>
			<ul className="quiz__answers">
				{props.question.answers.map((item, index) => (
					<li
						key={index}
						onClick={() => props.handleClick(item)}
						className={`${props.cursor}
							${props.selectedAnswer === item ? props.selectedStyle : 'quiz__answers--item'}`}
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
			<EndGame
				endGame={props.endGame}
				hitCounter={props.hitCounter}
				faultCounter={props.faultCounter}
			/>
		</section>
	);
};
export default Quiz;
