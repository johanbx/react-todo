import axios from 'axios';

// ACTIONS
export const GET_PROFILES = 'GET_PROFILES';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export const ADD_PROFILE = 'ADD_PROFILE';
export const SET_ACTIVE_PROFILE = 'SET_ACTIVE_PROFILE';

// ACTION CREATORS
const getProfilesAction = profiles => ({ type: GET_PROFILES, profiles });

const deleteProfileAction = id => ({ type: DELETE_PROFILE, id });

const addProfileAction = profile => ({ type: ADD_PROFILE, profile });

export const setActiveProfileAction = id => ({ type: SET_ACTIVE_PROFILE, id });

// SIDE-EFFECTS
export const getProfiles = () => dispatch => axios.get('/api/v1/profile').then(
  ({ data: profiles }) => dispatch(getProfilesAction(profiles)),
);

export const deleteProfile = id => dispatch => axios.delete(`/api/v1/profile/${id}`).then(
  ({ status }) => status === 204 && dispatch(deleteProfileAction(id)),
);

export const addProfile = profile => dispatch => axios.post('/api/v1/profile', profile).then(
  ({ status, data }) => status === 201 && dispatch(addProfileAction(data)),
);
