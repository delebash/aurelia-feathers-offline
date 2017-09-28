import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'invoices';


@inject(Shared,Api)
export class InvoiceDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.invoice = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.invoice = this.shared.val
  }

  save(){
    this.api.update(this.invoice.id,this.invoice)
  }

}
