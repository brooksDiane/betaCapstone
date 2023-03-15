import { Component, AfterViewInit } from '@angular/core';
import { FieldService } from 'src/app/marketing/field.service';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService],
})
export class SignInComponent implements AfterViewInit {
  inputs!: NodeListOf<HTMLInputElement>;
  labels!: NodeListOf<HTMLLabelElement>;
  passwordFields!: NodeListOf<HTMLInputElement>;
  visibilityIcons!: NodeListOf<HTMLElement>;

  password: string = '';
  email: string = '';

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
  }

  signIn() {
    console.log({ em: this.email, p: this.password });
    this.signInService.signIn(this.email, this.password);
  }
}
