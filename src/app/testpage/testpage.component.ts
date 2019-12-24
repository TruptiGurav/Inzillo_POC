import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
pipeline_show :boolean =true;
clicked:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onClick($event: any) { 
    //alert("pipieline clicked");
    this.pipeline_show=false;
    this.clicked=true;
  }

}
