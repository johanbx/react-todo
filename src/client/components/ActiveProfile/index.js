import {
  compose,
} from 'recompose';
import { connect } from 'react-redux';

import ActiveProfile from './ActiveProfile';

const enhance = compose(
  connect(({ activeProfile, profiles }) => ({
    profile: profiles.find(({ _id }) => activeProfile === _id),
  })),
);

export default enhance(ActiveProfile);
