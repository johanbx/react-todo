import axios from 'axios';
import {
  withState, compose, withHandlers,
} from 'recompose';
import ProfileForm from './ProfileForm';

const enhance = compose(
  withState('form', 'setForm', { name: '' }),
  withHandlers({
    onChange: ({ form, setForm }) => e => setForm({ ...form, [e.target.name]: e.target.value }),
    onSubmit: ({ form }) => (e) => {
      e.preventDefault();
      axios.post('/api/profile/create', form);
    },
  }),
);

export default enhance(ProfileForm);
