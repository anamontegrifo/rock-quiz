import '../styles/layout/Quiz.scss';
import Spotify from './Spotify';

const EndGame = (props) => {
	console.log(props.totalPoints / 2);
	let message;
	let secondMessage;
	if (props.hitCounter === props.totalPoints) {
		message = 'Has ganado';
		if (props.faultCounter < props.totalPoints / 4) {
			secondMessage =
				'Eres un verdadero experto, se nota que sabes de lo que hablas.';
		} else if (props.faultCounter < props.totalPoints / 2) {
			secondMessage = 'Sabes bastante!';
		} else {
			secondMessage = 'Por los pelos!';
		}
	} else if (props.faultCounter === props.totalPoints) {
		message = 'Has perdido';
		if (props.hitCounter < props.totalPoints / 4) {
			secondMessage = 'No tienes ni idea';
		} else if (props.hitCounter < props.totalPoints / 2) {
			secondMessage = 'Sabes bastante!';
		} else {
			secondMessage = 'Por los pelos!';
		}
	}

	return (
		<div className={props.endGame}>
			<div className="quiz__explanation--info">
				<h2>{message}</h2>
				<p>
					{secondMessage} Has tenido {props.hitCounter} aciertos y{' '}
					{props.faultCounter} fallos
				</p>
				<Spotify />
			</div>
		</div>
	);
};
export default EndGame;
