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
		} else if (props.faultCounter < props.totalPoints / 1.5) {
			secondMessage = 'Sabes bastante!';
		} else {
			secondMessage = 'Por los pelos!';
		}
	} else if (props.faultCounter === props.totalPoints) {
		message = 'Has perdido';
		if (props.hitCounter < props.totalPoints / 4) {
			secondMessage =
				'¡Qué paliza! Espero que al menos te hayan resultado curiosas estas historias';
		} else if (props.hitCounter < props.totalPoints / 1.5) {
			secondMessage = 'Sí, algunas eran bastante difíciles, lo reconozco!';
		} else {
			secondMessage = '¡Has estado cerca! Estas preguntas tienen nivel! ';
		}
	}

	return (
		<div className={props.endGame}>
			<div className="quiz__explanation--info">
				<h2>{message}</h2>
				<p>{secondMessage}</p>
				<Spotify />
			</div>
		</div>
	);
};
export default EndGame;
