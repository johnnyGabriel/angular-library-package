import { Component } from '@angular/core';
import { CustomLibraryService } from 'custom-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title$ = this.customLib.getTitle();

  constructor(private customLib: CustomLibraryService) {}
  
}
