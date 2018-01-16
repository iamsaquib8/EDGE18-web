import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyeventsService } from '../myevents.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  private subevent: {
    _CategoryName: string;
    img: string;
    _ProblemDescription: string;
    _EventRules: string[];
    _Specification: string[];
    _Scoring: string[];
    _Coordinators: string[];
  };

  private _rules: string[];
  private subeventName: string;
  private event: string;
  private _contacts: string[];
  private _specs: string[];
  private _scores: string[];

  constructor(private route: ActivatedRoute, private _events: MyeventsService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.subeventName = params['id'];
    });
    this.event = this.route.snapshot.params['event'];
    this.subevent = this._events.getSubEventCategory(this.event, this.subeventName);
    this._specs = this.subevent._Specification;
    this._rules = this.subevent._EventRules;
    this._scores = this.subevent._Scoring;
    this._contacts = this.subevent._Coordinators;
  }
}
