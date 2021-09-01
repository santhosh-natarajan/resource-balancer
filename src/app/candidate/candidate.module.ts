import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { EmailAddressValidatorComponent } from './email-address-validator/email-address-validator.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { ListCandidateGridViewComponent } from './list-candidate-grid-view/list-candidate-grid-view.component';
import { FilterCandidateByPositionComponent } from './filter-candidate-by-position/filter-candidate-by-position.component';
import { FilterCandidateByGenderComponent } from './filter-candidate-by-gender/filter-candidate-by-gender.component';
import { FilterCandidateByCityComponent } from './filter-candidate-by-city/filter-candidate-by-city.component';
import { FilterCandidateByApplicationDateComponent } from './filter-candidate-by-application-date/filter-candidate-by-application-date.component';
import { FilterListSelectedCandidateComponent } from './filter-list-selected-candidate/filter-list-selected-candidate.component';
import { FilterListSelectedCandidateByPositionComponent } from './filter-list-selected-candidate-by-position/filter-list-selected-candidate-by-position.component';
import { FilterListRejectedCandidateByPositionComponent } from './filter-list-rejected-candidate-by-position/filter-list-rejected-candidate-by-position.component';
import { FilterListRejectedCandidateComponent } from './filter-list-rejected-candidate/filter-list-rejected-candidate.component';
import { FilterListOnholdCandidateComponent } from './filter-list-onhold-candidate/filter-list-onhold-candidate.component';
import { FilterListOnholdCandidateByPositionComponent } from './filter-list-onhold-candidate-by-position/filter-list-onhold-candidate-by-position.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { GenerateCandidateApplicationIdComponent } from './generate-candidate-application-id/generate-candidate-application-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpUrlEncodingCodec } from '@angular/common/http'


@NgModule({
  declarations: [
    CandidateComponent,
    CreateCandidateComponent,
    EmailAddressValidatorComponent,
    ListCandidateComponent,
    ListCandidateGridViewComponent,
    FilterCandidateByPositionComponent,
    FilterCandidateByGenderComponent,
    FilterCandidateByCityComponent,
    FilterCandidateByApplicationDateComponent,
    FilterListSelectedCandidateComponent,
    FilterListSelectedCandidateByPositionComponent,
    FilterListRejectedCandidateByPositionComponent,
    FilterListRejectedCandidateComponent,
    FilterListOnholdCandidateComponent,
    FilterListOnholdCandidateByPositionComponent,
    ViewCandidateComponent,
    UpdateCandidateComponent,
    DeleteCandidateComponent,
    GenerateCandidateApplicationIdComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, CandidateRoutingModule],
  providers: [HttpUrlEncodingCodec]
})
export class CandidateModule {}
