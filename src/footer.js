import React from 'react'
import './footer.css'
import {
    PlayCircleOutline,
    PauseCircleOutline,
    SkipPrevious,
    SkipNext,
    Shuffle,
    Repeat,
    PlaylistPlay,
    VolumeDown,
    Favorite,
    PlayArrow,
    Pause
} from '@material-ui/icons'
import { Slider } from '@material-ui/core'
import { useDataLayerValue } from './data_layer'

function Footer() {
    const [{ currentTrack }] = useDataLayerValue()

    const image = currentTrack?.item?.album?.images[0].url || 'https://picsum.photos/100/100'
    const artists = currentTrack?.item?.album?.artists[0]?.name || 'The Chainsmokers'
    const trackName = currentTrack?.item?.name || 'Push My Luck'

    return (
        <div className='footer'>
            <div className='footer__Left--mobile'>
                <Favorite className='footer__left--mobile__favoriteIcon' />
            </div>
            <div className='footer__left'>
                <img
                    className='footer__albumLogo'
                    src={image}
                    alt='' />
                <div className='footer__songInfo'>
                    <h4>{trackName}</h4>
                    <p>{artists}</p>
                </div>
            </div>
            <div className='footer__center--mobile'>
                <h4>{trackName}</h4>
                <span>•</span>
                <p>{artists}</p>
            </div>
            <div className='footer__center'>
                <Shuffle className='footer__green' />
                <SkipPrevious className='footer__icon' />
                {
                    currentTrack
                        ? currentTrack.context.is_playing
                            ? <PlayCircleOutline
                                fontSize='large'
                                className='footer__icon'
                            /> : <PauseCircleOutline
                                fontSize='large'
                                className='footer__icon'
                            />
                        : <PlayCircleOutline
                            fontSize='large'
                            className='footer__icon'
                        />
                }

                <SkipNext className='footer__icon' />
                <Repeat className='footer__green' />
            </div>
            <div className='footer__right--mobile'>
                {
                    currentTrack
                        ? currentTrack.context.is_playing
                            ? <PlayArrow
                                className='footer__right--mobile__icon'
                            /> : <Pause className='footer__right--mobile__icon' />
                        : <PlayArrow
                            className='footer__right--mobile__icon'
                        />
                }
            </div>
            <div className='footer__right'>
                <PlaylistPlay />
                <VolumeDown />
                <Slider />
            </div>
        </div >
    )
}

export default Footer
