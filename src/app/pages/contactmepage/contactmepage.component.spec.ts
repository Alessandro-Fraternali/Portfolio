import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmepageComponent } from './contactmepage.component';

describe('ContactmepageComponent', () => {
  let component: ContactmepageComponent;
  let fixture: ComponentFixture<ContactmepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactmepageComponent]
    });
    fixture = TestBed.createComponent(ContactmepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
