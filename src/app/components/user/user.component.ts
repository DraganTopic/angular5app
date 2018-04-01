import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //Properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };

  constructor() { 
   //this.sayHello();
   console.log(this.age);
   this.hasBirthday();
   console.log(this.age);

  }

  sayHello(){
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday(){
    this.age +=1;
  }

  ngOnInit() {
  }

}
