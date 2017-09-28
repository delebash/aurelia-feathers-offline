import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'order_details_status';


@inject(Shared,Api)
export class OrderDetailsStatusDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.order_details_status = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.order_details_status = this.shared.val
  }

  save(){
    this.api.update(this.order_details_status.id,this.order_details_status)
  }

}
