const feathers = require('feathers-client');
const io = require('socket.io-client');
const Realtime = require('feathers-offline-realtime');

const step1 = require('./1-third-party');
const step2 = require('./2-reconnect');

const feathersApp = feathers()
  .configure(feathers.socketio(io('http://localhost:3030')));

const customerRemote = feathersApp.service('/customers');
const customerRealtime = new Realtime(customerRemote);

export class GetFeathers {

  getdata() {
    this.sync()
  }

  async sync() {
    await customerRealtime.connect()
    await step1(feathersApp, customerRealtime);
    await step2(feathersApp, customerRealtime);
    console.log('===== Example finished.');

  }
}
