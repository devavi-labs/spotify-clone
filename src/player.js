import React from 'react'
import Body from './body'
import Footer from './footer'
import './player.css'
import Sidebar from './sidebar'

function Player({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default Player
