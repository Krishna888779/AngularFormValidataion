import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  names:any 
  email:any
  mobile:any
  
  ngOnInit()
  {
    
  }

  OnSumbit(forms:any){

    if(forms.valid){
   this.names=forms.value.name
   this.email=forms.value.email
   this.mobile=forms.value.mobile
   alert("form summited")
   debugger
    }
  else{
    alert("please fill all field")
  }
  
  
  }

  reset(form:any)
  {
    form.reset()
  }
}
