import { Component, AfterViewInit } from '@angular/core';
import { FieldService } from 'src/app/marketing/field.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
    '@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");',
  ],
})
export class SignInComponent implements AfterViewInit {
  inputs!: NodeListOf<HTMLInputElement>;
  labels!: NodeListOf<HTMLLabelElement>;
  passwordFields!: NodeListOf<HTMLInputElement>;
  visibilityIcons!: NodeListOf<HTMLElement>;

  constructor(private fieldService: FieldService) {}

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
}
