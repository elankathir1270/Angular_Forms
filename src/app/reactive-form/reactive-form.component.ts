import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/customValidators.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  formStatus: string = '';

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastname: new FormControl('', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl(
        null,
        Validators.required,
        CustomValidators.checkUserName
      ),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl('', Validators.required)]),
      experience: new FormArray([]),
    });

    /* To understand valueChanges*/
    this.reactiveForm.get('firstname').valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.reactiveForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    /* To understand statusChanges*/

    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formStatus = status;
    });
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl('', Validators.required)
    );
  }

  deleteSkill(index: number) {
    const control = <FormArray>this.reactiveForm.get('skills');

    control.removeAt(index);
  }

  addExperience() {
    const experience = new FormGroup({
      company: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      totalExp: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(experience);
  }

  deleteExperience(index: number) {
    const controls = <FormArray>this.reactiveForm.get('experience');

    controls.removeAt(index);
  }

  generateUsername() {
    let username = '';
    const fName = this.reactiveForm.get('firstname').value;
    const lName = this.reactiveForm.get('lastname').value;
    const dob = this.reactiveForm.get('dob').value;

    if (fName.length >= 3) {
      username += fName.slice(0, 3);
    } else {
      username = fName;
    }

    if (lName.length >= 3) {
      username += lName.slice(0, 3);
    } else {
      username = lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    // using setValue method we must provide the complete structure of formGroup value as object.
    // this.reactiveForm.setValue({
    //   firstname: fName,
    //   lastname: lName,
    //   email: '',
    //   username: username,
    //   dob: dob,
    //   gender: '',
    //   address: {
    //     street: '',
    //     country: '',
    //     city: '',
    //     region: '',
    //     postal: '',
    //   },
    //   skills: [''],
    //   experience: [],
    // });

    // using setValue method can update single formControl also
    this.reactiveForm.get('username').setValue(username);

    //patchValue
    this.reactiveForm.patchValue({
      username: username,
      address: {
        // this is the way to update value for a form group property
        country: 'India',
      },
    });
  }

  OnFormSubmit() {
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset(
      /*usually after reset every fields in form will be removed still
      if we want to retain some default values can pass object like this */
      {
        firstname: null,
        lastname: null,
        email: null,
        username: null,
        dob: null,
        gender: 'male',
        address: {
          street: null,
          country: 'India',
          city: null,
          region: null,
          postal: null,
        },
        skills: [null],
        experience: [],
      }
    );
  }
}
