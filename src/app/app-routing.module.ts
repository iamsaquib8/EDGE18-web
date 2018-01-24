import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { MegaEventComponent } from './mega-event/mega-event.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { SubeventsComponent } from './events/subevents/subevents.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { IntraComponent } from './intra/intra.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { CampusAmbassadorComponent } from './campus-ambassador/campus-ambassador.component';
import { SubEventComponent } from './mega-event/sub-event/sub-event.component';
import { AboutComponent } from './about/about.component';
import { SponsorshipsComponent } from './sponsorships/sponsorships.component';

const appRoutes: Routes = [
      {path:'', redirectTo: 'home',pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'events', component: EventsComponent},
      {path: 'events/:event', component: SubeventsComponent},
      {path: 'events/:event/:id', component: EventDetailComponent},
      {path: 'mega-events', component: MegaEventComponent},
      {path: 'mega-events/:name', component: SubEventComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'sponsor', component: SponsorComponent},
      {path: 'team', component: TeamComponent},
      {path: 'about', component: AboutComponent},
      {path: 'accomodation', component: AccomodationComponent},
      {path: 'intra', component: IntraComponent},
      {path: 'merchandise', component: MerchandiseComponent},
      {path: 'campus-ambassador', component: CampusAmbassadorComponent},
      {path: 'sponsorships', component: SponsorshipsComponent},
      { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
