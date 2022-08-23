import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/events-list-resolver.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { AuthService } from './user/auth.service';
import { CommonModule } from '@angular/common';
import { EventsResolver } from './events/shared/event-resolver.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,DurationPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,FormsModule
  
  ],
  
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    EventsResolver,
  
    {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState

    }

  ],

  bootstrap: [AppComponent]
})


export class AppModule { }



function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
