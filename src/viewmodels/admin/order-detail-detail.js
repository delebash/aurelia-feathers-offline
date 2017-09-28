import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'order_details';


@inject(Shared,Api)
export class OrderDetailDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.order_detail = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.order_detail = this.shared.val
  }

  save(){
    this.api.update(this.order_detail.id,this.order_detail)
  }

}
