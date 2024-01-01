import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyBannerComponent } from './privacy-banner.component';

describe('PrivacyBannerComponent', () => {
  let component: PrivacyBannerComponent;
  let fixture: ComponentFixture<PrivacyBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyBannerComponent]
    });
    fixture = TestBed.createComponent(PrivacyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
