import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
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
      name:new FormControl(" ",[Validators.required,Validators.minLength(4)]),
      email:new FormControl(" ",[Validators.required,Validators.email,Validators.pattern("[^@\s]+@[^@\s]+\.[^@\s]+")]),
      mobile: new FormControl(" ",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[6-9]{1}[0-9]{9}")]),
    })
 }
 get nameValidation(){ debugger;return this.forms.get('name')}
 get emailValidation(){return this.forms.get('email')}
 get mobileValidation(){return this.forms.get('mobile')}
 OnSumbit(){
  debugger
  this.forms.valid 
  this.Name=this.forms.value.name
  this.Email=this.forms.value.email
  this.Mobile=this.forms.value.mobile
 }
}
