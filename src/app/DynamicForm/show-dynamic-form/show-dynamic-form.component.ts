import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';
import { ControlServiceService } from '../control-service.service';

@Component({
  selector: 'app-show-dynamic-form',
  templateUrl: './show-dynamic-form.component.html',
  styleUrls: ['./show-dynamic-form.component.css']
})
export class ShowDynamicFormComponent implements OnInit {
@Input() questions:DynamicFormsComponent<string>[] | null=[]
form!:FormGroup;
payLoad=""
constructor(private qcs:ControlServiceService){}
ngOnInit(): void {
  debugger
  console.log(this.questions)
this.form=this.qcs.toFormGroup(this.questions as DynamicFormsComponent<string>[])
}
onSubmit(){
  this.payLoad=JSON.stringify(this.form.getRawValue());
}
}
