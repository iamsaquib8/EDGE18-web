import { Component, OnInit } from '@angular/core';
import { IntraEventsService } from './intra-events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intra',
  templateUrl: './intra.component.html',
  styleUrls: ['./intra.component.css']
})
export class IntraComponent implements OnInit {
  events:  {
    name: string;
    img: string;
    categories: {
        _CategoryName: string;
        img: string;
        _ProblemDescription: string;
        _EventRules: string[];
         _Coordinators: ({
          name: string;
          phn: string;
      })[]
    }[];
}[]
 = [];
  constructor(
    private _events: IntraEventsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.events = this._events.MyEvents;
  }
  onSelectEvent(event) {
    this.router.navigate(['/intra', event.name]);
  }
}
