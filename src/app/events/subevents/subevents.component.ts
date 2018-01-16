import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyeventsService } from '../myevents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subevents',
  templateUrl: './subevents.component.html',
  styleUrls: ['./subevents.component.css']
})
export class SubeventsComponent implements OnInit {

  private subevents: {
    _CategoryName: string;
    img: string;
    _ProblemDescription: string;
    _EventRules: string[];
    _Specification: string[],
    _Scoring: string[],
    _Coordinators: string[];
}[] = [];

  private eventName: string;
  constructor(private router: Router, private route: ActivatedRoute, private _events: MyeventsService) { }

  ngOnInit() {
    this.eventName = this.route.snapshot.params['event'];
    this.subevents = this._events.getCategory(this.eventName);
  }

   onSelectSubEvent(subevent) {

     this.router.navigate(['/events', this.eventName, subevent._CategoryName]);
   }
}
