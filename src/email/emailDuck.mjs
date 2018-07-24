import { createAction, handleActions } from 'redux-actions';

import { getEmails, getEmailById } from './services/EmailService';

export const LOAD_EMAILS = 'email/LOAD_EMAILS';
export const LOAD_EMAIL = 'email/LOAD_EMAIL';


export async function loadEmails() {
  try {
    const emails = await getEmails();
    return createAction(LOAD_EMAILS)(emails);
  } catch (error) {
    return createAction(LOAD_EMAILS)(error);
  }
}

export async function loadEmailById(id) {
  try {
    const email = await getEmailById(id);
    return createAction(LOAD_EMAIL)(email);
  } catch (error) {
    return createAction(LOAD_EMAIL)(error);
  }
}

export default handleActions(
  {
    email: {
      LOAD_EMAILS: {
        next: (state, action) => ({
          ...state,
          emails: action.payload
        }),
        throw: state => state
      },
      LOAD_EMAIL: {
        next: (state, action) => {
          const emails = new Map(state.emails);
          emails.set(action.payload.id, action.payload);

          return {
            emails,
            currentEmailId: action.payload.id
          };
        },
        throw: state => state
      }
    }
  },
  {
    emails: new Map(),
    currentEmailId: ''
  }
);
