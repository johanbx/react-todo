import {
  compose, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import { deleteProfile } from '../../store/actions';
import Profile from './Profile';

const enhance = compose(
  connect(),
  withHandlers({
    deleteProfile: ({ dispatch, profile: { _id } }) => () => dispatch(deleteProfile(_id)),
  }),
);

export default enhance(Profile);
