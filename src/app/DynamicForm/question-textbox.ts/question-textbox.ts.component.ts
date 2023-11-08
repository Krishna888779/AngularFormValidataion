import { Component } from '@angular/core';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';
@Component({
  selector: 'app-question-textbox.ts',
  templateUrl: './question-textbox.ts.component.html',
  styleUrls: ['./question-textbox.ts.component.css']
})
export class QuestionTextboxTsComponent extends DynamicFormsComponent<string> {
  override controlType='dropdown';
}

