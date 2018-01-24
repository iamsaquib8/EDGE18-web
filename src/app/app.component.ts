import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
  title = 'app';
}
