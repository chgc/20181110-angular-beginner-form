import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-singup-advance',
  templateUrl: './singup-advance.component.html',
  styleUrls: ['./singup-advance.component.css']
})
export class SingupAdvanceComponent implements OnInit {
  formData = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    confirmEmail: new FormControl()
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
