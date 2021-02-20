const initialState = {
  imageUrl: '',
  imageUrlSmall: '',
  pending: false,
  error: null
}

const fetchImage = () => {
  return (dispatch) => {

    dispatch(fetchImagePending())

    fetch('https://picsum.photos/id/1082/1024/980')
      .then(res => res.arrayBuffer())
      .then(buffer => {
        if (!buffer) {
          dispatch(fetchImageError(' Server error '))
        } else {
          const blob = new Blob([buffer])
          const objectUrl = URL.createObjectURL(blob)
          dispatch(fetchImageSuccess(objectUrl))
        }
      })
      .catch(error => {
        dispatch(fetchImageError(error.message))
      })
  }
}

const fetchImageSmall = () => {
  return (dispatch) => {

    dispatch(fetchImageSmallPending())

    fetch('https://picsum.photos/id/1082/45/45')
      .then(res => res.arrayBuffer())
      .then(buffer => {
        if (!buffer) {
          dispatch(fetchImageSmallError(' Server error '))
        } else {
          const blob = new Blob([buffer])
          const objectUrl = URL.createObjectURL(blob)
          dispatch(fetchImageSmallSuccess(objectUrl))
        }
      })
      .catch(error => {
        dispatch(fetchImageSmallError(error.message))
      })
  }
}


const fetchImagePending = () => {
  return {
    type: 'FETCH_IMAGE_PENDING',
    payload: null
  }
}

const fetchImageSuccess = (response) => {
  return {
    type: 'FETCH_IMAGE_SUCCESS',
    payload: { response }
  }
}

const fetchImageError = (error) => {
  return {
    type: 'FETCH_IMAGE_FAILED',
    payload: { error }
  }
}

const fetchImageSmallPending = () => {
  return {
    type: 'FETCH_IMAGE_SMALL_PENDING',
    payload: null
  }
}

const fetchImageSmallSuccess = (response) => {
  return {
    type: 'FETCH_IMAGE_SMALL_SUCCESS',
    payload: { response }
  }
}

const fetchImageSmallError = (error) => {
  return {
    type: 'FETCH_IMAGE_SMALL_FAILED',
    payload: { error }
  }
}


const imageLogoReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_IMAGE_PENDING': {
      return {
        ...state,
        pending: true
      }
    }

    case 'FETCH_IMAGE_SUCCESS': {
      return {
        ...state,
        pending: false,
        imageUrl: action.payload.response,
        error: null
      }
    }

    case 'FETCH_IMAGE_FAILED': {
      return {
        ...state,
        pending: false,
        imageUrl: '',
        error: action.payload.error
      }
    }

    case 'FETCH_IMAGE_SMALL_PENDING': {
      return {
        ...state,
        pending: true
      }
    }

    case 'FETCH_IMAGE_SMALL_SUCCESS': {
      return {
        ...state,
        pending: false,
        imageUrlSmall: action.payload.response,
        error: null
      }
    }

    case 'FETCH_IMAGE_SMALL_FAILED': {
      return {
        ...state,
        pending: false,
        imageUrlSmall: '',
        error: action.payload.error
      }
    }


    default: {
      return state
    }
  }
}

export {
  fetchImage,
  fetchImageSmall,
  imageLogoReducer
}