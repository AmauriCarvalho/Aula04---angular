import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult-table',
  templateUrl: './mult-table.component.html',
  styleUrls: ['./mult-table.component.css']
})
export class MultTableComponent implements OnInit {
  n = 2;

  constructor() { }

  ngOnInit() {
  }

  getMultiplicationTable(){
    let list: number[] = [];
    for(let i = 1; i<=10; i++){
      list.push(this.n * 1);
    }
    return list;
  }
}