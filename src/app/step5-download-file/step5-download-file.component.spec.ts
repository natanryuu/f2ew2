import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5DownloadFileComponent } from './step5-download-file.component';

describe('Step5DownloadFileComponent', () => {
  let component: Step5DownloadFileComponent;
  let fixture: ComponentFixture<Step5DownloadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5DownloadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5DownloadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
