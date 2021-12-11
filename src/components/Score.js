import '../styles/layout/Score.scss';

const Score = (props) => {
	const totalCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const hitCounterList = totalCounter.map((number, index) => (
		<li
			className={
				props.hitCounter > index
					? 'score__list--item greenActive'
					: 'score__list--item'
			}
			key={index + 1}
		></li>
	));
	const faultCounterList = totalCounter.map((number, index) => (
		<li
			className={
				props.faultCounter > index
					? 'score__list--item redActive'
					: 'score__list--item'
			}
			key={index + 1}
		></li>
	));

	return (
		<section className="score">
			<ul className="score__list">{hitCounterList}</ul>
			<ul className="score__list">{faultCounterList}</ul>
		</section>
	);
};
export default Score;
