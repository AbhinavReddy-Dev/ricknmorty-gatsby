import {
  FETCH_EPISODES_REQUEST,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILURE,
} from './types'

const initialState = {
  episodes: [],
  episodesLoading: false,
  episodesMessage: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES_REQUEST:
      return {
        ...state,
        episodesLoading: true,
        episodes: [],
        episodesMessage: '',
      }
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.payload || [],
        episodesLoading: false,
        episodesMessage: '',
      }
    case FETCH_EPISODES_FAILURE:
      return {
        ...state,
        episodes: [],
        episodesLoading: false,
        episodesMessage: action.payload,
      }
    default:
      return state
  }
}

export default reducer
