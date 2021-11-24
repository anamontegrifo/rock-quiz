import '../styles/layout/Score.scss';

const Score = () => {
	const counterItems = [
		{ id: 1, point: '-5' },
		{ id: 2, point: '-4' },
		{ id: 3, point: '-3' },
		{ id: 4, point: '-2' },
		{ id: 5, point: '-1' },
		{ id: 6, point: '0' },
		{ id: 7, point: '1' },
		{ id: 8, point: '2' },
		{ id: 9, point: '3' },
		{ id: 10, point: '4' },
		{ id: 11, point: '5' },
	];

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
