import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomLibraryService {

  constructor() { }

  getTitle() {
    return of('This is the title');
  }
  
}
