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
  @observable userSkillFilter = {
    statusSelectOption: { value: '', label: 'All' },
    userSelectOption: { value: '', label: '' },
    email: '',
    name: '',
    skillName: '',
    take: 10,
    skip: 0,
    totatCount: 10,
  };


  constructor(public api: CallApiType) {
    this.api = api;
  }

  @action
  setStatusSelectOption(option: { value: string, label: string }) {
    this.userSkillFilter.statusSelectOption = option;
  }

  @action
  setUserSelectOption(option: { value: string, label: string }) {
    this.userSkillFilter.userSelectOption = option;
  }

  @action
  setEmail(value: string) {
    this.userSkillFilter.email = value;
  }

  @action
  setName(value: string) {
    this.userSkillFilter.name = value;
  }

  @action
  setSkillName(value: string) {
    this.userSkillFilter.skillName = value;
  }

  @action
  gotoNext(onSuccess?: () => void) {
    const nextCount = this.userSkillFilter.skip + 10;
    this.userSkillFilter.skip = nextCount;
    if (onSuccess) {
      onSuccess();
    }
  }

  @action
  gotoPrev(onSuccess?: () => void) {
    const prevCount = this.userSkillFilter.skip - 10;
    this.userSkillFilter.skip = prevCount;
    if (onSuccess) {
      onSuccess();
    }
  }

  @action
  resetSkip(onSuccess?: () => void) {
    this.userSkillFilter.skip = 0;
    if (onSuccess) {
      onSuccess();
    }
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
