import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'products';


@inject(Shared,Api)
export class ProductDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.product = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.product = this.shared.val
  }

  save(){
    this.api.update(this.product.id,this.product)
  }

}
