import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppydataComponent } from './puppydata.component';

describe('PuppydataComponent', () => {
  let component: PuppydataComponent;
  let fixture: ComponentFixture<PuppydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
