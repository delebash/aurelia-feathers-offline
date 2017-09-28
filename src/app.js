import {PLATFORM} from 'aurelia-pal';
import '../sass/index.scss'

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
     {
        route: ['','customer-list'],
        name: 'customer-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/customer-list'),
        nav: true,
        title: 'customer-list'
      },
      {
        route: 'customer-detail',
        name: 'customer-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/customer-detail'),
        nav: true,
        title: 'customer-detail'
      },
     {
        route: 'employee-list',
        name: 'employee-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/employee-list'),
        nav: true,
        title: 'employee-list'
      },
      {
        route: 'employee-detail',
        name: 'employee-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/employee-detail'),
        nav: true,
        title: 'employee-detail'
      },
     {
        route: 'employee-privilege-list',
        name: 'employee-privilege-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/employee-privilege-list'),
        nav: true,
        title: 'employee-privilege-list'
      },
      {
        route: 'employee-privilege-detail',
        name: 'employee-privilege-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/employee-privilege-detail'),
        nav: true,
        title: 'employee-privilege-detail'
      },
     {
        route: 'inventory-transaction-list',
        name: 'inventory-transaction-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/inventory-transaction-list'),
        nav: true,
        title: 'inventory-transaction-list'
      },
      {
        route: 'inventory-transaction-detail',
        name: 'inventory-transaction-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/inventory-transaction-detail'),
        nav: true,
        title: 'inventory-transaction-detail'
      },
     {
        route: 'inventory-transaction-type-list',
        name: 'inventory-transaction-type-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/inventory-transaction-type-list'),
        nav: true,
        title: 'inventory-transaction-type-list'
      },
      {
        route: 'inventory-transaction-type-detail',
        name: 'inventory-transaction-type-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/inventory-transaction-type-detail'),
        nav: true,
        title: 'inventory-transaction-type-detail'
      },
     {
        route: 'invoice-list',
        name: 'invoice-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/invoice-list'),
        nav: true,
        title: 'invoice-list'
      },
      {
        route: 'invoice-detail',
        name: 'invoice-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/invoice-detail'),
        nav: true,
        title: 'invoice-detail'
      },
     {
        route: 'order-list',
        name: 'order-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/order-list'),
        nav: true,
        title: 'order-list'
      },
      {
        route: 'order-detail',
        name: 'order-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/order-detail'),
        nav: true,
        title: 'order-detail'
      },
     {
        route: 'orders-status-list',
        name: 'orders-status-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/orders-status-list'),
        nav: true,
        title: 'orders-status-list'
      },
      {
        route: 'orders-status-detail',
        name: 'orders-status-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/orders-status-detail'),
        nav: true,
        title: 'orders-status-detail'
      },
     {
        route: 'orders-tax-status-list',
        name: 'orders-tax-status-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/orders-tax-status-list'),
        nav: true,
        title: 'orders-tax-status-list'
      },
      {
        route: 'orders-tax-status-detail',
        name: 'orders-tax-status-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/orders-tax-status-detail'),
        nav: true,
        title: 'orders-tax-status-detail'
      },
     {
        route: 'order-detail-list',
        name: 'order-detail-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/order-detail-list'),
        nav: true,
        title: 'order-detail-list'
      },
      {
        route: 'order-detail-detail',
        name: 'order-detail-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/order-detail-detail'),
        nav: true,
        title: 'order-detail-detail'
      },
     {
        route: 'order-details-status-list',
        name: 'order-details-status-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/order-details-status-list'),
        nav: true,
        title: 'order-details-status-list'
      },
      {
        route: 'order-details-status-detail',
        name: 'order-details-status-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/order-details-status-detail'),
        nav: true,
        title: 'order-details-status-detail'
      },
     {
        route: 'privilege-list',
        name: 'privilege-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/privilege-list'),
        nav: true,
        title: 'privilege-list'
      },
      {
        route: 'privilege-detail',
        name: 'privilege-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/privilege-detail'),
        nav: true,
        title: 'privilege-detail'
      },
     {
        route: 'product-list',
        name: 'product-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/product-list'),
        nav: true,
        title: 'product-list'
      },
      {
        route: 'product-detail',
        name: 'product-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/product-detail'),
        nav: true,
        title: 'product-detail'
      },
     {
        route: 'purchase-order-list',
        name: 'purchase-order-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/purchase-order-list'),
        nav: true,
        title: 'purchase-order-list'
      },
      {
        route: 'purchase-order-detail',
        name: 'purchase-order-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/purchase-order-detail'),
        nav: true,
        title: 'purchase-order-detail'
      },
     {
        route: 'purchase-order-detail-list',
        name: 'purchase-order-detail-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/purchase-order-detail-list'),
        nav: true,
        title: 'purchase-order-detail-list'
      },
      {
        route: 'purchase-order-detail-detail',
        name: 'purchase-order-detail-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/purchase-order-detail-detail'),
        nav: true,
        title: 'purchase-order-detail-detail'
      },
     {
        route: 'purchase-order-status-list',
        name: 'purchase-order-status-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/purchase-order-status-list'),
        nav: true,
        title: 'purchase-order-status-list'
      },
      {
        route: 'purchase-order-status-detail',
        name: 'purchase-order-status-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/purchase-order-status-detail'),
        nav: true,
        title: 'purchase-order-status-detail'
      },
     {
        route: 'sales-report-list',
        name: 'sales-report-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/sales-report-list'),
        nav: true,
        title: 'sales-report-list'
      },
      {
        route: 'sales-report-detail',
        name: 'sales-report-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/sales-report-detail'),
        nav: true,
        title: 'sales-report-detail'
      },
     {
        route: 'shipper-list',
        name: 'shipper-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/shipper-list'),
        nav: true,
        title: 'shipper-list'
      },
      {
        route: 'shipper-detail',
        name: 'shipper-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/shipper-detail'),
        nav: true,
        title: 'shipper-detail'
      },
     {
        route: 'string-list',
        name: 'string-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/string-list'),
        nav: true,
        title: 'string-list'
      },
      {
        route: 'string-detail',
        name: 'string-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/string-detail'),
        nav: true,
        title: 'string-detail'
      },
     {
        route: 'supplier-list',
        name: 'supplier-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/supplier-list'),
        nav: true,
        title: 'supplier-list'
      },
      {
        route: 'supplier-detail',
        name: 'supplier-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/supplier-detail'),
        nav: true,
        title: 'supplier-detail'
      },
    ]);

    this.router = router;
  }
}
