import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2FilePrevComponent } from './step2-file-prev.component';

describe('Step2FilePrevComponent', () => {
  let component: Step2FilePrevComponent;
  let fixture: ComponentFixture<Step2FilePrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step2FilePrevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2FilePrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
