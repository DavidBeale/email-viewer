import chai from 'chai';
import sinon from 'sinon';

import { getEmails, getEmailById } from '../../../src/email/services/EmailService';

const { expect } = chai;

describe('EmailService', () => {
  beforeEach(() => {
    global.fetch = () => {};
    sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    global.fetch.restore();
  });

  describe('getEmails', () => {
    beforeEach(() => {
      global.fetch.returns(response(
        [{}, {}, {}]
      ));
    });

    it('Gets the list of emails', async () => {
      const emails = await getEmails();
      expect(emails.length).to.equal(3);
    });
  });

  describe('getEmailById', () => {
    beforeEach(() => {
      global.fetch.returns(response(
        {
          id: 2
        }
      ));
    });

    it('Get an email by Id', async () => {
      const email = await getEmailById(2);
      expect(email.id).to.equal(2);
    });
  });
});


function response(body) {
  return Promise.resolve({
    status: 200,
    ok: true,
    json: () => body
  });
}
