import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Api} from '../../services/api';
const endpoint = 'order_details_status';

let that;
let myroute;
@inject(Shared, Router,Api)
export class OrderDetailsStatusList{
  constructor(shared,router,api){
    that  = shared;
    myroute = router;
    this.api = api;
  }

  async attached() {
    await this.api.connect(endpoint);
    let query = {};
    let data = await this.api.read(query);
    $('#Grid').ejGrid({
      dataSource: data,
      recordDoubleClick: this.rowClicked
    });
  }
  rowClicked(e){
    myroute.navigateToRoute('order_details_status-detail', { id: e.data.id });
   that.val = e.data;
  }
}
