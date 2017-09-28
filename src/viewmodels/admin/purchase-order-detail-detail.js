import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'purchase_order_details';


@inject(Shared,Api)
export class PurchaseOrderDetailDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.purchase_order_detail = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.purchase_order_detail = this.shared.val
  }

  save(){
    this.api.update(this.purchase_order_detail.id,this.purchase_order_detail)
  }

}
