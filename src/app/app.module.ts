import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { MegaEventComponent } from './mega-event/mega-event.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TeamComponent } from './team/team.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MyeventsService } from './events/myevents.service';
import { SubeventsComponent } from './events/subevents/subevents.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { IntraComponent } from './intra/intra.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { CampusAmbassadorComponent } from './campus-ambassador/campus-ambassador.component';
import { MegaEventService } from './mega-event/mega-event.service';
import { SubEventComponent } from './mega-event/sub-event/sub-event.component';
import { AboutComponent } from './about/about.component';
import { SponsorshipsComponent } from './sponsorships/sponsorships.component';
import { EventsDetailComponent } from './intra/events-detail/events-detail.component';
import { IntraEventsComponent } from './intra/intra-events/intra-events.component';
import { IntraEventsService } from './intra/intra-events.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    FooterComponent,
    MegaEventComponent,
    ScheduleComponent,
    SponsorComponent,
    TeamComponent,
    HomeComponent,
    SubeventsComponent,
    EventDetailComponent,
    AccomodationComponent,
    IntraComponent,
    MerchandiseComponent,
    CampusAmbassadorComponent,
    SubEventComponent,
    AboutComponent,
    SponsorshipsComponent,
    EventsDetailComponent,
    IntraEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyeventsService, MegaEventService, IntraEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
