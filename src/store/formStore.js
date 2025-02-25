import { makeObservable, observable, action } from 'mobx';

class FormStore {
  name = '';
  submittedNames = [];

  constructor() {
    makeObservable(this, {
      name: observable,
      submittedNames: observable,
      removeSubmittedName: action,
      clearAll: action,
      setName: action,
      submit: action,
    });
  }

  setName(value) {
    this.name = value;
  }

  submit() {
    if (this.name) {
      this.submittedNames.push({
        id: Date.now(),
        value: this.name
      });
      this.name = '';
    }
  }


  removeSubmittedName(id) {
    this.submittedNames = this.submittedNames.filter(item => item.id !== id);
  }

  clearAll() {
    this.submittedNames = [];
  }
}

export default new FormStore();