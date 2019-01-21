import {
  compose, withHandlers, branch, renderNothing, createSink, renderComponent,
} from 'recompose';
import { connect } from 'react-redux';

import { deleteProfile, setActiveProfileAction } from '../../store/actions';
import Profile from '../Profile';

const enhance = compose(
  connect(({ activeProfile, profiles }) => ({
    profile: profiles.find(({ _id }) => activeProfile === _id),
  })),
  withHandlers({
    deleteProfile: ({ dispatch, profile: { _id } }) => () => dispatch(deleteProfile(_id)),
    setActive: ({ dispatch, profile: { _id } }) => () => dispatch(setActiveProfileAction(_id)),
  }),
  branch(({ profile }) => profile, renderComponent(Profile), renderNothing),
);

export default enhance(createSink());
