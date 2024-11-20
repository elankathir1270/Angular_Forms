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
  dob : string
  emailId : string = '';
  userName : string = '';
  gender : string = '';
  country : string = '';
  postal : string = '';
  city : string = '';
  region : string = '';
  IsAgreed : boolean

  genders = [
    {id: "check-male", value : "male", display : "Male"},
    {id: "check-female", value : "female", display : "Female"},
    {id: "check-other", value : "other", display : "Prefer not to say"},
  ]

  onFormSubmission(){
    console.log(this.form);
    this.firstName = this.form.value.firstname
    this.lastName = this.form.value.lastName
    this.emailId = this.form.value.email
    this.dob = this.form.value.dob
    this.userName = this.form.value.username
    this.country = this.form.value.address.country
    this.city = this.form.value.address.city
    this.region = this.form.value.address.region
    this.city = this.form.value.address.city

    this.form.reset();

    this.form.form.patchValue({ //After reset the form this patch will make it as default value
      gender : 'male',
      address : {
        country : 'India'
      }
    })
  }

  generateUsername(){
    let username = '';

    if(this.firstName.length >= 3) {
      username += this.firstName.slice(0,3);
    }
    else{
      username = this.firstName
    }

    if(this.lastName.length >= 3) {
      username += this.lastName.slice(0,3);
    }
    else{
      username = this.lastName
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear()

    username = username.toLowerCase();

    // using setValue method we must provide the complete structure of form value object.
    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal
    //   }
    // })

    this.form.form.patchValue({
      username : username,
      address : { // this is the way to update value for a form group property
        country : 'India'
      }
    })
    this.userName = username
  }

}
