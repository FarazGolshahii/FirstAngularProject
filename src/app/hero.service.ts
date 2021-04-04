import { HEROES } from './FackHeroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]>{
    const heroes=of(HEROES);
    this.messageService.add('HeroService: fetched Heroes');
    return heroes;
  }
  constructor(private messageService:MessageService) { }
}
