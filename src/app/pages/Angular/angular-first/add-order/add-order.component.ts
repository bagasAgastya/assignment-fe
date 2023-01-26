import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  addForm: FormGroup;
  customerNameField = new FormControl('', Validators.required);
  emailField = new FormControl('', [Validators.required, Validators.email]);
  selectedCategory: any = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      customerName: this.customerNameField,
      email: this.emailField,
      items: this.fb.array([this.createItemForm()]),
    });
  }

  createItemForm(): FormGroup {
    return this.fb.group({
      category: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  onAddOrderForm() {
    this.FormControlitems.push(this.createItemForm());
  }

  onDeleteOrderForm(index: any) {
    this.FormControlitems.removeAt(index);
  }

  onClose() {
    this.dialogRef.close();
  }

  get FormControlitems() {
    return this.addForm.get('items') as FormArray;
  }

  getCategory(category: string) {
    switch (category) {
      case 'CPU':
        return this.data.cpuList;
      case 'Motherboard':
        return this.data.motherBoardList;
      case 'Video Card':
        return this.data.videoCardList;
      case 'Memory':
        return this.data.memoryList;
    }
  }

  onChange(index: number) {
    const item = this.FormControlitems.get(index.toString());
    const category = item.get('category').value;
    this.selectedCategory[index] = this.getCategory(category);

    item.get('name').setValue('');
    item.get('price').setValue(0);
  }

  onChangeItem(index: string, itemChange: MatSelectChange) {
    this.selectedCategory[+index].forEach((item) => {
      if (item.name === itemChange.value) {
        this.FormControlitems.get(index).get('price').setValue(item.price);
      }
    });
  }

  addNewOrder(addForm) {
    Swal.fire('New Order Added', 'Thanks for ordering, see youu', 'success');
    const totalPrices = this.calculatePrices(addForm.value);
    addForm.value['totalPrice'] = totalPrices;
    this.dialogRef.close(addForm.value);
  }

  calculatePrices(value: any) {
    let totalPrices = 0;
    for (let i in value.items) {
      {
        totalPrices += value.items[i].price;
      }
    }
    return totalPrices;
  }
}
