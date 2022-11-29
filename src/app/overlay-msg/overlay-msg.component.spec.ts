import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayMsgComponent } from './overlay-msg.component';

describe('OverlayMsgComponent', () => {
  let component: OverlayMsgComponent;
  let fixture: ComponentFixture<OverlayMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
