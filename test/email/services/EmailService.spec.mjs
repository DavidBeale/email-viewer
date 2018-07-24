import chai from 'chai';
import sinon from 'sinon';

import { getEmails, getEmailById } from '../../../src/email/services/EmailService';
import emailsData from '../../../data/emails.json';
import email1Data from '../../../data/email-1.json';

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
      global.fetch.returns(response(emailsData));
    });

    it('Gets the list of emails', async () => {
      const emails = await getEmails();
      expect(emails.size).to.equal(3);
      expect(emails.get('2').name).to.equal('Name 2');
    });
  });

  describe('getEmailById', () => {
    beforeEach(() => {
      global.fetch.returns(response(email1Data));
    });

    it('Get an email by Id', async () => {
      const email = await getEmailById(1);
      expect(email.id).to.equal('1');
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
