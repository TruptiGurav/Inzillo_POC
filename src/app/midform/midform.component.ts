import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midform',
  templateUrl: './midform.component.html',
  styleUrls: ['./midform.component.css']
})
export class MidformComponent  {
fname:string;
email:string;
SIC_code : string[] = ['5812 RESTAURANT','5813 RESTAURANT','5814 RESTAURANT','5815 RESTAURANT']
selected_sic:string;

desc:string='March 2016';
sic:string ='';
visa1_t:number=0;
visa1:number=0;
visa2_t:number=0;
visa2:number=0;
visa3_t:number=0;
visa3:number=0;
visa4_t:number=0;
visa4:number=0;
tot_vol:number;
tot_trans:number;
avg_tick:number;
cur_rate :number;
cur_fees:number;
cur_a_fees:number;
selectedDevice:string ;
  constructor() { }

  onChange(selectedDevice: any) {
    this.visa1 =1000;
    this.visa2 =1000;
    this.visa3 =1000; 
    this.visa4 =1000;
    this.visa1_t =1000;
    this.visa2_t =1000;
    this.visa3_t =1000; 
    this.visa4_t =1000;


    this.tot_vol = this.visa1 + this.visa2 + this.visa3 + this.visa4;
    this.tot_trans =  this.visa1_t + this.visa2_t + this.visa3_t + this.visa4_t;
    this.avg_tick = this.tot_vol / this.tot_trans ; 
    this.cur_rate = 5;
    this.cur_fees = 372;
    this.cur_a_fees = 300;

  }
  

}

