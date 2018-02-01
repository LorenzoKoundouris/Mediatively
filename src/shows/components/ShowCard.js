import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowCard = (props) => {
	const {
		title,
		firstAirDate,
		posterPath,
		voteAverage,
		id,
	} = props;

	return (

		<div className="showcard">
			<Link to={`/show/${id}`}>
				<div className="showcard-img">
					<img src={posterPath} alt={title} />
				</div>
				<h3>{title}</h3>
				<p>{firstAirDate.slice(0, 4)}</p>
				<p>{voteAverage}</p>
			</Link>
		</div>
	);
};

ShowCard.propTypes = {
	title: PropTypes.string.isRequired,
	firstAirDate: PropTypes.string.isRequired,
	posterPath: PropTypes.string.isRequired,
	voteAverage: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
};

export default ShowCard;
