import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'employee_privileges';


@inject(Shared,Api)
export class EmployeePrivilegeDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.employee_privilege = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.employee_privilege = this.shared.val
  }

  save(){
    this.api.update(this.employee_privilege.id,this.employee_privilege)
  }

}
