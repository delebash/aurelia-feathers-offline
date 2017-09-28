import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'inventory_transactions';


@inject(Shared,Api)
export class InventoryTransactionDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.inventory_transaction = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.inventory_transaction = this.shared.val
  }

  save(){
    this.api.update(this.inventory_transaction.id,this.inventory_transaction)
  }

}
