import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { IntraEventsService } from '../intra-events.service';

@Component({
  selector: 'app-intra-events',
  templateUrl: './intra-events.component.html',
  styleUrls: ['./intra-events.component.css']
})
export class IntraEventsComponent implements OnInit {
  subevents: {
    _CategoryName: string;
    img: string;
    _Quote: string;
    _ProblemDescription: string;
    _EventRules: string[];
    _Specification: string[],
    _Scoring: string[], _Coordinators: ({
      name: string;
      phn: string;
  })[]
}[] = [];

  eventName: string;
  constructor(private router: Router, private route: ActivatedRoute, private _events: IntraEventsService) { }

  ngOnInit() {
    this.eventName = this.route.snapshot.params['event'];
    this.subevents = this._events.getCategory(this.eventName);
  }

   onSelectSubEvent(subevent) {

     this.router.navigate(['/intra', this.eventName, subevent._CategoryName]);
   }
}
