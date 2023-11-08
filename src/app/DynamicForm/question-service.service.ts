import { Injectable } from '@angular/core';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { QuestionDropdwonComponent } from './question-dropdwon/question-dropdwon.component';
import { QuestionTextboxTsComponent } from './question-textbox.ts/question-textbox.ts.component';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }

  getQuestion(){
    const question:DynamicFormsComponent<string>[]=[
    new QuestionDropdwonComponent({
     key:'brave',
     label:'Bravery Rating',
     options:[
      {key:'solid',value:'Solid'},
      {key:'great',value:'Great'},
      {key:'good',value:'Good'},
      {key:'unproven',value:'Unproven'}
     ],
     order:3
    }),
    new QuestionTextboxTsComponent({
      key:'firstName',
      label:'First Name',
      value:'Krishna Mohan',
      required:true,
      order:1
    }),
    new QuestionTextboxTsComponent ({
      key:'emailAddress',
      label:'Email',
      type:'email',
      order:2
    })
  ];
    return of (question.sort((a,b)=>a.order-b.order));
}
}
