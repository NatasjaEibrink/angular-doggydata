import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthtestresultsComponent } from './healthtestresults.component';

describe('HealthtestresultsComponent', () => {
  let component: HealthtestresultsComponent;
  let fixture: ComponentFixture<HealthtestresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthtestresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthtestresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
