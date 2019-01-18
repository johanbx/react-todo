import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ profile: { name } }) => (
  <div>
    {name}
  </div>
);

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Profile;
