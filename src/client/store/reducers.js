import { combineReducers } from 'redux';
import lstore from 'store';
import expirePlugin from 'store/plugins/expire';

import {
  GET_PROFILES, DELETE_PROFILE, ADD_PROFILE, SET_ACTIVE_PROFILE,
} from './actions';

// LOCALSTORAGE
lstore.addPlugin(expirePlugin);

const profiles = (state = (lstore.get('profiles') || []), action) => {
  const newState = (() => {
    switch (action.type) {
      case GET_PROFILES:
        return action.profiles;
      case DELETE_PROFILE:
        return state.filter(({ _id }) => action.id !== _id);
      case ADD_PROFILE:
        return [...state, action.profile];
      default:
        return state;
    }
  })();
  // 1 hour expire
  lstore.set('profiles', newState, new Date().getTime() + 60 * 60 * 1000);
  return newState;
};

const activeProfile = (state = (lstore.get('activeProfile') || 0), action) => {
  const newState = (() => {
    switch (action.type) {
      case SET_ACTIVE_PROFILE:
        return action.id;
      default:
        return state;
    }
  })();
  // 10 seconds expire
  lstore.set('activeProfile', newState, new Date().getTime() + 10 * 1000);
  return newState;
};

export default combineReducers({
  profiles,
  activeProfile,
});
