import '../styles/layout/Score.scss';

const Score = (props) => {
	let hitList = [];
	for (let i = 0; i < props.totalPoints; i++) {
		hitList.push(
			<li
				className={
					i < props.hitCounter
						? 'score__list--item greenActive'
						: 'score__list--item'
				}
				key={i + 1}
			></li>
		);
	}

	let faultList = [];
	for (let i = 0; i < props.totalPoints; i++) {
		faultList.push(
			<li
				className={
					i < props.faultCounter
						? 'score__list--item redActive'
						: 'score__list--item'
				}
				key={i + 1}
			></li>
		);
	}
	return (
		<section className="score">
			<ul className="score__list--hit">{hitList}</ul>
			<ul className="score__list--fault">{faultList}</ul>
		</section>
	);
};
export default Score;
