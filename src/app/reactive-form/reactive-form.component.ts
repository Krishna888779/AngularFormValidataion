import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
 forms:any
Name:any
Email:any
Mobile:any
//  email:any="krishna@gmail.com"
//  names=new FormControl('krishna mohan')
 ngOnInit(){
  debugger
    this.forms=new FormGroup({
      name:new FormControl("Please enter your name",[Validators.required,Validators.minLength(4)]),
      email:new FormControl("Please enter your email",[Validators.required,Validators.email,Validators.pattern("[[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}]")]),
      mobile: new FormControl("Please enter your mobile",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[6-9]{1}[0-9]{9}")]),
    })
 }
 get nameValidation(){return this.forms.get('name')}
 get emailValidation(){return this.forms.get('email')}
 get mobileValidation(){return this.forms.get('mobile')}
 OnSumbit(){
  debugger
  this.forms
  this.Name=this.forms.value.name
  this.Email=this.forms.value.email
  this.Mobile=this.forms.value.mobile
 }
}
