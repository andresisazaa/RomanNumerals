import { TestBed } from '@angular/core/testing';

import { RomanosService } from './romanos.service';

describe('RomanosService', () => {
  let service: RomanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a converToRoman function', () => {
    expect(service.convertToRoman).toBeDefined();
  });

  it('converToRoman should be a function', () => {
    expect(service.convertToRoman).toBeInstanceOf(Function);
  });

  it('converToRoman should return a string', () => {
    expect(service.convertToRoman(1)).toBeInstanceOf(String);
  });

  it('should not convert 0 to roman number', () => {
    expect(service.convertToRoman(0)).toBeNull();
  });

  it('should not convert -1 to roman number', () => {
    expect(service.convertToRoman(-1)).toBeNull();
  });

  it('should not convert 1001 to roman number', () => {
    expect(service.convertToRoman(1001)).toBeNull();
  });

  it('should convert 1 to roman number', () => {
    expect(service.convertToRoman(1)).toEqual('I');
  });

  it('should convert 2 to roman number', () => {
    expect(service.convertToRoman(2)).toEqual('II');
  });

  it('should convert 3 to roman number', () => {
    expect(service.convertToRoman(3)).toEqual('III');
  });

  it('should convert 4 to roman number', () => {
    expect(service.convertToRoman(4)).toEqual('IV');
  });

  it('should convert 5 to roman number', () => {
    expect(service.convertToRoman(5)).toEqual('V');
  });

  it('should have a nums attribute', () => {
    expect(service.nums).toBeDefined();
  });

  it('nums should be an object', () => {
    expect(service.nums).toBeInstanceOf(Object);
  });

  it('should convert 9 to roman number', () => {
    expect(service.convertToRoman(9)).toEqual('IX');
  });

  it('should convert 10 to roman number', () => {
    expect(service.convertToRoman(10)).toEqual('X');
  });

  it('should convert 40 to roman number', () => {
    expect(service.convertToRoman(40)).toEqual('XL');
  });

  it('should convert 50 to roman number', () => {
    expect(service.convertToRoman(50)).toEqual('L');
  });

  it('should convert 90 to roman number', () => {
    expect(service.convertToRoman(90)).toEqual('XC');
  });

  it('should convert 100 to roman number', () => {
    expect(service.convertToRoman(100)).toEqual('C');
  });

  it('should convert 400 to roman number', () => {
    expect(service.convertToRoman(400)).toEqual('CD');
  });

  it('should convert 500 to roman number', () => {
    expect(service.convertToRoman(500)).toEqual('D');
  });

  it('should convert 900 to roman number', () => {
    expect(service.convertToRoman(900)).toEqual('CM');
  });

  it('should convert 1000 to roman number', () => {
    expect(service.convertToRoman(1000)).toEqual('M');
  });

  it('should convert 101 to roman number', () => {
    expect(service.convertToRoman(101)).toEqual('CI');
  });

  it('should convert 115 to roman number', () => {
    expect(service.convertToRoman(115)).toEqual('CXV');
  });

  it('should convert 134 to roman number', () => {
    expect(service.convertToRoman(134)).toEqual('CXXXIV');
  });

  it('should convert 159 to roman number', () => {
    expect(service.convertToRoman(159)).toEqual('CLIX');
  });

  it('should convert 300 to roman number', () => {
    expect(service.convertToRoman(300)).toEqual('CCC');
  });

  it('should convert 600 to roman number', () => {
    expect(service.convertToRoman(600)).toEqual('DC');
  });

  it('should convert 743 to roman number', () => {
    expect(service.convertToRoman(743)).toEqual('DCCXLIII');
  });

  it('should convert 876 to roman number', () => {
    expect(service.convertToRoman(876)).toEqual('DCCCLXXVI');
  });

  it('should convert 999 to roman number', () => {
    expect(service.convertToRoman(999)).toEqual('CMXCIX');
  });
});
