import { AbstractControl, FormControl } from '@angular/forms';

export class CustomValidators {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  static checkUserName(control: AbstractControl): Promise<any> {
    return userNameAllowed(control.value);
  }
}

function userNameAllowed(name: string) {
  const existingUserName = ['srk', 'tsv', 'vsm', 'vsr'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (existingUserName.includes(name)) {
        resolve({ checkUsername: true });
      } else {
        resolve(null);
      }
    }, 3000);
  });
}
