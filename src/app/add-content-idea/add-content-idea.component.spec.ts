import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentIdeaComponent } from './add-content-idea.component';

describe('AddContentIdeaComponent', () => {
  let component: AddContentIdeaComponent;
  let fixture: ComponentFixture<AddContentIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContentIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
