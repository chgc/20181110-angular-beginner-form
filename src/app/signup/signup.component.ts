import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form;
  city = '';
  town;
  cityTownAreaSource;
  cityOptions = [];
  townOptions = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('/assets/data/cityarea.json').subscribe(data => {
      console.log(data);
      this.cityTownAreaSource = data;
      this.cityOptions = Object.keys(this.cityTownAreaSource);
    });
  }

  getTownOption(city) {
    console.log(city);
    this.townOptions = Object.entries(this.cityTownAreaSource[city]);
  }

  getZipcodeOptions(townZipcode) {
    console.log(townZipcode);
  }

  submitForm(f) {
    // 使用 ViewChild 取得 Form 實體
    // console.log(this.form);

    // 透過傳值的方式取得 Form實體
    console.log(f);
  }
}
