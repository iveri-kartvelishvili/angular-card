import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  myp:Person = new Person;

  ngOnInit(): void {
  }

}
