import { Component, OnInit  } from '@angular/core';
import {Sort} from '@angular/material/sort';


export interface NewpriceOption {
  name:string;
  savings:number;
  residual:number;
  rate:number;
  }
  
  

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.css']
})
export class SortTableComponent implements OnInit {
  price_option : NewpriceOption[] = [
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

  sortedData: NewpriceOption[];

  constructor() {
    this.sortedData = this.price_option.slice();
  }

  
  ngOnInit() {
  }
  sortData(sort: Sort) {
    const data = this.price_option.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'savings': return compare(a.savings, b.savings, isAsc);
        case 'residual': return compare(a.residual, b.residual, isAsc);
        case 'rate': return compare(a.rate, b.rate, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}