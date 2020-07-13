import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWebseriesComponent } from './free-webseries.component';

describe('FreeWebseriesComponent', () => {
  let component: FreeWebseriesComponent;
  let fixture: ComponentFixture<FreeWebseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeWebseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeWebseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
