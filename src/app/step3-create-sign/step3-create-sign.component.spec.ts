import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3CreateSignComponent } from './step3-create-sign.component';

describe('Step3CreateSignComponent', () => {
  let component: Step3CreateSignComponent;
  let fixture: ComponentFixture<Step3CreateSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step3CreateSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3CreateSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
