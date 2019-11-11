import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowresultatenComponent } from './showresultaten.component';

describe('ShowresultatenComponent', () => {
  let component: ShowresultatenComponent;
  let fixture: ComponentFixture<ShowresultatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowresultatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowresultatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
