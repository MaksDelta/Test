import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;

  destroy$: Subject<boolean> = new Subject<boolean>();

  hideRequiredMarker = 'true';

  phoneMask = ['+', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/];

  get filled(): boolean {
    if (
      this.contactForm.get('name')?.value &&
      this.contactForm.get('email')?.value &&
      this.contactForm.get('phone')?.value &&
      this.contactForm.get('message')?.value
    ) {
      return true;
    }
    return false;
  }

  nameError: boolean = false;
  emailError: boolean = false;
  phoneError: boolean = false;
  messageError: boolean = false;

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
      name: new FormControl(null, []),
      email: new FormControl(null, [Validators.email]),
      phone: new FormControl(null, [Validators.pattern('[- +()0-9]+')]),
      message: new FormControl(null, []),
    });
  }

  ngOnInit(): void {

    this.contactForm
      .get('name')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        this.checkErrorName();
      });

    this.contactForm
      .get('email')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        this.checkErrorEmail();
      });

    this.contactForm
      .get('phone')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        this.checkErrorPhone();
      });

    this.contactForm
      .get('message')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        this.checkErrorMessage();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  checkErrorName(): void {
    this.nameError = !this.contactForm.get('name')?.value;
  }

  checkErrorEmail(): void {
    this.emailError = !this.contactForm.get('email')?.value;
  }

  checkErrorPhone(): void {
    this.phoneError = !this.contactForm.get('phone')?.value;
  }
  
  checkErrorMessage(): void {
    this.messageError = !this.contactForm.get('message')?.value;
  }

  onSubmit() {
    if (
      this.contactForm.get('name')?.valid &&
      this.contactForm.get('email')?.valid &&
      this.contactForm.get('phone')?.valid &&
      this.contactForm.get('message')?.valid
    ) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
};

