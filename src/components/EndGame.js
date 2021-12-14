import '../styles/layout/Quiz.scss';

const EndGame = (props) => {
	return (
		<div className={props.endGame}>
			<div className="quiz__explanation--info">
				<h2>Final del juego</h2>
				<p>Aciertos: {props.hitCounter}</p>
				<p>Fallos: {props.faultCounter}</p>
			</div>
		</div>
	);
};
export default EndGame;
