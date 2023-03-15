import { Component, AfterViewInit } from '@angular/core';

import { FieldService } from 'src/app/marketing/field.service';
import zxcvbn from 'zxcvbn'; // this one required from me turning "esModuleInterop": true in tsconfig.json, also install "@types/zxcvbn";
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService],
})
export class SignUpComponent implements AfterViewInit {
  inputs!: NodeListOf<HTMLInputElement>;
  labels!: NodeListOf<HTMLLabelElement>;
  passwordFields!: NodeListOf<HTMLInputElement>;
  visibilityIcons!: NodeListOf<HTMLElement>;

  passwordField!: HTMLInputElement;
  passwordStrengthBar!: NodeListOf<HTMLDivElement>;

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private fieldService: FieldService,
    private signUpService: SignUpService
  ) {}

  ngAfterViewInit(): void {
    this.addFieldEvents();
    this.activateVisibilityIcons();
    this.activatePasswordStrengthMeter();
  }

  private addFieldEvents() {
    this.inputs = document.querySelectorAll('.field input');
    this.labels = document.querySelectorAll('.field label');
    this.fieldService.addFieldEvents(this.inputs, this.labels);
  }

  private activateVisibilityIcons() {
    this.visibilityIcons = document.querySelectorAll('i.fa-eye');
    this.passwordFields = document.querySelectorAll(`input[type=password]`);
    this.fieldService.activateVisibilityIcons(
      this.visibilityIcons,
      this.passwordFields
    );
  }

  private activatePasswordStrengthMeter() {
    this.passwordField = document.querySelector(`#prime-password`)!;
    this.passwordStrengthBar = document.querySelectorAll(
      `.password-strength-bar div`
    );

    this.passwordField.addEventListener('input', (ev) => {
      const target = <HTMLInputElement>ev.target;
      if (target == undefined || target.value == '') {
        //wow, I'm actually narrowing down a perfectly working piece of code. oh god
        this.clearPrevFeedback();
      } else {
        this.giveNewFeedback(target.value);
      }
    });
  }

  private giveNewFeedback(password: string) {
    switch (zxcvbn(password).score) {
      case 0:
        this.changeBarColor('red', 1);
        break;
      case 1:
        this.changeBarColor('yellow', 2);
        break;
      case 2:
        this.changeBarColor('orange', 3);
        break;
      case 3:
        this.changeBarColor('green', 4);
        break;
      case 4:
        this.changeBarColor('blue', 5);
        break;
      default:
    }
  }

  private changeBarColor(color: string, number: number) {
    this.clearPrevFeedback();
    for (let i = 0; i < number; i++) {
      this.passwordStrengthBar[i].className = color;
    }
  }

  private clearPrevFeedback() {
    this.passwordStrengthBar.forEach((el) => {
      el.className = '';
    });
  }

  signUp() {
    this.signUpService.signUp(
      this.email,
      this.password,
      this.firstname,
      this.lastname
    );
  }
}
