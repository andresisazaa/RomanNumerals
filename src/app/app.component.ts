import { Component } from '@angular/core';
import { RomanosService } from './romanos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  arabicNumber: number;
  romanNumber = '';
  constructor(private romanosService: RomanosService) {}

  onInputChange() {
    this.romanNumber = this.romanosService.convertToRoman(this.arabicNumber);
  }
}
