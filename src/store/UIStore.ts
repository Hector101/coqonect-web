import { observable, action } from 'mobx';

import { CallApiType } from 'src/interfaces/CallApi';

export class UIStore {
  @observable modalOpened = false;
  @observable sideMenuOpened = true;

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
}
