import React, { useEffect } from 'react'
import './app.css'
import Login from './login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './player'
import { useDataLayerValue } from './data_layer'
import {
  setUser,
  setToken,
  setPlaylists,
  setDiscoverWeekly, setCurrentTrack
} from './actions'

const spotify = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const { access_token } = getTokenFromUrl()
    window.location.hash = ''
    if (access_token) {
      dispatch(setToken(access_token))
      spotify.setAccessToken(access_token)
      spotify.getMe().then(user => {
        dispatch(setUser(user))
      })
      spotify.getUserPlaylists()
        .then(playlists => {
          dispatch(setPlaylists(playlists))
        })
      spotify.getPlaylist('37i9dQZEVXcUDWX2uQmGZc')
        .then(playlist => {
          console.log('playlist === ', playlist)
          dispatch(setDiscoverWeekly(playlist))
        })
      spotify.getMyCurrentPlayingTrack()
        .then(track => {
          dispatch(setCurrentTrack(track))
        })
    }
  }, [])

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
