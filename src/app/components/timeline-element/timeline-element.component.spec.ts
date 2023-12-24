import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineElementComponent } from './timeline-element.component';

describe('TimelineElementComponent', () => {
  let component: TimelineElementComponent;
  let fixture: ComponentFixture<TimelineElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineElementComponent]
    });
    fixture = TestBed.createComponent(TimelineElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
