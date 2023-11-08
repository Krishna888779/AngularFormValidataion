import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent<T> {
  Value:T |undefined
  key:string
  label:string
  required:boolean
  order:number
  controlType:string
  type:string
  options:{key:string,value:string}[]

  constructor(@Inject(String)@Inject(Boolean)@Inject(Number)@Inject(Object) options:{
    value?:T;
    key?:string;
    label?:string;
    required?:boolean;
    order?:number;
    controlType?:string;
    type?:string;
    options?:{key:string,value:string}[];
  }={}){
   this.Value=options.value
   this.key=options.key || ' ';
   this.label=options.label || ' ';
   this.required=!!options.required 
   this.order=options.order===undefined?1:options.order;
   this.controlType=options.controlType  || ' ';
   this.type=options.type || ' ';
   this.options=options.options || [];

  }
ngOnInit(){

}
}
