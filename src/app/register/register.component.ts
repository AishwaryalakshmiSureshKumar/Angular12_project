import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() {}

  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }

  // onEmailChange(event: any) {
  //   this.email = event.target.value;
  // }

  // onPasswordChange(event: any){
  //   this.password = event.target.value;
  // }

  // onContactChange(event: any){
  //   this.contact = event.target.value;
  // }

  registerUser(name:string, email:string, password:string, contact:string) {
    console.log(name, email, password, contact)
    // const uploadData = new FormData();
    // uploadData.append('name', this.name);
    // uploadData.append('email', this.email);
    // uploadData.append('password', this.password);
    // uploadData.append('contact', this.contact);
    // this.http.post('http://127.0.0.1:8000/books/', uploadData).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
  }
}