import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss'],
})
export class EditOrderComponent implements OnInit {
  editForm: FormGroup;
  customerNameField: FormControl;
  emailField: FormControl;
  songsField: FormArray;
  selectedCategory: any = [];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.initForm();
    this.patchValueForm()
  }

  initForm() {
    this.editForm = this.fb.group({
      customerName:[null, Validators.required],
      email: [null, [Validators.required, Validators.email,]],
      items: this.fb.array([]),
    });
  }

  get FormControlitems() {
    return this.editForm.get('items') as FormArray;
  }

  patchValueForm() {
    const { customerName, email, items } = this.data.order;
    const data = {
      customerName,
      email,
      items
    }

    items.forEach(element => {
      this.selectedCategory.push(this.getCategory(element.category));
      this.FormControlitems.push(this.createItemForm());
    });
    
    this.editForm.patchValue(data);
  }

  onAddOrderForm() {
    this.FormControlitems.push(this.createItemForm());
  }


  getCategory(category: string) {
    const {
      cpuList,
      motherBoardList,
      videoCardList,
      memoryList,
    } = this.data.getData;
    switch (category) {
      case 'CPU':
        return cpuList;
      case 'Motherboard':
        return motherBoardList;
      case 'Video Card':
        return videoCardList;
      case 'Memory':
        return memoryList;
    }
  }


  onDeleteOrderForm(index: any) {
    this.FormControlitems.removeAt(index);
  }

  createItemForm(): FormGroup {
    return this.fb.group({
      category: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
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

  updateOrder(editForm) {
    Swal.fire(
      'Orders Updated',
      'Dont hestitate to add more in your order',
      'success'
    );
    const totalPrices = this.calculatePrices(editForm.value);
    editForm.value['totalPrice'] = totalPrices;
    this.dialogRef.close(editForm.value);
  }

  onClose() {
    this.dialogRef.close();
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
