import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHexagonComponent } from './test-hexagon.component';

describe('TestHexagonComponent', () => {
  let component: TestHexagonComponent;
  let fixture: ComponentFixture<TestHexagonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHexagonComponent]
    });
    fixture = TestBed.createComponent(TestHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
