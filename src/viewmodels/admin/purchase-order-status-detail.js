import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'purchase_order_status';


@inject(Shared,Api)
export class PurchaseOrderStatusDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.purchase_order_status = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.purchase_order_status = this.shared.val
  }

  save(){
    this.api.update(this.purchase_order_status.id,this.purchase_order_status)
  }

}
