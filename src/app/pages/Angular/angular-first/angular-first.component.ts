import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { Order, OrdersComponent } from './services/advanced-data';

@Component({
  selector: 'app-angular-first',
  templateUrl: './angular-first.component.html',
  styleUrls: ['./angular-first.component.scss'],
})
export class AngularFirstComponent implements OnInit {
  orders: any[];
  category: any;
  cpuList: any;
  motherBoardList: any;
  videoCardList: any;
  memoryList: any;
  showSpinner = false;

  constructor(private orderServ: OrdersComponent, private dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.showSpinner = true;

    this.orderServ.getDataMemoryList().subscribe((res) => {
      this.memoryList = res;
    });

    this.orderServ.getDataOrders().subscribe(
      (res: any) => {
        if (res) {
          this.orders = res;
          this.showSpinner = false;
        } else {
          this.showSpinner = false;
        }
      },
      (err) => {
        this.showSpinner = false;
      }
    );

    this.category = this.orderServ.getCategories();
    this.cpuList = this.orderServ.getCPUList();
    this.motherBoardList = this.orderServ.getMotherBoardList();
    this.videoCardList = this.orderServ.getVideoCardList();
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
      if (newOrder) {
        this.showSpinner = true;
        this.orderServ.addDataOrders(newOrder).subscribe(
          (res) => {
            this.getData();
          },
          (err) => {
            this.showSpinner = false;
          }
        );
      }
    });
  }

  editOrder(order: any) {
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
      if (res) {
        this.showSpinner = true;
        this.orderServ.updateDataOrders(order.id, res).subscribe(
          (resp) => {
            this.getData();
          },
          (err) => {
            this.showSpinner = false;
          }
        );
      }
    });
  }

  deleteOrder(order: any) {
    this.showSpinner = true;
    this.orderServ.removeDataOrders(order.id).subscribe(
      (resp) => {
        Swal.fire({
          title: 'Success Deleting an order',
          icon: 'success',
        }).then(() => {
          this.getData();
        });
      },
      (err) => {
        this.showSpinner = false;
      }
    );
  }
}
