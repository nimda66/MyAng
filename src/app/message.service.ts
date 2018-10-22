import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  mesages: string[] = [];

  constructor() {
  }

  add(message: string) {
    this.mesages.push(message);
  }

  clear() {
    this.mesages = [];
  }
}
