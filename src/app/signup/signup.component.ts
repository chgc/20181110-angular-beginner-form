import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form;
  constructor() {}

  ngOnInit() {}

  submitForm(f) {
    // 使用 ViewChild 取得 Form 實體
    // console.log(this.form);

    // 透過傳值的方式取得 Form實體
    console.log(f);
  }
}
