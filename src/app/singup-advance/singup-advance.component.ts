import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

function ConfirmEmailCheck(group) {
  if (group.get('email').value !== group.get('confirmEmail').value) {
    return { emailNotMatch: true };
  }
  return null;
}

@Component({
  selector: 'app-singup-advance',
  templateUrl: './singup-advance.component.html',
  styleUrls: ['./singup-advance.component.css']
})
export class SingupAdvanceComponent implements OnInit {
  // formData = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl(''),
  //   confirmEmail: new FormControl({ value: '', disabled: true })
  // });

  formData = this.fb.group({
    name: ['', [Validators.required]],
    emailGroup: this.fb.group(
      {
        email: '',
        confirmEmail: [{ value: '', disabled: false }]
      },
      { validator: [ConfirmEmailCheck] }
    )
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 可能使用情境
    // this.http.get('productApi/1').subscribe(productInfo=>{
    //   this.fb.group(productInfo);
    // })
  }
}
