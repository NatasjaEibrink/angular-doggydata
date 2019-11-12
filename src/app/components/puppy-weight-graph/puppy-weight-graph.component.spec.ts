import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyWeightGraphComponent } from './puppy-weight-graph.component';

describe('PuppyWeightGraphComponent', () => {
  let component: PuppyWeightGraphComponent;
  let fixture: ComponentFixture<PuppyWeightGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyWeightGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyWeightGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
