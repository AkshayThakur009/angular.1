import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

name:string="Akshay";

a:number=0;
b:number=0;






  constructor() { }

  ngOnInit(): void { }

}
