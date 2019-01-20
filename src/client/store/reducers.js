import { combineReducers } from 'redux';
import { GET_PROFILES, DELETE_PROFILE, ADD_PROFILE } from './actions';

const profiles = (state = [], action) => {
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
};

export default combineReducers({
  profiles,
});
