import { withRouter } from 'react-router-dom';
import withContainer from '../common/components/utils/withContainer';

import EmailPreview from './components/EmailPreview';
import { loadEmails, loadEmailById } from './emailDuck';

export default withRouter(withContainer(
  EmailPreview,
  state => state.email,
  {
    loadEmails,
    loadEmailById
  },
  {
    async componentDidMount() {
      await this.props.loadEmails();
      await this.props.loadEmailById(this.props.match.params.emailId);
    }
  }
));
