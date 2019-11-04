import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLitterComponent } from './register-litter.component';

describe('RegisterLitterComponent', () => {
  let component: RegisterLitterComponent;
  let fixture: ComponentFixture<RegisterLitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
