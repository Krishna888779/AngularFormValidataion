import { Component } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-cross-field-validation',
  templateUrl: './cross-field-validation.component.html',
  styleUrls: ['./cross-field-validation.component.css']
})
export class CrossFieldValidationComponent {
myForm: any;
  formBuilder!: FormBuilder;
myforms:any
Name:any
Email:any
Mobile:any
Age:any
Password:any
ConfirmPassword:any


ngOnInit(){
this.myforms=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[6-9]{1}[0-9]{9}")]),
    age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    password: new FormControl('',[Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g'),Validators.minLength(8),Validators.maxLength(12)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g'),Validators.minLength(8),Validators.maxLength(12)])
 },{ validators:this.confirmPassword})


}

 confirmPassword: ValidatorFn=(control:AbstractControl):ValidationErrors|null=>{
  const password =control.get('password')?.value;
  const confirmPassword=control.get('confirmpassword')?.value;
  if(password!==confirmPassword)
  {
    return {passwordMismatch:true};
   // return control.get('confirmPassword')?.setErrors({passwordMismatch:true})?null:null
  }
  else{
    return null;
  }
}


get names(){return this.myforms.get('name')}
get emails(){return this.myforms.get('email')}
get mobiles(){return this.myforms.get('mobile')}
get ages(){return this.myforms.get('age')}
get passwords(){return this.myforms.get('password')}
get confirmpasswords(){return this.myforms.get('confirmpassword')}
OnSumbit(){
debugger
  if(this.myforms.valid)
  {
    this.Name=this.myforms.value.name
    this.Email=this.myforms.value.email
    this.Mobile=this.myforms.value.mobile
    this.Age =this.myforms.value.mobile
    this.Password=this.myforms.value.password
    this.ConfirmPassword=this.myforms.value.comfirmpassword
  }
}
}
