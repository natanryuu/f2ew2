import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4ModifySignComponent } from './step4-modify-sign.component';

describe('Step4ModifySignComponent', () => {
  let component: Step4ModifySignComponent;
  let fixture: ComponentFixture<Step4ModifySignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4ModifySignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4ModifySignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
