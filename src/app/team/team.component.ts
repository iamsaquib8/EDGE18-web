import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team = [{img: 'team-1', name: 'Abhishek Singh', desig: 'Convener', link: ``},
          {img: 'team-2', name: 'Ayush Tiwari', desig: 'Co-Convener', link: `https://www.facebook.com/ayushmantiwari.15`},
          {img: 'team-3', name: 'Deep Arora', desig: 'Co-Convener', link: `https://www.facebook.com/deep.arora.127`},
          {img: 'team-6', name: 'Shuvojit Ray Chaudhuri', desig: 'Sponsorship Head', link:`https://www.facebook.com/shuvojit.chaudhuri`},
          {img: 'team-7', name: 'Harsh H Sheth', desig: 'Treasurer', link:`https://www.facebook.com/starringharsh`},
          {img: 'team-9', name: 'Ashif Iqbal', desig: 'Administrative Head', link: `https://www.facebook.com/AshifIqbal2911`},
          {img: 'team-8', name: 'Md Mukarram Qureshi', desig: 'Resource Head', link: `https://www.facebook.com/mdmukarram.quraishi`},
          {img: 'team-4', name: 'Neha Roy', desig: 'Publicity and Outreach', link: `https://www.facebook.com/neha.roy.1848`},
          {img: 'team-5', name: 'Priya Chaudhari', desig: 'PR Head', link:`https://www.facebook.com/priya.chaudhuri.9`},
          ];
    webd= [{img: 'team-10', name: 'IamSaquib', link: `https://www.facebook.com/iamsaquib007`},
    {img: 'team-11', name: 'Sanjeev Kumar', link: `https://www.facebook.com/profile.php?id=100006389324573`},
    {img: 'team-12', name: 'Edge Designs', link: `https://www.facebook.com/Gx.Edg`}
    ];
  constructor() { }

  ngOnInit() {
  }

}