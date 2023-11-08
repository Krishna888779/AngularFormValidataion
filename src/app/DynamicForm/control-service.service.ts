import { Injectable } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {
toFormGroup(questions:DynamicFormsComponent<string>[]){
  const group:any={};
  questions.forEach(question=>{
    group[question.key]=question.required?new FormControl(question.Value || ' ',Validators.required):new FormControl(question.Value || " ");
  });
  return new FormGroup(group);
}
 
}
