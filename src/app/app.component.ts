import { Component } from '@angular/core';
import { QuestionServiceService } from './DynamicForm/question-service.service';
import { Observable } from 'rxjs';
import { DynamicFormsComponent } from './DynamicForm/dynamic-forms/dynamic-forms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[QuestionServiceService]
})
export class AppComponent {
  title = 'FormValidation';
  questions$:Observable<DynamicFormsComponent<any>[]>;

  constructor(service:QuestionServiceService){
    this.questions$=service.getQuestion();
  }
}
