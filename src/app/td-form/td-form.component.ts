import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent {
  @ViewChild('registrationForm')form : NgForm

  firstName : string = '';
  lastName : string = '';
  emailId : string = '';

  genders = [
    {id: "check-male", value : "male", display : "Male"},
    {id: "check-female", value : "female", display : "Female"},
    {id: "check-other", value : "other", display : "Prefer not to say"},
  ]

  onFormSubmission(){
    console.log(this.form);

  }
}
