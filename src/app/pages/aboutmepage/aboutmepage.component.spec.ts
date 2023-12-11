import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmepageComponent } from './aboutmepage.component';

describe('AboutmepageComponent', () => {
  let component: AboutmepageComponent;
  let fixture: ComponentFixture<AboutmepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutmepageComponent]
    });
    fixture = TestBed.createComponent(AboutmepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
