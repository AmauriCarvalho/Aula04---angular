import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  n = Math.round(Math.random() * 100);

  constructor() { }

  ngOnInit() {
  }

}