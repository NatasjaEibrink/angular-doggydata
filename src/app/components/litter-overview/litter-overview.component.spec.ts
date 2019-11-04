import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterOverviewComponent } from './litter-overview.component';

describe('LitterOverviewComponent', () => {
  let component: LitterOverviewComponent;
  let fixture: ComponentFixture<LitterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
