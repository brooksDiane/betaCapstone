import { Injectable } from '@angular/core';

@Injectable()
export class FieldService {
  constructor() {}

  addFieldEvents(
    inputs: NodeListOf<HTMLInputElement>,
    labels: NodeListOf<HTMLLabelElement>
  ) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('focus', () => {
        labels[i].className = 'active';
      });
      inputs[i].addEventListener('blur', () => {
        if (inputs[i].value == '') {
          labels[i].className = 'inactive';
        }
      });
    }
  }

  activateVisibilityIcons(
    visibilityIcons: NodeListOf<HTMLElement>,
    passwordFields: NodeListOf<HTMLInputElement>
  ) {
    for (let i = 0; i < visibilityIcons.length; i++) {
      visibilityIcons[i].addEventListener('click', () => {
        if (visibilityIcons[i].className === 'fa fa-eye') {
          visibilityIcons[i].className = 'fa fa-eye-slash';
          passwordFields[i].type = 'text';
        } else {
          visibilityIcons[i].className = 'fa fa-eye';
          passwordFields[i].type = 'password';
        }
      });
    }
  }
}
