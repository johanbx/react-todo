import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';

const ProfileList = ({ profiles }) => (
  <div>
    {profiles.map(profile => <Profile key={profile._id} profile={profile} />)}
  </div>
);

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default ProfileList;
