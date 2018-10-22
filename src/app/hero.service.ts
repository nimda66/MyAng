import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  private heroes = [
    {id: 11, name: 'mr.vain'},
    {id: 12, name: 'nero'},
    {id: 13, name: 'bombastus'}
  ];

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }
}
