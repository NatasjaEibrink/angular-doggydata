import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPuppyWeightFormComponent } from './register-puppy-weight-form.component';

describe('RegisterPuppyWeightFormComponent', () => {
  let component: RegisterPuppyWeightFormComponent;
  let fixture: ComponentFixture<RegisterPuppyWeightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPuppyWeightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPuppyWeightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
