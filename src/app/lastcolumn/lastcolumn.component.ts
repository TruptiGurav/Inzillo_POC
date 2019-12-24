import { Component, OnInit } from '@angular/core';
import { NewPriceOptionService } from '../newPriceOption.service';
import { NewpriceOption } from '../NewpriceOption';


@Component({
  selector: 'app-lastcolumn',
  templateUrl: './lastcolumn.component.html',
  styleUrls: ['./lastcolumn.component.css'],
})
export class LastcolumnComponent implements OnInit {

  options : NewpriceOption[];
  sortedOptions: NewpriceOption[];
  selectedRow:NewpriceOption;

  

  constructor( private newobj :NewPriceOptionService) {
    this.get_priceOptions();
  }

  onClick(event: any) {
    alert("Button clicked")

  }
  get_priceOptions() { 
    this.options = this.newobj.priceOptions();
  }
  RowSelected(selected:any){
   this.selectedRow=selected;
  }
  ngOnInit() {
   
  }

  
  
}

