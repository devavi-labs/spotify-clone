import { Home, LibraryMusic, Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from './data_layer'
import './sidebar.css'
import SidebarOption from './sidebar_option'
import SpotifyLogo from './spotify.png'

function Sidebar() { 
    const [{ playlists }] = useDataLayerValue()
    console.log(playlists)
    return (
        <div className='sidebar'>
            <img
                className='sidebar__logo'
                src={SpotifyLogo}
                alt='logo'
            />
            <SidebarOption
                title='Home'
                Icon={Home}
            />
            <SidebarOption
                title='Search'
                Icon={Search}
            />
            <SidebarOption
                title='Your Library'
                Icon={LibraryMusic}
            />
            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            {
                playlists?.items?.map(playlist =>
                    <SidebarOption title={playlist.name} />
                )
            }

        </div>
    )
}

export default Sidebar
