import React from 'react';
import '../styles/layout/Start.scss';
import { Link } from 'react-router-dom';
import vinyl from '../media/vinyl.png';

const Start = (props) => {
	return (
		<div className="start">
			<section className="start__main">
				<div>
					<h2 className="start__title slideBottom">
						R<img className="start__vinyl" src={vinyl} alt="vinyl" />
						ck
					</h2>
					<h2 className="start__title slideTop">Quiz</h2>
				</div>
				<p className="start__text">
					El juego definitivo sobre historia y anécdotas desde los orígenes del
					rock!
				</p>
				<Link to="/game">
					<button
						onClick={props.handleReset}
						className="start__button slideTop"
					>
						Start
					</button>
				</Link>
			</section>
		</div>
	);
};

export default Start;
