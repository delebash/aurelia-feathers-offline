import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'employees';


@inject(Shared,Api)
export class EmployeeDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.employee = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.employee = this.shared.val
  }

  save(){
    this.api.update(this.employee.id,this.employee)
  }

}
