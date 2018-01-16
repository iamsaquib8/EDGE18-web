import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  private acco:string = `Accomodation is being made available for participants from outside Kolkata,
   on a first-come-first-serve basis. If you want to avail accomodation please fill up the form here.
   If you have any questions regarding the same, please contact the undersigned.`;
  constructor() { }

  ngOnInit() {
  }

}
