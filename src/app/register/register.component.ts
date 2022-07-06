import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users={
    Name:'',
    Email:'',
    Address:'',
    Contact:'',
    WhatsappContact:'',
    Password:'',
    ConfirmPassword:''
  }
  constructor() { }

  ngOnInit(): void {
  }

oneclick():void{
  console.log("successfull");
  alert("Successfully Done!!!!")

}
}
