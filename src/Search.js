import React, { useEffect, useState } from 'react';

function Search(props) {

	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const [searched, setSearched] = useState(false);

	const handleChange = (evt) => {
		setQuery(evt.target.value);
		setSearched(false);
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		fetchData();
	}

	const fetchData = () => {
		if (props.tracks) {
			props.spotifyApi.searchTracks(query).then((res) => {
				setResults(res.tracks.items);
				setSearched(true);
			});
		} else {
			props.spotifyApi.searchArtists(query).then((res) => {
				setResults(res.artists.items);
				setSearched(true);
			});
		}
	}

	return (
		<div className="top-artist">
			<p className="entity-number">{props.index + '.'}</p>
			<div className="search">
				<form className="search-form">
					<div className="search-bar-wrapper">
						<input type="text" value={query} placeholder={"Search " + (props.tracks ? "a track" : "an artist")} onChange={handleChange} />

					</div>
					<button onClick={handleSubmit}>
						<img src="./search.png" />
					</button>
				</form>
			</div>
			{
				results.length > 0 ?
					<div className="results">
						{results.map(track => props.tracks ? <SearchTrackResult data={track} setEntityData={props.setData} /> : <SearchArtistResult data={track} setEntityData={props.setData} />)}
					</div>
					:
					(
						searched ?
							<div className="results">
								<p>There were no results for your query.</p>
							</div>
							:
							<></>
					)
			}
		</div>
	);
}

function SearchTrackResult(props) {

	const handleClick = (evt) => {
		props.setEntityData(props.data);
	}

	return (
		<div className="results-item" onClick={handleClick}>
			<img src={props.data.album.images?.[0]?.url ? props.data.album.images[0].url : 'song.png'} />
			<div>
				<h3>{props.data.name}</h3>
				<h4>{props.data.artists.map(artist => artist.name).reduce((acc, cur) => acc + ', ' + cur)}</h4>
			</div>
		</div>
	);
}

function SearchArtistResult(props) {

	const handleClick = (evt) => {
		props.setEntityData(props.data);
	}

	return (
		<div className="results-item" onClick={handleClick}>
			<img src={props.data.images?.[0]?.url ? props.data.images[0].url : 'user.jpeg'} />
			<div>
				<h3>{props.data.name}</h3>
			</div>
		</div>
	);
}

export default Search;