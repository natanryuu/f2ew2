import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3UplaodSignComponent } from './step3-uplaod-sign.component';

describe('Step3UplaodSignComponent', () => {
  let component: Step3UplaodSignComponent;
  let fixture: ComponentFixture<Step3UplaodSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step3UplaodSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3UplaodSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
