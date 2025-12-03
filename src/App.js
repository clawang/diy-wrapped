import React, { useEffect, useState, useReducer, useRef } from 'react';
import { generateRandomString, sha256, base64encode } from './auth';
import './App.scss';
import SpotifyWebApi from 'spotify-web-api-js';
import CanvasGraphic from './CanvasGraphic';
import Entity from './Entity';

const REDIRECT_URI =
  "https://diy-wrapped.netlify.app/" || 
  "http://127.0.0.1:3000/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"

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

  const token = useRef({
    access_token: null,
    refresh_token: null,
    expires_in: null
  });

  const getSpotifyAuth = async () => {
    // create codeVerifier
    const codeVerifier = generateRandomString(64);
    window.localStorage.setItem('code_verifier', codeVerifier);

    // create codeChallenge
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    const scope = 'user-read-private user-read-email';
    const params = {
      response_type: 'code',
      client_id: process.env.REACT_APP_SPOTIFY_CLIENTID,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: REDIRECT_URI
    }

    const authUrl = new URL(AUTH_ENDPOINT);
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  };

  const getToken = async code => {
    // stored in the previous step
    const codeVerifier = localStorage.getItem('code_verifier');

    const url = "https://accounts.spotify.com/api/token";
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.REACT_APP_SPOTIFY_CLIENTID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: codeVerifier,
      }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    return response;
  }

  const setAccessToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    if (code) {
      const response = await getToken(code);
      const { access_token, refresh_token, expires_in } = response;
      token.current = {
        access_token, refresh_token, expires_in
      };
      setLoggedIn(access_token ? true : false);
      spotifyApi.setAccessToken(access_token);

      const url = new URL(window.location.href);
      url.searchParams.delete("code");

      const updatedUrl = url.search ? url.href : url.href.replace('?', '');
      window.history.replaceState({}, document.title, updatedUrl);
    }
  }

  const logOut = () => {
    setLoggedIn(false);
  }

  useEffect(() => {
    setAccessToken();
  }, []);

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
            <button onClick={getSpotifyAuth}>Login to Spotify</button>
          </div>
          <div className="credit">
            <p>Made by <a href="https://clawang.github.io/" target="_blank">Claire Wang</a>. Not affiliated with Spotify.</p>
          </div>
        </div>
      }
    </div>
  )
}

export default App;
