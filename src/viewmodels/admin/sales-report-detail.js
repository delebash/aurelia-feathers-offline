import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'sales_reports';


@inject(Shared,Api)
export class SalesReportDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.sales_report = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.sales_report = this.shared.val
  }

  save(){
    this.api.update(this.sales_report.id,this.sales_report)
  }

}
