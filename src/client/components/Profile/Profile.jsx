import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ profile: { name }, deleteProfile }) => (
  <table>
    <tbody>
      <tr>
        <td>Name: </td>
        <td>{name}</td>
        <td><button onClick={() => deleteProfile(name)} type="button">Delete</button></td>
      </tr>
    </tbody>
  </table>
);

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  deleteProfile: PropTypes.func.isRequired,
};

export default Profile;
