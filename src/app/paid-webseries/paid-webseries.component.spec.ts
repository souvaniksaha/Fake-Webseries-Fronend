import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidWebseriesComponent } from './paid-webseries.component';

describe('PaidWebseriesComponent', () => {
  let component: PaidWebseriesComponent;
  let fixture: ComponentFixture<PaidWebseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidWebseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidWebseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
