import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastcolumnComponent } from './lastcolumn.component';

describe('LastcolumnComponent', () => {
  let component: LastcolumnComponent;
  let fixture: ComponentFixture<LastcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
