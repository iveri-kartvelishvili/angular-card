import { Component } from '@angular/core';
import { Person } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-card';
  arr:any[] = []
  myperson:Person[] = []

save(event:Person){
   this.arr.push(event)
}
}
