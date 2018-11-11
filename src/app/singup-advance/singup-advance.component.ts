import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-singup-advance',
  templateUrl: './singup-advance.component.html',
  styleUrls: ['./singup-advance.component.css']
})
export class SingupAdvanceComponent implements OnInit {
  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    confirmEmail: new FormControl({ value: '', disabled: true })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
