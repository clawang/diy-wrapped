import React, { useEffect, useState, useReducer } from 'react';
import './App.scss';
import SpotifyWebApi from 'spotify-web-api-js';
import CanvasGraphic from './CanvasGraphic';
import Entity from './Entity';

const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const initialState = {
  tracks: Array(5).fill({ name: "" }),
  artists: Array(5).fill({ name: "" }),
  genre: '',
  time: 0,
  credit: false,
};

const testState = {
  artists: [
    {
      name: "Flume",
      images: [{ url: "https://i.scdn.co/image/ab6761610000e5ebdcbf7ddf047dd267e4de8978" }, { url: "https://i.scdn.co/image/ab6761610000e5ebdcbf7ddf047dd267e4de8978" }]
    },
    {
      name: "Fred Again..",
      images: [{ url: "https://i.scdn.co/image/ab6761610000e5ebc3631d90ebc9440d6fd63755" }, { url: "https://i.scdn.co/image/ab6761610000e5ebc3631d90ebc9440d6fd63755" }]
    },
    {
      name: "Joji",
      images: [{ url: "https://i.scdn.co/image/ab6761610000e5eb4111c95b5f430c3265c7304b" }, { url: "https://i.scdn.co/image/ab6761610000e5eb4111c95b5f430c3265c7304b" }]
    },
    {
      name: "Shane Malone",
      images: [{ url: "https://i.scdn.co/image/ab6761610000e5eb65873878eae5442bbd654a76" }, { url: "https://i.scdn.co/image/ab6761610000e5eb65873878eae5442bbd654a76" }]
    },
    {
      name: "hemlocke springs",
      images: [{ url: "https://i.scdn.co/image/ab6761610000e5eb5f863ecc015a1f9cb089dda1" }, { url: "https://i.scdn.co/image/ab6761610000e5eb5f863ecc015a1f9cb089dda1" }]
    }
  ],
  tracks: [
    {
      name: "Slugger 1.4 [2014 Export.WAV]",
      artists: [{ name: "Flume" }],
      album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273af8f828232b13d28d95619ad" }, { url: "https://i.scdn.co/image/ab67616d0000b273af8f828232b13d28d95619ad" }] }
    },
    {
      name: "Marea (we’ve lost dancing)",
      artists: [{ name: "Fred Again.." }, { name: "The Blessed Madonna" }],
      album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b2730f0e63e38a0ea92314ab9d7f" }, { url: "https://i.scdn.co/image/ab67616d0000b2730f0e63e38a0ea92314ab9d7f" }] }
    },
    {
      name: "Die For You",
      artists: [{ name: "Joji" }],
      album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb" }, { url: "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb" }] }
    },
    {
      name: "Waiting",
      artists: [{ name: "Shane Malone" }, { name: "Sprig" }],
      album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273d79774a2a3756588f4bfc590" }, { url: "https://i.scdn.co/image/ab67616d0000b273d79774a2a3756588f4bfc590" }] }
    },
    {
      name: "girlfriend",
      artists: [{ name: "hemlocke springs" }],
      album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273a9d3614d51dbd54980502f15" }, { url: "https://i.scdn.co/image/ab67616d0000b273a9d3614d51dbd54980502f15" }] }
    },
  ],
  genre: "Vapor Twitch",
  time: "87,566"
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TRACK':
      const newTracks = state.tracks;
      newTracks[action.index] = action.data;
      return { ...state, tracks: newTracks };
    case 'ADD_ARTIST':
      const newArtists = state.artists;
      newArtists[action.index] = action.data;
      return { ...state, artists: newArtists };
    case 'UPDATE_GENRE':
      return { ...state, genre: action.data };
    case 'UPDATE_TIME':
      return { ...state, time: action.data };
    case 'UPDATE_CREDIT':
      return { ...state, credit: action.data };
    case 'UPDATE_DATA':
      return action.data;
    default:
      throw new Error();
  }
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [done, setDone] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const spotifyApi = new SpotifyWebApi();

  const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  useEffect(() => {
    const params = getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
      setLoggedIn(true);
    }
    // dispatch({ type: 'UPDATE_DATA', data: testState });
    // setDone(true);
  }, [setDone]);

  const validate = (evt) => {
    let allFilled = true;
    for (let i = 0; i < 5; i++) {
      allFilled = !!(data.tracks[i].name && data.artists[i].name);
    }
    allFilled = allFilled && !!data.genre && !!data.time;
    setDone(allFilled);
    if (!allFilled) {
      alert('Please make sure all fields are filled in.');
    }
  }

  const renderSelections = (tracks) => {
    let content = [];
    for (let i = 0; i < 5; i++) {
      content.push(<Entity key={i} tracks={tracks} index={i + 1} spotifyApi={spotifyApi} dispatch={dispatch} />);
    }
    return content;
  }

  const updateGenre = (event) => {
    dispatch({ type: 'UPDATE_GENRE', data: event.target.value });
  }

  const updateTime = (event) => {
    dispatch({ type: 'UPDATE_TIME', data: event.target.value });
  }

  const updateTrack = (event, index) => {
    dispatch({ type: 'ADD_TRACK', index: index, data: { name: event.target.value } });
  }

  const updateArtist = (event, index) => {
    dispatch({ type: 'ADD_ARTIST', index: index, data: { name: event.target.value } });
  }

  const updateCredit = (event) => {
    dispatch({ type: 'UPDATE_CREDIT', data: event.target.checked });
  }

  return (
    <div className='App'>
      {loggedIn ?
        <div className="container">
          <div className="sidebar">
            <div className="input-container">
              <h1 className="logo">DIY Wrapped</h1>
              <div className="selections">
                <h3>Top Artist and Image</h3>
                {/* {renderSelections(false)} */}
                <Entity tracks={false} index={1} spotifyApi={spotifyApi} dispatch={dispatch} />
              </div>
              <div className="selections">
                <h3>Other Top Artists</h3>
                {
                  Array.from({ length: 4 }).map((item, index) => {
                    return (
                      <div className="entity-wrapper">
                        <p className="entity-number">{index + 2 + '.'}</p>
                        <input
                          type="text"
                          value={data.artists[index + 1].name}
                          onChange={e => updateArtist(e, index + 1)}
                        />
                      </div>
                    );
                  })
                }
              </div>
              <div className="selections">
                <h3>Top Tracks</h3>
                {/* {renderSelections(true)} */}
                {
                  Array.from({ length: 5 }).map((item, index) => {
                    return (
                      <div className="entity-wrapper">
                        <p className="entity-number">{index + 1 + '.'}</p>
                        <input
                          type="text"
                          value={data.tracks[index].name}
                          onChange={e => updateTrack(e, index)}
                        />
                      </div>
                    );
                  })
                }
              </div>
              <div className="selections">
                <h3>Top Genre</h3>
                <input type="text" value={data.genre} onChange={updateGenre} />
              </div>
              <div className="selections">
                <h3>Minutes Listened</h3>
                <input type="text" value={data.time} onChange={updateTime} />
              </div>
              <div className="selections checkbox">
                <input
                  type="checkbox"
                  checked={data.credit}
                  onChange={updateCredit}
                />
                <h3>Show Spotify URL</h3>
              </div>
              {/* <button onClick={validate}>Create My Wrapped</button> */}
            </div>
          </div>
          <CanvasGraphic data={data} done={done} />
        </div>
        :
        <div className="start-container">
          <div className="title-wrapper">
            <h1>DIY Wrapped</h1>
            <p>Create your own Spotify wrapped, for when your listening history isn't fit for the public eye.</p>
            <a href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENTID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
              <button>Login to Spotify</button>
            </a>
          </div>
        </div>
      }
    </div>
  )
}

export default App;
