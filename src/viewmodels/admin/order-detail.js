import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'orders';


@inject(Shared,Api)
export class OrderDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.order = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.order = this.shared.val
  }

  save(){
    this.api.update(this.order.id,this.order)
  }

}
