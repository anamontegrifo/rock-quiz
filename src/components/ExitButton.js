import '../styles/layout/Quiz.scss';
import { Link } from 'react-router-dom';

const ExitButton = (props) => {
	return (
		<Link to="/">
			<button className={props.exitButtonClass}>
				<i className="ti ti-logout"></i>
			</button>
		</Link>
	);
};
export default ExitButton;
