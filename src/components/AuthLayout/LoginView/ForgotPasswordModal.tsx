import React, { FunctionComponent } from 'react';
import { useObserver } from 'mobx-react-lite';

import Modal from 'src/components/SharedLayout/Shared/Modal';
import ResetPasswordForm from 'src/components/AuthLayout/LoginView/ForgotPasswordForm';

import { useStore } from 'src/store';

// SVG
import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  CheckMark,
  Error,
} = SVGS;

const EmailNotSentMessage: FunctionComponent<{}> = () => {
  const { userStore } = useStore();

  return useObserver(() => (
    <div className="pa4 w-100 flex flex-column justify-center items-start">
      <Error className="w3 h3"/>
      <div className="w-100">
        <h2>Password reset failed</h2>
        <p className="f6 lh-copy">
          Email not registered to CoQonect or an unknown error occurred. If you're certain the email you entered is {'  '}
          registered? <a onClick={userStore.resetEmailSentStatus} className="blue link pointer">Resend Email</a>
        </p>
      </div>
    </div>
  ));
};

const EmailSentMessage: FunctionComponent<{}> = () => {
  const { userStore } = useStore();

  return useObserver(() => (
    <div className="pa4 w-100 flex flex-column justify-center items-start">
      <CheckMark className="w3 h3 fill-green"/>
      <div className="w-100">
        <h2>Check your inbox</h2>
        <p className="f6">
          To reset your password click the link in the confirmation email we've just sent you.
        </p>
        <p className="f6 mt4">
          Haven't received the email yet? {' '}
          <a onClick={userStore.resetEmailSentStatus} className="blue link pointer">Resend Email</a>
        </p>
      </div>
    </div>
  ));
};

const ForgotPasswordModal: FunctionComponent<{}> = () => {
  const { uiStore, userStore } = useStore();

  const _closeModal = () => {
    uiStore.toggleModal();
  };

  return useObserver(() => (
    <Modal visible={uiStore.modalOpened} onClose={_closeModal}>
      {userStore.emailSentStatus === 'sent' && <EmailSentMessage />}
      {userStore.emailSentStatus === 'failed' && <EmailNotSentMessage />}
      {!userStore.emailSentStatus && <ResetPasswordForm />}
    </Modal>
  ));
};

export default ForgotPasswordModal;
