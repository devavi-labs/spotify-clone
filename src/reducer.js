export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    currentTrack: null,
    item: null,
    discoverWeekly: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discoverWeekly: action.playlist
            }
        case 'SET_CURRENT_TRACK':
            return {
                ...state,
                currentTrack: action.track
            }
        default: return state
    }
}

export default reducer

