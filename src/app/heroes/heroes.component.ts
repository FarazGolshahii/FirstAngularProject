import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes : Hero[]=[];
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: selectred hero id ${hero.id}`);
  }
  constructor(private heroService:HeroService,private messageService:MessageService) {}
  ngOnInit(){
    this.getHeroes();
  }
}
