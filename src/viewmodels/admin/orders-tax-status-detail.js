import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'orders_tax_status';


@inject(Shared,Api)
export class OrdersTaxStatusDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.orders_tax_status = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.orders_tax_status = this.shared.val
  }

  save(){
    this.api.update(this.orders_tax_status.id,this.orders_tax_status)
  }

}
