import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyeventsService } from './myevents.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:  {
    name: string;
    img: string;
    categories: {
        _CategoryName: string;
        img: string;
        _ProblemDescription: string;
        _EventRules: string[];
        _Coordinators: string[];
    }[];
}[]
 = [];

  constructor(private router: Router, private _events: MyeventsService) { }

  ngOnInit() {
    this.events = this._events.MyEvents;
  }

  onSelectEvent(event) {
    this.router.navigate(['/events', event.name]);
  }
}
