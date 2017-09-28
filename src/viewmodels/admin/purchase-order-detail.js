import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'purchase_orders';


@inject(Shared,Api)
export class PurchaseOrderDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.purchase_order = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.purchase_order = this.shared.val
  }

  save(){
    this.api.update(this.purchase_order.id,this.purchase_order)
  }

}
