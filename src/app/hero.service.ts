import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  private heroes = [
    {id: 11, name: 'mr.vain'},
    {id: 12, name: 'nero'},
    {id: 13, name: 'bombastus'}
  ];

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }
}
