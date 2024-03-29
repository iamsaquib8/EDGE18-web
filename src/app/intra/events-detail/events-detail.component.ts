import { Component, OnInit } from '@angular/core';
import { IntraEventsService } from '../intra-events.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  subevent: {
    _CategoryName: string;
    img: string;
    _Quote: string;
    _MAPS: any[];
    _ProblemDescription: string;
    _EventRules: string[];
    _Specification: string[];
    _Rounds: string[];
    _Scoring: string[]; _Coordinators: ({
      name: string;
      phn: string;
  })[]
  };

   _rules: string[];
   subeventName: string;
  
   event: string;
   _contacts: ({
    name:  string;
    phn: string;
})[];
   _specs: string[];
   _scores: string[];
   _map: string[];
   _round : string[];

  constructor(private route: ActivatedRoute, private _events: IntraEventsService, private router: Router) { }

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
    this._map = this.subevent._MAPS;
    this._round = this.subevent._Rounds;
  }
}
