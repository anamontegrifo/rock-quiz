import React from 'react';
import '../styles/layout/Start.scss';
import { Link } from 'react-router-dom';
import vinyl from '../images/vinyl.png';

const Start = () => {
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
					inventore consectetur id officiis, porro beatae eos obcaecati.
					Accusantium deserunt aliquam quia eum illum, magni minus eius nam
					molestiae voluptatem assumenda rem numquam molestias deleniti aut enim
					sed, aspernatur recusandae impedit.
				</p>
				<Link to="/game">
					<button className="start__button slideTop">Start</button>
				</Link>
			</section>
		</div>
	);
};

export default Start;
