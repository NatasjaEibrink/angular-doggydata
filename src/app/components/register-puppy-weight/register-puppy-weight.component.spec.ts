import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPuppyWeightComponent } from './register-puppy-weight.component';

describe('RegisterPuppyWeightComponent', () => {
  let component: RegisterPuppyWeightComponent;
  let fixture: ComponentFixture<RegisterPuppyWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPuppyWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPuppyWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
