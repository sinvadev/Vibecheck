import { FETCH_USER_DATA,
  SET_USER_DATA,
  FETCH_USER_PLAYLISTS,
  SET_USER_PLAYLISTS,
  FETCH_USER_RECENT_SONGS,
  SET_USER_RECENT_SONGS,
  SET_SELECTED_SONG,
  SET_SELECTED_SONG_FEATURES,
  FETCH_SELECTED_SONG_FEATURES,
  ADD_SELECTED_SONG_TO_CACHE,
} from '../types';
import { UserData, Playlist, Track, TrackSnippet, AudioFeatures } from '../../constants/types';

export function fetchUserData() {
  return {
    type: FETCH_USER_DATA,
  }
}

export function setUserData(userData: UserData) {
  return {
    type: SET_USER_DATA,
    payload: userData,
  }
}

export function fetchUserPlaylists() {
  return {
    type: FETCH_USER_PLAYLISTS,
  }
}

export function setUserPlaylists(playlists: Playlist[]) {
  return {
    type: SET_USER_PLAYLISTS,
    payload: playlists,
  }
}

export function fetchUserRecentSongs() {
  return {
    type: FETCH_USER_RECENT_SONGS,
  }
}

export function setUserRecentSongs(songs: Track[]) {
  return {
    type: SET_USER_RECENT_SONGS,
    payload: songs,
  }
}

export function setSelectedSong(song: TrackSnippet) {
  return {
    type: SET_SELECTED_SONG,
    payload: song,
  }
}

export function fetchSelectedSongFeatures() {
  return {
    type: FETCH_SELECTED_SONG_FEATURES,
  }
}

export function setSelectedSongFeatures(features: AudioFeatures) {
  return {
    type: SET_SELECTED_SONG_FEATURES,
    payload: features,
  }
}

export function addSelectedSongToCache(song: TrackSnippet, features: AudioFeatures) {
  return {
    type: ADD_SELECTED_SONG_TO_CACHE,
    payload: {
      song: song,
      audioFeatures: features
    }
  }
}