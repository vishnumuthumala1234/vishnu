import { EventService } from './event.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class EventsResolver implements Resolve<any>{
constructor(private eventService:EventService){
   
}
    resolve(route:ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);    
    }
}