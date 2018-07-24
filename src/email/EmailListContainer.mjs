import withContainer from '../common/components/utils/withContainer';

import EmailList from './components/EmailList';
import { loadEmails } from './emailDuck';

export default withContainer(
  EmailList,
  state => state.email,
  {
    loadEmails
  },
  {
    componentDidMount() {
      if (this.props.emails.size === 0) {
        this.props.loadEmails();
      }
    }
  }
);
