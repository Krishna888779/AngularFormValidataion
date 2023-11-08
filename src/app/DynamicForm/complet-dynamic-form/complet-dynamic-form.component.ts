import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';
@Component({
  selector: 'app-complet-dynamic-form',
  templateUrl: './complet-dynamic-form.component.html',
  styleUrls: ['./complet-dynamic-form.component.css']
})
export class CompletDynamicFormComponent {
@Input() question: any// DynamicFormsComponent<string>;
@Input() forms!:FormGroup;
@Input() Formsdata:any
//question:any
//get isValid() {debugger; return this.forms.controls[this.question.key].valid;}
ngOnInit(){
 // this.question=this.Formsdata
 debugger
 console.log(this.question)
 //console.log(this.isValid)
 //this.isValid
  debugger

}
}
