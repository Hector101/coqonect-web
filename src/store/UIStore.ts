import { observable, action } from 'mobx';
import { EditorState } from 'draft-js';

import { CallApiType } from 'src/interfaces/CallApi';

export class UIStore {
  @observable modalOpened = false;
  @observable sideMenuOpened = true;
  @observable snackBarOpen = false;
  @observable snackBarVariant: 'error' | 'success' | 'warning' | 'info' | 'default' = 'default';
  @observable snackBarMessage = '';
  @observable validEditorState = false;
  @observable dialog = { open: false, id: '' };

  constructor(public api: CallApiType) {
    this.api = api;
  }

  @action
  toggleModal() {
    this.modalOpened = !this.modalOpened;
  }

  @action
  toggleSideMenu() {
    this.sideMenuOpened = !this.sideMenuOpened;
  }

  @action
  setSnackBarErrorMessage = (message: string) => {
    this.setSnackBarMessage(message, 'error');
  }

  @action
  setSnackBarSuccessMessage = (message: string) => {
    this.setSnackBarMessage(message, 'success');
  }

  @action
  closeSnackBar() {
    this.snackBarOpen = false;
    this.snackBarMessage = '';
    this.snackBarVariant = 'default';
  }

  @action
  setSnackBarMessage = (message: string, variant: 'error' | 'success' | 'warning' | 'info') => {
    this.snackBarOpen = true;
    this.snackBarVariant = variant;
    this.snackBarMessage = message;
    setTimeout(() => { this.closeSnackBar(); }, 5000);
  }

  @action
  validateEditorState(editorStateValue: EditorState) {
    const MAX_LENGTH = 300;
    const plainTextLength = editorStateValue.getCurrentContent().getPlainText().length;
    if (plainTextLength >= MAX_LENGTH) {
      this.validEditorState = true;
    } else {
      this.validEditorState = false;
    }
  }

  @action
  openDialog(id: string) {
    this.dialog.open = true;
    this.dialog.id = id;
  }

  @action
  closeDialog() {
    this.dialog.open = false;
    this.dialog.id = '';
  }
}
