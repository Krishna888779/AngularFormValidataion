import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTextboxTsComponent } from './question-textbox.ts.component';

describe('QuestionTextboxTsComponent', () => {
  let component: QuestionTextboxTsComponent;
  let fixture: ComponentFixture<QuestionTextboxTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionTextboxTsComponent]
    });
    fixture = TestBed.createComponent(QuestionTextboxTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
