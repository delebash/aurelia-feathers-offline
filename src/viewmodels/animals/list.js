import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';

let data = [
  {
    id: 1,
    found: '123 lst',
    transfer: 'spca huoston'
  },
  {
    id: 2,
    found: '178 North st',
    transfer: 'spca titusville'
  },
  {
    id: 3,
    found: '123 rescue lane',
    transfer: 'hsus brevard'
  },
  {
    id: 4,
    found: '456 Love drive',
    transfer: 'spca titusville'
  }
];


let that;
let myroute;
@inject(Shared, Router)
export class List {

  constructor(shared,router){
    that  = shared
    myroute = router
  }

  attached() {
    $('#Grid').ejGrid({
      dataSource: data,
      recordDoubleClick: this.rowClicked
    });
  }
  rowClicked(e){
    myroute.navigateToRoute('detail', { id: e.data.id })
   that.val = e.data
  }
}
