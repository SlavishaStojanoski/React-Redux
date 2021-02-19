const initialState = {
  pending: false,
  error: null,
  data: []
}

// pending request action
const fetchSongs = () => {
  return function (dispatch) {
    dispatch(fetchSongsPending())

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(response => {
        // success
        if (!response || !response.length) {
          dispatch(fetchSongsError('Resource not found'))
        } else {
          dispatch(fetchSongsSuccess(response))
        }
      })
      .catch(error => {
        // error
        dispatch(fetchSongsError(error.message))
      })
  }
}

const fetchSongsPending = () => {
  return {
    type: 'FETCH_SONGS_PENDING',
    payload: null
  }
}

const fetchSongsSuccess = (response) => {
  return {
    type: 'FETCH_SONGS_SUCCESS',
    payload: { response }
  }
}

const fetchSongsError = (error) => {
  return {
    type: 'FETCH_SONGS_ERROR',
    payload: { error }
  }
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS_PENDING': {
      return {
        ...state,
        pending: true
      }
    }

    case 'FETCH_SONGS_SUCCESS': {
      return {
        ...state,
        pending: false,
        data: action.payload.response,
        error: null
      }
    }

    case 'FETCH_SONGS_ERROR': {
      return {
        ...state,
        pending: false,
        data: [],
        error: action.payload.error
      }
    }

    default: {
      return state
    }
  }
}

export {
  fetchSongs,
  songsReducer
}