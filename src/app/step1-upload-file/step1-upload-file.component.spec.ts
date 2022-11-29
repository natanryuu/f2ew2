import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1UploadFileComponent } from './step1-upload-file.component';

describe('Step1UploadFileComponent', () => {
  let component: Step1UploadFileComponent;
  let fixture: ComponentFixture<Step1UploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step1UploadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1UploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
