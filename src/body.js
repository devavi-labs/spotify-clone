import { Input } from '@material-ui/core'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import React from 'react'
import './body.css'
import { useDataLayerValue } from './data_layer'
import Header from './header'
import SongRow from './song_row'

function Body({ spotify }) {
    const [{ discoverWeekly }] = useDataLayerValue()
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body__info'>
                <img
                    src={discoverWeekly?.images[0]?.url}
                    alt='discover weekly'
                />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>
            <a>SHUFFLE PLAY</a>
            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilled className='body__shuffle' />
                    <Favorite fontSize='large' />
                    <MoreHoriz />
                </div>
                {
                    discoverWeekly?.tracks?.items?.map((item, index) => (
                        <SongRow key={index} track={item.track} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body
