import { Component, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  form: FormGroup;
  @Output() userChange = new EventEmitter<any>();
  users: any[] = [];

  get cats(): FormArray {
    return this.form.get('cats') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      last_name: [''],
      age: [0],
      first_name: [''],
      address: this.fb.group({
        number: [''],
        street: [''],
        ville: [''],
      }),
      cats: this.fb.array([this.fb.control('')]),
    });
  }

  addCats(): void {
    this.cats.push(this.fb.control(''));
  }

  onSubmit(): void {
    // this.users.push(this.form.value);
    this.userChange.emit(this.form.value);
  }
}
