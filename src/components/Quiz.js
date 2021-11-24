import '../styles/layout/Quiz.scss';
import data from '../data/questions.json';

const Quiz = () => {
	return (
		<section className="quiz">
			<div className="quiz__question">
				<p>¿Cuántos años tiene Wes Anderson</p>
			</div>
			<ul className="quiz__answers">
				<li className="quiz__answers--item correct">52</li>
				<li className="quiz__answers--item wrong">23</li>
				<li className="quiz__answers--item">42</li>
				<li className="quiz__answers--item">70</li>
			</ul>
		</section>
	);
};
export default Quiz;
