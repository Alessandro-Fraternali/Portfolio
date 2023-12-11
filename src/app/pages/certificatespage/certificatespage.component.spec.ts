import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatespageComponent } from './certificatespage.component';

describe('CertificatespageComponent', () => {
  let component: CertificatespageComponent;
  let fixture: ComponentFixture<CertificatespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatespageComponent]
    });
    fixture = TestBed.createComponent(CertificatespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
