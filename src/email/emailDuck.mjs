import { createAction, handleActions } from 'redux-actions';

import { getEmails, getEmailById } from './services/EmailService';

const LOAD_EMAILS = 'email/LOAD_EMAILS';
const LOAD_EMAIL = 'email/LOAD_EMAIL';


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
          const emails = state.emails.map((email) => {
            if (action.payload.id === email.id) {
              return action.payload;
            }
            return email;
          });

          return {
            emails,
            currentEmail: action.payload
          };
        },
        throw: state => state
      }
    }
  },
  {
    emails: [],
    currentEmail: {}
  }
);
