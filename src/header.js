import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import './header.css'
import { useDataLayerValue } from './data_layer'

function Header() {
    const [{ user }] = useDataLayerValue()

    return (
        <header className='header'>
            <div className='header__left'>
                <Search />
                <input
                    placeholder='Search Artists, Songs, Playlists'
                    type='text'
                />
            </div>
            <div className='header__right'>
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </header>
    )
}

export default Header
