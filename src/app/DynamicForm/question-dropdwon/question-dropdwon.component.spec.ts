import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDropdwonComponent } from './question-dropdwon.component';

describe('QuestionDropdwonComponent', () => {
  let component: QuestionDropdwonComponent;
  let fixture: ComponentFixture<QuestionDropdwonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDropdwonComponent]
    });
    fixture = TestBed.createComponent(QuestionDropdwonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
