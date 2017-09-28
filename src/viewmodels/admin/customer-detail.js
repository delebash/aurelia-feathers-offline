import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'customers';


@inject(Shared,Api)
export class CustomerDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.customer = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.customer = this.shared.val
  }

  save(){
    this.api.update(this.customer.id,this.customer)
  }

}
