import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidformComponent } from './midform.component';

describe('MidformComponent', () => {
  let component: MidformComponent;
  let fixture: ComponentFixture<MidformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
