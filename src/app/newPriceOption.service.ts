import { Injectable } from '@angular/core';
import { NewpriceOption } from './NewpriceOption';
@Injectable()
export class NewPriceOptionService {
    testData : string;
    price_option:NewpriceOption[];

  constructor() { 
    this.testData ='This is test data from Service';
    this.price_option= [
      {name:'Interchange+.10% and $0.10',savings:1331.33,residual:261.49,rate:2.29} ,
      {name:'Interchange +.15% and $0.10',savings:1298.33,residual:287.49,rate:2.32},
      {name:'Interchange +.20% and $0.10',savings:1257.31,residual:320.49,rate:2.36},
      {name:'Interchange+.25% and $0.10',savings:1215.33,residual:353.49,rate:2.40},
      {name:'Interchange +.30% and $0.10',savings:1174.33,residual:387.49,rate:2.44} ,
      {name:'2.50% Flat',savings:929.33,residual:163.49,rate:2.67},
      {name:'2.60% Flat',savings:846.33,residual:233.49,rate:2.75} ,
      {name:'2.75% Flat',savings:721.33,residual:332.49,rate:2.87} ,
      {name:'6 Tiered w/Reg Debit',savings:526.33,residual:417.49,rate:3.06},
      {name:'3 Tiered w/Reg Debit',savings:492.33,residual:444.49,rate:3.09}
    ];

  }
priceOptions():NewpriceOption[] {
    return this.price_option;
}
}