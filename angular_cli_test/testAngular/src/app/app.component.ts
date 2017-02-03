import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-detail/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private heroService: HeroService){}
  title = 'Tour of Heroes';
  // hero: Hero = {
  //   id: 1,
  //   name : 'Windstorm'
  // }
  heroes:Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
