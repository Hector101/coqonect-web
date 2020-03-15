import { observable, action } from 'mobx';

import { TLoginFormValues, TSignupFormValues, TPasswordResetFormValues } from 'src/interfaces/Forms';
import { CallApiType } from 'src/interfaces/CallApi';

export class UserStore {
  @observable emailSentStatus = '';
  @observable emailUnverified = false;
  @observable loginResponse = { message: '' };
  @observable signupResponse = { message: '' };
  @observable passwordResetResponse = { message: '' };
  @observable loggedIn = false;

  constructor(public api: CallApiType) {
    this.api = api;
  }

  @action
  async handleForgotPassword(email: string) {
    const response = await this.api({
      url: '/api/v1/forgot-password',
      data: { email },
      method: 'post',
    });

    if (response.success) {
      this.emailSentStatus = 'success';
    } else if (!response.success) {
      this.emailSentStatus = 'failed';
    }
  }

  @action
  async handleLogin({ email, password }: TLoginFormValues, onSuccess?: () => void, onError?: () => void) {
    const response = await this.api({
      url: '/api/v1/login',
      data: { email, password },
      method: 'post',
    });

    if (response.status === 200) {
      this.loginResponse.message = response.message;

      this.loggedIn = true;
      if (onSuccess) {
        onSuccess();
      }
    }

    if (response.status === 401 || response.status === 500) {
      this.loginResponse.message = response.message;
      this.loggedIn = false;

      if (onError) {
        onError();
      }
    }

    if (response.status === 403) {
      this.emailUnverified = true;
      if (onError) {
        onError();
      }
    }
  }

  @action
  async handleSignup({fullName,  email, password }: TSignupFormValues, onSuccess?: () => void, onError?: () => void) {
    const response = await this.api({
      url: '/api/v1/signup',
      data: { fullName, email, password },
      method: 'post',
    });

    if (response.success) {
      this.signupResponse.message = response.message;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      this.signupResponse.message = response.message;
      if (onError) {
        onError();
      }
    }
  }

  @action
  async handleLogout(onSuccess?: () => void, onError?: () => void) {
    const response = await this.api({
      url: '/api/v1/logout',
      method: 'get',
    });

    if (response.success) {
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onError) {
        onError();
      }
    }
  }

  @action
  async handlePasswordReset(
    { password, token }: TPasswordResetFormValues,
    onSuccess?: () => void,
    onError?: () => void,
  ) {
    const response = await this.api({
      url: '/api/v1/reset-password',
      data: { password, token },
      method: 'post',
    });

    this. passwordResetResponse.message = response.message;

    if (response.success) {
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onError) {
        onError();
      }
    }
  }

  @action
  async handleCheckAuthStatus(onSuccess?: () => void, onError?: () => void) {
    const res = await this.api({
      url: '/api/v1/auth-status',
      method: 'get',
    });

    if (res.status === 200) {
      this.loggedIn = true;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onError) {
        onError();
      }
    }
  }

  @action
  resetEmailSentStatus() {
    this.emailSentStatus = '';
  }

  @action
  resetLoginResponse() {
    this.loginResponse.message = '';
  }

  @action
  resetEmailUnverified() {
    this.emailUnverified = false;
  }

  @action
  resetSignupResponse() {
    this.signupResponse.message = '';
  }
}
