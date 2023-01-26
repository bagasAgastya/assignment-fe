import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { Order, OrdersComponent } from './services/advanced-data';

@Component({
  selector: 'app-angular-first',
  templateUrl: './angular-first.component.html',
  styleUrls: ['./angular-first.component.scss'],
})
export class AngularFirstComponent implements OnInit {
  orders: Order[];
  category: any;
  cpuList: any;
  motherBoardList: any;
  videoCardList: any;
  memoryList: any;
  constructor(private orderServ: OrdersComponent, private dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.orders = this.orderServ.getOrders();
    this.category = this.orderServ.getCategories();
    this.cpuList = this.orderServ.getCPUList();
    this.motherBoardList = this.orderServ.getMotherBoardList();
    this.videoCardList = this.orderServ.getVideoCardList();
    this.memoryList = this.orderServ.getMemoryList();
  }

  addNewOrder() {
    const dialog = this.dialog.open(AddOrderComponent, {
      width: '90vh',
      data: {
        category: this.category,
        cpuList: this.cpuList,
        motherBoardList: this.motherBoardList,
        videoCardList: this.videoCardList,
        memoryList: this.memoryList,
      },
    });

    dialog.afterClosed().subscribe((newOrder) => {
      if (newOrder) this.orders.push(newOrder);
    });
  }

  editOrder(order: Order) {
    const dialog = this.dialog.open(EditOrderComponent, {
      width: '90vh',
      data: {
        order: order,
        getData: {
          category: this.category,
          cpuList: this.cpuList,
          motherBoardList: this.motherBoardList,
          videoCardList: this.videoCardList,
          memoryList: this.memoryList,
        },
      },
    });

    dialog.afterClosed().subscribe((res) => {
      const foundIndex = this.orders.findIndex((x) => x.email == res.email);
      this.orders[foundIndex] = res;
    });
  }

  deleteOrder(order: Order) {
    this.orders = this.orders.filter((p) => p.email != order.email);
  }
}
