import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaEventService } from './mega-event.service';

@Component({
  selector: 'app-mega-event',
  templateUrl: './mega-event.component.html',
  styleUrls: ['./mega-event.component.css']
})
export class MegaEventComponent implements OnInit {

  mega_event: {
    name: string;
    img: string;
    about: string;
    phase: string[];
    guests: any[];
}[] = [];

  constructor(private router: Router, private _megaEvent: MegaEventService) { }

  ngOnInit() {
    this.mega_event = this._megaEvent.Event;
  }

  onSelectEvent(event) {

    this.router.navigate(['/mega-events', event.name]);
  }
}
