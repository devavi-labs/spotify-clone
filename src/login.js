import { Icon } from '@material-ui/core'
import React from 'react'
import './login.css'
import { loginUrl } from './spotify'
import SpotifyLogo from './spotify.png'

function Login() {
    return (
        <div className='login'>
            <Icon name='spotify' />
            <img
                src={SpotifyLogo}
                alt=''
            />
            <button onClick={() => window.location = loginUrl}>
                LOGIN WITH SPOTIFY
            </button>
        </div>
    )
}

export default Login
