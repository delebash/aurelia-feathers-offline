import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'strings';


@inject(Shared,Api)
export class StringDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.string = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.string = this.shared.val
  }

  save(){
    this.api.update(this.string.id,this.string)
  }

}
