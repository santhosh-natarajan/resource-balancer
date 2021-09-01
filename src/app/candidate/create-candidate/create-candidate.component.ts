import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  candidateCreationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.candidateCreationForm = this.formBuilder.group({
      postionApplied : new FormControl(),
      fullName: new FormControl(),
      gender: new FormControl(),
      streetAddress: new FormControl(),
      streetAddress2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl(),
      emailAddress: new FormControl(),
      phoneNumber: new FormControl(),
      source: new FormControl(),
      isTermsAgree: new FormControl()
    })

  }

  ngOnInit(): void {}

  onSubmit() { 
    console.log(this.candidateCreationForm)
  }
}
