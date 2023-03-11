import { Component, AfterViewInit } from '@angular/core';
import { FieldService } from 'src/app/marketing/field.service';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
    '@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");',
  ],
  providers: [SignInService],
})
export class SignInComponent implements AfterViewInit {
  inputs!: NodeListOf<HTMLInputElement>;
  labels!: NodeListOf<HTMLLabelElement>;
  passwordFields!: NodeListOf<HTMLInputElement>;
  visibilityIcons!: NodeListOf<HTMLElement>;

  passwordField!: HTMLInputElement;
  emailField!: HTMLInputElement;

  constructor(
    private fieldService: FieldService,
    private signInService: SignInService
  ) {}

  ngAfterViewInit(): void {
    this.inputs = document.querySelectorAll('.field input');
    this.labels = document.querySelectorAll('.field label');
    this.fieldService.addFieldEvents(this.inputs, this.labels);

    this.visibilityIcons = document.querySelectorAll('i.fa-eye');
    this.passwordFields = document.querySelectorAll(`input[type=password]`);
    this.fieldService.activateVisibilityIcons(
      this.visibilityIcons,
      this.passwordFields
    );

    this.passwordField = document.querySelector('input[name=password')!;
    this.emailField = document.querySelector('input[name=email')!;
  }

  signIn() {
    this.signInService.signIn(this.emailField.value, this.passwordField.value);
  }
}
