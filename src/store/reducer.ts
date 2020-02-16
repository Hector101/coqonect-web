import { Action } from 'src/interfaces/Action';

type PasswordResetType = {
  emailSent: string | null;
};

// Initial State
export const modalState = {
  visible: false,
};


// Reducer
export function modalReducer(state: boolean, action: Action): boolean {
  switch (action.type) {
    case 'toggle':
      return !state;
    default:
      return state;
  }
}

export function passwordResetReducer(state: PasswordResetType, action: Action): PasswordResetType {
  switch (action.type) {
    case 'success':
      return { ...state, emailSent: 'sent' };
    case 'failed':
      return { ...state, emailSent: 'failed' };
    case 'reset':
        return { ...state, emailSent: null };
    default:
      return state;
  }
}

export function sideMenuReducer(state: boolean, action: Action): boolean {
  switch (action.type) {
    case 'toggle':
      return !state;
    default:
      return state;
  }
}
