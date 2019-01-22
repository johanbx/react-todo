import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';

const ActiveProfile = ({ profile }) => (
  <Profile profile={profile} />
);

ActiveProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
  }),
};

ActiveProfile.defaultProps = {
  profile: {
    name: 'none active',
  },
};

export default ActiveProfile;
