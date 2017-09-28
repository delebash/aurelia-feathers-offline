import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'privileges';


@inject(Shared,Api)
export class PrivilegeDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.privilege = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.privilege = this.shared.val
  }

  save(){
    this.api.update(this.privilege.id,this.privilege)
  }

}
