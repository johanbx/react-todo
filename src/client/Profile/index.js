import axios from 'axios';
import { withState, compose, lifecycle } from 'recompose';
import Profile from './Profile';

const enhance = compose(
  withState('profile', 'setProfile', { name: 'loading...' }),
  lifecycle({
    componentDidMount() {
      axios.get('/api/profile/1').then(
        ({ data: profile }) => this.setState({ profile }),
      );
    },
  }),
);

export default enhance(Profile);
