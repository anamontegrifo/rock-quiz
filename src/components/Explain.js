import '../styles/layout/Quiz.scss';

const Explain = (props) => {
	return (
		<div className={props.visibleStyle}>
			<div className="quiz__explanation--info">
				<h2>{props.explanation}</h2>
				<iframe
					title="Spotify"
					className=""
					src={props.media}
					width="230"
					height="80"
					frameBorder="0"
					allowFullScreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				></iframe>
				<button onClick={props.handleNextQuestion}>Otra!</button>
			</div>
		</div>
	);
};
export default Explain;
