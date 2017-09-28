import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework'

@inject(Shared)
export class Detail {

  constructor(shared) {
    this.shared = shared
    this.contact = {};
  }

  attached() {

    this.contact = this.shared.val
    // console.log(this.contact)
  }
}
