import '../styles/layout/Quiz.scss';
import Spotify from './Spotify';

const EndGame = (props) => {
	return (
		<div className={props.endGame}>
			<div className="quiz__explanation--info">
				<h2>Final del juego</h2>
				<p>Aciertos: {props.hitCounter}</p>
				<p>Fallos: {props.faultCounter}</p>
				<Spotify />
			</div>
		</div>
	);
};
export default EndGame;
