import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'suppliers';


@inject(Shared,Api)
export class SupplierDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.supplier = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.supplier = this.shared.val
  }

  save(){
    this.api.update(this.supplier.id,this.supplier)
  }

}
