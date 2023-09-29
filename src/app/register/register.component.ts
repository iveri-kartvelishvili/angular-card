import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../app.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @Output()
  addPersonEmitter:EventEmitter<Person> = new EventEmitter();
  myperson:Person = new Person()
  ngOnInit(): void {
  }
  save(){
    this.addPersonEmitter.emit(this.myperson)
    this.myperson = new Person()
  }

}
