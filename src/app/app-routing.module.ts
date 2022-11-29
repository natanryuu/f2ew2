import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Step1UploadFileComponent } from './step1-upload-file/step1-upload-file.component';
import { Step2FilePrevComponent } from './step2-file-prev/step2-file-prev.component';
import { Step3CreateSignComponent } from './step3-create-sign/step3-create-sign.component';
import { Step3UplaodSignComponent } from './step3-uplaod-sign/step3-uplaod-sign.component';
import { Step4ModifySignComponent } from './step4-modify-sign/step4-modify-sign.component';
import { Step5DownloadFileComponent } from './step5-download-file/step5-download-file.component';

const routes: Routes = [
  { path: '', component: CoverPageComponent },
  { path: 'up-file', component: Step1UploadFileComponent },
  { path: 'file-pre', component: Step2FilePrevComponent },
  { path: 'c-sign', component: Step3CreateSignComponent },
  { path: 'up-sign', component: Step3UplaodSignComponent },
  { path: 'modi-sign', component: Step4ModifySignComponent },
  { path: 'DL-file', component: Step5DownloadFileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
