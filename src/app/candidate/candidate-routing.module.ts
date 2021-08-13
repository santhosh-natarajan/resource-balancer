import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';

const routes: Routes = [
  { path: '', component: CandidateComponent },
  { path: 'new', component: CreateCandidateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
