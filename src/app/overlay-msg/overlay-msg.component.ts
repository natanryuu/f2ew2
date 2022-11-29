import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-overlay-msg',
  templateUrl: './overlay-msg.component.html',
  styleUrls: ['./overlay-msg.component.scss'],
})
export class OverlayMsgComponent implements OnInit {
  @ViewChild('msg') tplRef!: TemplateRef<any>;
  overlayRef!: OverlayRef;

  // @ViewChild('tplFalse') tplFRef!: TemplateRef<any>;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // 設定彈窗出來時的定位
    const strategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configs = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: strategy,
    });

    this.overlayRef = this.overlay.create(configs);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }

  onClick() {
    this.overlayRef.attach(
      new TemplatePortal(this.tplRef, this.viewContainerRef)
    );
  }
}
