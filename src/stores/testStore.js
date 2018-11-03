import { observable, computed, decorate, action } from 'mobx';

class TestStore {
  @observable arr = ['I', 'Love', 'You'];

  @computed
  get text(){
    console.log('computed text');
    return this.arr.join(' ') + '!'
  }
  
  @action
  change(){
    console.log('action change')
    this.arr.push('!!')
  }

  @action
  modify(){
    console.log('action modify')
    this.arr = ['change']
  }
}

export default new TestStore();

