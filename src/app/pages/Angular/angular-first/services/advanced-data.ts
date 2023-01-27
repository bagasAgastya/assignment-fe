import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Order {
  totalPrice: number;
  customerName: string;
  email: string;
  items: Item[];
}

export interface Item {
  category: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersComponent {
  constructor(private httpClient: HttpClient) {}

  getDataMemoryList() {
    return this.httpClient.get(`${environment.endPoint}/memoryList`);
  }

  getDataOrders() {
    return this.httpClient.get(`${environment.endPoint}/order`);
  }

  addDataOrders(data) {
    return this.httpClient.post(`${environment.endPoint}/order`, data);
  }

  updateDataOrders(id, data) {
    return this.httpClient.put(`${environment.endPoint}/order/${id}`, data);
  }

  removeDataOrders(id) {
    return this.httpClient.delete(`${environment.endPoint}/order/${id}`);
  }

  categories = ['CPU', 'Motherboard', 'Video Card', 'Memory'];

  cpuList: Item[] = [
    { category: 'CPU', name: 'AMD Ryzen 5 2600', price: 117 },
    { category: 'CPU', name: 'Intel Core i5-9600K', price: 229 },
    { category: 'CPU', name: 'AMD RYZEN 5 3600', price: 194 },
  ];

  motherBoardList: Item[] = [
    { category: 'Motherboard', name: 'MSI PRO Z390-A', price: 129 },
    { category: 'Motherboard', name: 'ASUS PRIME B360M-A', price: 84 },
    { category: 'Motherboard', name: 'ASRock B450M PRO4 AM4', price: 79 },
  ];

  videoCardList: Item[] = [
    { category: 'Video Card', name: 'ZOTAC GeForce GTX 1060', price: 209 },
    { category: 'Video Card', name: 'MSI Radeon RX 580', price: 189 },
    { category: 'Video Card', name: 'GIGABYTE GeForce RTX 2070', price: 499 },
  ];

  // [
  //   {
  //    "category": "Memory",
  //    "name": "CORSAIR Vengeance RGB Pro 16GB",
  //    "price": 97
  //   },
  //   {
  //    "category": "Memory",
  //    "name": "G.SKILL TridentZ RGB Series 16GB",
  //    "price": 86
  //   },
  //   {
  //    "category": "Memory",
  //    "name": "G.SKILL Ripjaws Series 8GB",
  //    "price": 42
  //   }
  //  ]

  getCategories() {
    return this.categories;
  }

  getCPUList() {
    return this.cpuList;
  }

  getMotherBoardList() {
    return this.motherBoardList;
  }

  getVideoCardList() {
    return this.videoCardList;
  }
}
