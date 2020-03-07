import { observable, action } from 'mobx';

import redirect from 'src/lib/redirect';

import { TLoginFormValues, TSignupFormValues } from 'src/interfaces/Forms';
import { CallApiType } from 'src/interfaces/CallApi';

export class UserStore {
  @observable emailSentStatus = '';
  @observable emailUnverified = false;
  @observable loginMesssage = '';
  @observable loginError = false;
  @observable loginSuccess = false;
  @observable signupMessage = '';
  @observable signupError = false;
  @observable signupSuccess = false;

  constructor(public api: CallApiType) {
    this.api = api;
  }

  @action
  async handlePasswordReset(email: string) {
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
  async handleLogin({ email, password }: TLoginFormValues) {
    const response = await this.api({
      url: '/api/v1/login',
      data: { email, password },
      method: 'post',
    });

    if (response.status === 200) {
      this.loginMesssage = response.message;
      this.loginSuccess = true;
      redirect({}, '/dashboard');
    }

    if (response.status === 401 || response.status === 500) {
      this.loginMesssage = response.message;
      this.loginError = true;
    }

    if (response.status === 403) {
      this.emailUnverified = true;
    }
  }

  @action
  async handleSignup({fullName,  email, password }: TSignupFormValues) {
    const response = await this.api({
      url: '/api/v1/signup',
      data: { fullName, email, password },
      method: 'post',
    });

    if (response.success) {
      this.signupMessage = response.message;
      this.signupSuccess = true;
    } else {
      this.signupMessage = response.message;
      this.signupError = true;
    }
  }

  @action
  async handleCheckAuthStatus() {
    const res = await this.api({
      url: '/api/v1/auth-status',
      method: 'get',
    });

    if (res.status !== 200) {
      redirect({}, '/login');
    }
  }

  @action
  resetEmailSentStatus() {
    this.emailSentStatus = '';
  }

  @action
  resetLoginInfo() {
    this.loginMesssage = '';
    this.loginSuccess = false;
    this.loginError = false;
  }

  @action
  resetEmailUnverified() {
    this.emailUnverified = false;
  }

  @action
  resetSignupInfo() {
    this.signupMessage = '';
    this.signupSuccess = false;
    this.signupError = false;
  }
}
