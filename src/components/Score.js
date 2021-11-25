import '../styles/layout/Score.scss';

const Score = () => {
	return (
		<section className="score">
			<ul className="score__list">
				<li className="score__list--item negative"></li>
				<li className="score__list--item negative"></li>
				<li className="score__list--item negative"></li>
				<li className="score__list--item negative"></li>
				<li className="score__list--item negative"></li>
				<li className="score__list--item zero"></li>
				<li className="score__list--item positive"></li>
				<li className="score__list--item positive"></li>
				<li className="score__list--item positive"></li>
				<li className="score__list--item positive"></li>
				<li className="score__list--item positive"></li>
			</ul>
		</section>
	);
};
export default Score;
