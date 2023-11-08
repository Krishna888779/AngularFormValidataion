import { Component } from '@angular/core';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';

@Component({
  selector: 'app-question-dropdwon',
  templateUrl: './question-dropdwon.component.html',
  styleUrls: ['./question-dropdwon.component.css']
})
export class QuestionDropdwonComponent extends DynamicFormsComponent<string>{
 
   override controlType ='textbox'

}
