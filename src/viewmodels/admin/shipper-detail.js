import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'shippers';


@inject(Shared,Api)
export class ShipperDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.shipper = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.shipper = this.shared.val
  }

  save(){
    this.api.update(this.shipper.id,this.shipper)
  }

}
