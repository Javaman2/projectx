import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectyComponent } from './projecty.component';

describe('ProjectyComponent', () => {
  let component: ProjectyComponent;
  let fixture: ComponentFixture<ProjectyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
