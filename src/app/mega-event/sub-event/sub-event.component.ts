  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MegaEventService } from '../mega-event.service';

@Component({
  selector: 'app-sub-event',
  templateUrl: './sub-event.component.html',
  styleUrls: ['./sub-event.component.css']
})
export class SubEventComponent implements OnInit {

  mega_event: string;

  event: {
    name: string;
    img: string;
    about: string;
      phase: string[];
    contacts: {name:string; phn: string;}[];
  };


  _contacts: {name:string; phn: string;}[];
  constructor(private route: ActivatedRoute, private _mega: MegaEventService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mega_event = params['name'];
    });
    this.event = this._mega.getCategory(this.mega_event);
    this._contacts = this.event.contacts;

  }

}
