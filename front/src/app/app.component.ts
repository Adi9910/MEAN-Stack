import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  value = '';
  value1 = '';
  newValue: string = '';
  @Input() items: item[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
    { name: 'Four', val: 3 },
    { name: 'Five', val: 3 },
  ];
  selectedValue1: string = 'One';
  selectedValue2: string = 'One';
  selectedValue3: string = 'One';
  selectedValue4: string = 'One';


  myObs = new Observable((observer)=>{
    console.log('start');
    setTimeout(()=>{observer.next("1")},1000)
    setTimeout(()=>{observer.next("2")},2000)
    setTimeout(()=>{observer.next("3")},3000)
    setTimeout(()=>{observer.next("4")},4000)
    setTimeout(()=>{observer.next("5")},5000)
  });

  constructor() {}

  ngOnInit(): void {
    this.myObs.subscribe((val)=>{
      console.log(val)
    })
  }
}
