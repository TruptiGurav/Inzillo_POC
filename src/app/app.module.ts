import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestpageComponent } from './testpage/testpage.component';
import { MidformComponent } from './midform/midform.component';
import { FormsModule } from '@angular/forms';
import { LastcolumnComponent } from './lastcolumn/lastcolumn.component';
import { NewPriceOptionService } from './newPriceOption.service';
import { SortTableComponent } from './sort-table/sort-table.component';



@NgModule({
  declarations: [
    AppComponent,
    TestpageComponent,
    MidformComponent,
    LastcolumnComponent,
    SortTableComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,FormsModule,MatSortModule

  ],
  providers: [NewPriceOptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
