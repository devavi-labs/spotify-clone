export const setUser = user => (
    {
        type: 'SET_USER',
        user
    }
)

export const setToken = token => (
    {
        type: 'SET_TOKEN',
        token
    }
)

export const setPlaylists = playlists => (
    {
        type: 'SET_PLAYLISTS',
        playlists
    }
)

export const setDiscoverWeekly = playlist => (
    {
        type: 'SET_DISCOVER_WEEKLY',
        playlist
    }
)

export const setCurrentTrack = track => (
    {
        type: 'SET_CURRENT_TRACK',
        track
    }
)