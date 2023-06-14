import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  productForm: FormGroup;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form submitted!');
      console.log('Product Name:', this.productForm.value.name);
      console.log('Description:', this.productForm.value.description);
      console.log('Price:', this.productForm.value.price);
      this.productForm.reset();
    }
  }
}
