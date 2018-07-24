import chai from 'chai';

import reducer, { LOAD_EMAILS, LOAD_EMAIL } from '../../src/email/emailDuck';

const { expect } = chai;

describe('emailDuck', () => {
  describe('Email Reducer', () => {
    it('handles default state', () => {
      const state = reducer(undefined, {});
      expect(state.emails).to.be.instanceOf(Map);
      expect(state.currentEmailId).to.equal('');
    });

    it('handles LOAD_EMAILS', () => {
      const payload = new Map();

      expect(reducer(undefined, {
        type: LOAD_EMAILS,
        payload
      })).to.deep.equal({
        emails: payload,
        currentEmailId: ''
      });
    });

    it('handles LOAD_EMAIL', () => {
      const emails = new Map([['3', { id: '3' }]]);
      const payload = { id: '3' };

      expect(reducer({
        emails,
        currentEmailId: payload
      }, {
        type: LOAD_EMAIL,
        payload
      })).to.deep.equal({
        emails,
        currentEmailId: '3'
      });
    });
  });
});
