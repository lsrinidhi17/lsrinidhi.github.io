import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';


const routes: Routes = [
  { path: 'certifications', component: CertificationsComponent },
  { path: '',   redirectTo: '/certifications', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CertificationsComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
