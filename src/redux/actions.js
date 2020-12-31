import axios from 'axios'

import {
  FETCH_EPISODES_REQUEST,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILURE,
} from './types'

import { episodesURL } from './urls'

// Episodes

export const fetchEpisodesRequest = () => {
  return {
    type: FETCH_EPISODES_REQUEST,
  }
}

export const fetchEpisodesSuccess = Episodes => {
  return {
    type: FETCH_EPISODES_SUCCESS,
    payload: Episodes,
  }
}

export const fetchEpisodesFailure = error => {
  return {
    type: FETCH_EPISODES_FAILURE,
    payload: error,
  }
}

export const fetchEpisodes = () => {
  return dispatch => {
    dispatch(fetchEpisodesRequest())
    axios
      .get(episodesURL)
      .then(response => {
        console.log(response)
        //   dispatch(fetchEpisodesSuccess(response));
      })
      .catch(error => {
        console.log(error)
        //   dispatch(fetchEpisodesFailure(error));
      })
  }
}
