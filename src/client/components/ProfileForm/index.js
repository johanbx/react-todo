import {
  withState, compose, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import { addProfile } from '../../store/actions';
import ProfileForm from './ProfileForm';

const enhance = compose(
  connect(),
  withState('form', 'setForm', { name: '' }),
  withHandlers({
    onChange: ({ form, setForm }) => e => setForm({ ...form, [e.target.name]: e.target.value }),
    onSubmit: ({ form, dispatch }) => (e) => {
      e.preventDefault();
      dispatch(addProfile(form));
    },
  }),
);

export default enhance(ProfileForm);
