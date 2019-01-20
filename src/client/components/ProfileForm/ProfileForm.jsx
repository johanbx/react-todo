import React from 'react';
import PropTypes from 'prop-types';

const ProfileForm = ({ onChange, onSubmit, form }) => (
  <form method="post" action="/api/profile/create" onSubmit={onSubmit}>
    <input onChange={onChange} name="name" value={form.name} />
    <input type="submit" />
  </form>
);
ProfileForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileForm;
