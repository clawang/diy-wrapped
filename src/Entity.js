import React, { useEffect, useState } from 'react';
import Search from './Search';

function Entity(props) {

	const [data, setData] = useState({});
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		if (data.name) {
			setSelected(true);
			if (props.tracks) {
				props.dispatch({ type: 'ADD_TRACK', index: props.index - 1, data: data });
			} else {
				props.dispatch({ type: 'ADD_ARTIST', index: props.index - 1, data: data });
			}
		}
	}, [data]);

	const handleClick = (evt) => {
		evt.preventDefault();
		setSelected(false);
		setData({});
	}

	return (
		<div className="entity-wrapper">
			{
				(selected && data) ?
					<div className="top-artist">
						<p className="entity-number">{props.index + '.'}</p>
						<p>
							<span>{data.name + (props.tracks ? " - " + data.artists.map(artist => artist.name).reduce((acc, cur) => acc + ', ' + cur) : '')}</span>
							<a className="change-link" onClick={handleClick}>Change</a>
						</p>
					</div>
					:
					<Search spotifyApi={props.spotifyApi} dispatch={props.dispatch} setData={setData} tracks={props.tracks} index={props.index} />
			}
		</div>
	);
}

export default Entity;