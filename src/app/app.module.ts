import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { HeaderComponent } from './header/header.component';
import { OverlayMsgComponent } from './overlay-msg/overlay-msg.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Step1UploadFileComponent } from './step1-upload-file/step1-upload-file.component';
import { Step2FilePrevComponent } from './step2-file-prev/step2-file-prev.component';
import { Step3CreateSignComponent } from './step3-create-sign/step3-create-sign.component';
import { Step3UplaodSignComponent } from './step3-uplaod-sign/step3-uplaod-sign.component';
import { Step4ModifySignComponent } from './step4-modify-sign/step4-modify-sign.component';
import { Step5DownloadFileComponent } from './step5-download-file/step5-download-file.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponent,
    HeaderComponent,
    OverlayMsgComponent,
    ProgressBarComponent,
    PageNotFoundComponent,
    Step1UploadFileComponent,
    Step2FilePrevComponent,
    Step3CreateSignComponent,
    Step3UplaodSignComponent,
    Step4ModifySignComponent,
    Step5DownloadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
