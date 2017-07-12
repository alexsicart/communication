import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {

  event: EventEmitter<String> = new EventEmitter();

  constructor() { }

}
