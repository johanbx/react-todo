import {
  compose, lifecycle, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import { getProfiles } from '../../store/actions';
import ProfileList from './ProfileList';

const enhance = compose(
  connect(({ profiles }) => ({ profiles })),
  withHandlers({
    getProfiles: ({ dispatch }) => () => dispatch(getProfiles()),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getProfiles();
    },
  }),
);

export default enhance(ProfileList);
