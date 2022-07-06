import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users={
  Email:'',
  Password:''


}
// istrue:
// boolean=true;

// demo88={
// name:'akshay',
// mail:'akshaythakur150208'
// }





  constructor() { }

  ngOnInit(): void {
  }
oneclick():void{
  console.log("successfull");
  alert("Successfully Done!!!!")

}
}
