import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarAdminPage } from './recuperar-admin.page';

describe('RecuperarAdminPage', () => {
  let component: RecuperarAdminPage;
  let fixture: ComponentFixture<RecuperarAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
