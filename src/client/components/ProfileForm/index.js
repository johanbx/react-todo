import {
  compose, withHandlers, withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import lstore from 'store';
import debounce from 'lodash/debounce';

import { addProfile } from '../../store/actions';
import ProfileForm from './ProfileForm';

const updateLocalStorageForm = debounce(async form => lstore.set('ProfileForm.form', form), 500);

const enhance = compose(
  connect(),
  withStateHandlers(
    ({ form: (lstore.get('ProfileForm.form') || ({ name: '' })) }),
    {
      setForm: ({ form }) => (name, value) => {
        const newForm = { ...form, [name]: value };
        updateLocalStorageForm(newForm);
        return ({
          form: newForm,
        });
      },
    },
  ),
  withHandlers({
    onChange: ({ setForm }) => e => setForm(e.target.name, e.target.value),
    onSubmit: ({ form, dispatch }) => (e) => {
      e.preventDefault();
      dispatch(addProfile(form));
    },
  }),
);

export default enhance(ProfileForm);
