import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanosService {
  nums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  constructor() {}

  convertToRoman(arabicNumber: number): string {
    if (arabicNumber <= 0 || arabicNumber > 1000) {
      return null;
    }
    let romanNumber = '';
    let aNumber = arabicNumber;
    for (const romanKey in this.nums) {
      if (this.nums.hasOwnProperty(romanKey)) {
        while (aNumber >= this.nums[romanKey]) {
          romanNumber += romanKey;
          aNumber -= this.nums[romanKey];
        }
      }
    }
    return romanNumber;
  }
}
