import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Api} from '../../services/api';
const endpoint = 'sales_reports';

let that;
let myroute;
@inject(Shared, Router,Api)
export class SalesReportList{
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
    myroute.navigateToRoute('sales_report-detail', { id: e.data.id });
   that.val = e.data;
  }
}
