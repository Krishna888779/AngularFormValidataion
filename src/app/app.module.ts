import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrossFieldValidationComponent } from './cross-field-validation/cross-field-validation.component';
import { DynamicFormsComponent } from './DynamicForm/dynamic-forms/dynamic-forms.component';
import { QuestionTextboxTsComponent } from './DynamicForm/question-textbox.ts/question-textbox.ts.component';
import { QuestionDropdwonComponent } from './DynamicForm/question-dropdwon/question-dropdwon.component';
import { CompletDynamicFormComponent } from './DynamicForm/complet-dynamic-form/complet-dynamic-form.component';
import { ShowDynamicFormComponent } from './DynamicForm/show-dynamic-form/show-dynamic-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    CrossFieldValidationComponent,
    DynamicFormsComponent,
    QuestionTextboxTsComponent,
    QuestionDropdwonComponent,
    CompletDynamicFormComponent,
    ShowDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
