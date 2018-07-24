import { withRouter } from 'react-router-dom';
import withContainer from '../common/components/utils/withContainer';

import EmailPreview from './components/EmailPreview';
import { loadEmails, loadEmailById } from './emailDuck';

export default withRouter(withContainer(
  EmailPreview,
  state => ({
    emails: state.email.emails,
    currentEmail: state.email.emails.get(state.email.currentEmailId) || {}
  }),
  {
    loadEmails,
    loadEmailById
  },
  {
    async componentDidMount() {
      if (this.props.emails.size === 0) {
        await this.props.loadEmails();
      }

      const { emailId } = this.props.match.params;
      if (!this.props.emails.get(emailId).body) {
        await this.props.loadEmailById(emailId);
      }
    }
  }
));
