import { observable, action } from 'mobx';

import {TSkillCategory} from 'src/apolloTypes';

import { CallApiType } from 'src/interfaces/CallApi';

export class SkillStore {
  @observable skillCategory: TSkillCategory = {
    id: '',
    name: '',
    skills: [],
  } ;

  constructor(public api: CallApiType) {
    this.api = api;
  }

  @action
  setSkillCategory(skillCategory: TSkillCategory) {
    this.skillCategory = skillCategory;
  }
}
