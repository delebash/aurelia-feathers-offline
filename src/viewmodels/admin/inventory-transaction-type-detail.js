import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'inventory_transaction_types';


@inject(Shared,Api)
export class InventoryTransactionTypeDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.inventory_transaction_type = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.inventory_transaction_type = this.shared.val
  }

  save(){
    this.api.update(this.inventory_transaction_type.id,this.inventory_transaction_type)
  }

}
