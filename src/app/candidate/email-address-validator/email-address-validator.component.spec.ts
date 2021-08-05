import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressValidatorComponent } from './email-address-validator.component';

describe('EmailAddressValidatorComponent', () => {
  let component: EmailAddressValidatorComponent;
  let fixture: ComponentFixture<EmailAddressValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAddressValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddressValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
